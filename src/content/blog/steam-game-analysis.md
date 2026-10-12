---
title: "What I learned from analyzing Steam game data"
description: "What analyzing Steam tags with coding agents taught me about Bayesian modeling, missing outcomes, and the limits of advice on what game to make."
pubDate: 2026-10-12
tags: ["Data Analysis", "Bayesian Statistics", "AI Agents", "Game Development"]
author: "Antti Hiltunen"
---

I was watching YouTube and browsing online when I started noticing a small industry of market analysis aimed at indie game developers. People were using public Steam data to compare genres and features, with the idea that this could help developers decide what kind of game to make.

I found the idea quite convincing at first. If certain kinds of games consistently attract more players, it seems reasonable to take that into account. You might only be hoping for a modest success with your first or second game. Knowing which features people value, and which kinds of games struggle to find an audience, could save a lot of work.

So I wanted to try this myself. I was curious about the market, wanted to learn some statistics, and thought it would be a good test of coding agents. Could they help me work through an analysis that I would have had difficulty doing on my own?

They could, to quite a considerable extent. But as I got further into the project, I became less convinced that the analysis could answer the question that had interested me. I did find associations between tags and review counts. What became doubtful was how much those associations told me about the consequences of choosing one kind of game over another.

The agents were helpful from the beginning. The original CSV was large enough to crash my editor when I tried to open it. I could still have an agent write code to read it, inspect the columns, and prepare the data. That made it possible to get started without manually looking through the whole thing.

The idea was to look at the relationship between Steam tags and review counts. I did not have actual revenue figures, but reviews seemed like a useful measure of whether a game had attracted attention. Even negative reviews mean that people noticed the game and responded to it. Of course, that does not tell us whether it made enough money to pay for its development. I was using attention as an approximation for something I could not directly measure.

The prepared dataset contained 79,524 titles. I wanted the comparison to be relevant to a developer making a paid indie game, so I filtered out free-to-play titles, games associated with major publishers, and games identified by a small set of licensed-franchise tags. The filters were imperfect, but they left a more relevant group of 68,717 titles with 444 different tags.

One thing worth being careful about was how to identify the major publishers. Simply removing publishers with very high review counts would also remove successful independent developers. I wanted to keep those examples, so the filter used a curated publisher list.

The model then estimated each tag's association with review count, accounting for the other tags and for the game's age, price, supported languages, and total number of tags.

I first tried ordinary least squares regression in an earlier experiment, then moved to a Bayesian model. The final version uses a negative binomial distribution, which can accommodate the enormous variation in review counts. Many games have only a handful of reviews, while a few have hundreds of thousands. The Bayesian approach also gives us uncertainty around the estimated associations.

For a rough picture of how this works, imagine a landscape over possible model parameters. The prior describes our assumptions before seeing the data; combining it with the likelihood gives the posterior distribution. Hamiltonian Monte Carlo turns the negative log of that posterior into a landscape, with higher-density regions lower down. A simulated particle receives random momentum, which carries it through valleys and up slopes. Momentum is refreshed between trajectories, allowing continued exploration. The aim is to sample the distribution, rather than have a marble roll to the bottom and stop. This project uses NUTS, an adaptive form of that method. [Stan's reference manual explains the mechanics.](https://mc-stan.org/docs/reference-manual/mcmc.html)

There was a more basic issue, though. Every game in the modeling dataset had at least one review. The model accounts for this through *zero truncation*: it describes review counts conditional on their being positive. That helps fit the data we have. It does not give us observations of the games we are missing.

This was the point I kept coming back to. If I want to know whether choosing certain features makes success more likely, I need to understand the failures too. Zero-review games were absent, and projects that never reached release were outside the dataset altogether. I could compare the games that were included, but I could not directly estimate the chances facing someone starting a new project.

It would be too strong to say that I was only looking at successful games. About a quarter of the filtered sample had five reviews or fewer. Still, this is a selection problem: the outcomes we can see do not cover the whole range of what can happen, and we do not fully know how inclusion in the dataset relates to those outcomes.

Then there were the tags themselves. I had been treating them as descriptions of what kind of game someone had made. But some of what they describe may already be a response to the game's reception.

Developers can supply tags, so it is not the case that an unsuccessful game necessarily has none. Players and moderators can also apply them, and community input can change their weights over time. The tags in a snapshot are therefore not necessarily the tags a game had before it found its audience. [Steam's documentation describes how this works.](https://partner.steamgames.com/doc/store/tags)

“Great Soundtrack” made this particularly clear to me. It has a strong positive association in the results. Perhaps a good soundtrack helps a game succeed. But a game that people play and enjoy also has more opportunity to earn that description. A bigger budget might help with both. I cannot separate those possibilities just by fitting a coefficient to the tag.

Even with something more concrete, such as Multiplayer or Open World, I do not know enough about the teams choosing those features. They may have different budgets, experience, or marketing support. Those differences could help explain the result.

Tag count was awkward too. Steam uses the top twenty tags for important visibility and recommendation functions, and about 41% of my filtered dataset had exactly twenty recorded tags. Including tag count in the model could not neatly account for how much attention a game had received. [Steam explains the role of the top tags here.](https://partner.steamgames.com/doc/store/tags)

I knew in the abstract that correlation does not imply causation. Working through this made the problem much more concrete. The market-analysis story had seemed plausible because the features appeared to precede the outcome: first you make a game with certain properties, then people buy it. In the actual data, the descriptions, the audience's response, and the circumstances of production were mixed together. My model did not disentangle them.

That weakened my initial belief in what this approach could offer. I still thought there was something to learn from the patterns, but I no longer felt that a table of tag associations was enough to justify the advice I had hoped to get from it.

There was a second kind of learning going on with the coding agents. They let me explore methods I would have struggled to implement alone, but I often lacked the expertise to assess their recommendations.

Choosing the priors and the structure of the model was where this became uncomfortable. I understood that these choices shaped the analysis. I did not always know which choices were appropriate, or how much they would change the answer.

I could ask for the best way to approach the problem in one session, then ask again in another terminal window and get a different answer. Both would sound reasonable. Perhaps the alternatives were more or less interchangeable. Perhaps one was much better. The explanations alone did not give me enough to decide between them.

I spent quite a while on hierarchical models, for example. The idea was that related tags could share information, so a rare tag would not get an exaggerated estimate from a few unusual examples. I tried grouping tags according to how often they occurred together, and using a language model to organize them by meaning. Some groups made sense, but others were strange. A horror game might also be a first-person puzzle game, and those descriptions belong to different kinds of categories.

The final model in the repository has a simpler hierarchy: all tag coefficients share a common distribution whose spread is estimated from the data. This produces *partial pooling*, pulling estimates with less evidence toward the shared center. The genre-grouping experiments were part of my exploration, but they are not what produced the final results.

The runtime was another thing I found difficult to anticipate. A few changes could turn a calculation that looked as though it would take most of a day into something much more manageable. Some of that came from the model and sampler settings, and some from how the computation was implemented. The final indie fit took about 94 minutes on a GTX 980. I learned something about why it worked, but I would not pretend that I understood every performance change along the way.

One useful check was to simulate data from the fitted model and compare it with the observations. The model produced roughly 12% of games with exactly one review, while the actual figure was 7.4%. The sampling diagnostics were mostly encouraging, but the model still missed something about the distribution. That was a good reminder that getting the computation to run successfully was only part of the work.

Other checks gave me more confidence in particular findings. Removing total tag count from the model barely changed the ordering among commonly observed tags: the rank correlation was 0.998. So that particular choice did not seem to drive the rankings. I found these comparisons more helpful than another explanation of why a proposed model was supposedly the best one.

Here are some of the results. Every tag in this table appears on at least 500 games. Higher multipliers indicate more positive fitted associations, accounting for the other included tags and covariates.

| Tag | Games | Model multiplier | 94% credible interval |
|---|---:|---:|---:|
| Martial Arts | 520 | 3.07× | 2.60–3.77× |
| Multiplayer | 6,549 | 2.87× | 2.66–3.11× |
| Great Soundtrack | 2,615 | 2.72× | 2.48–2.99× |
| Sandbox | 3,718 | 2.12× | 1.94–2.32× |
| Massively Multiplayer | 721 | 1.44× | 1.23–1.74× |
| Open World | 4,441 | 1.36× | 1.26–1.47× |
| Crafting | 2,691 | 1.11× | 1.01–1.24× |
| VR | 4,443 | 0.67× | 0.63–0.72× |
| Local Multiplayer | 2,777 | 0.65× | 0.58–0.73× |
| 2D Platformer | 5,821 | 0.58× | 0.54–0.63× |

The multipliers are exponentiated coefficients, with tag effects centered at zero. They apply to the underlying negative binomial mean parameter; because the model conditions on positive counts, they are not exact multipliers of observed average reviews. The credible intervals express uncertainty within the fitted model. The [repository](https://github.com/anttihil/indie-game-bayesian) contains the implementation and fuller results.

Open World and Sandbox have positive associations, while VR has a negative one. Crafting is positive too, though more modestly. Massively Multiplayer also comes out positive, which is worth keeping separate from my thought that such games might be difficult for an indie developer. The model did not measure development difficulty or the cost of keeping a game running.

I would still use these results to find games to look at more closely. There may be useful differences between audiences and genres here. What I would be much more hesitant to do now is choose a feature because its coefficient is positive and expect that choice to improve my chances of making money. This analysis does not establish that connection.

The project also brought me back to something the tags say very little about: how the features are implemented. Two games can both have crafting, but in one it might give the player interesting decisions, while in the other it is mostly repetitive work. The same mechanisms can fit together well or badly. A game can have an atmosphere that makes me want to keep playing, and I cannot tell that from its list of categories.

I suspect those things matter a great deal, although this analysis cannot tell me how much they matter relative to genre. I would need different evidence for that. For me, the most valuable outcome was finding where my original expectation went beyond what the data could support. I had hoped to learn which kinds of games were more promising to make. I came away with some patterns worth investigating, a little more understanding of statistical modeling, and less confidence that this particular question could be answered by a table of Steam tags.
