---
title: "Eliminating Hardware Dependencies: Embedding Protocol-Level Robot Simulators in the Frontend"
description: "How embedding a protocol-level simulator reduced dev cycles from days to minutes and unlocked portable sales demos at Brain Corp."
pubDate: 2026-07-25
tags: ["Robotics", "TypeScript", "React", "DeckGL", "WebSockets"]
featured: true
author: "Antti Hiltunen, "
---

When building frontend user interfaces for commercial autonomous mobile robots (AMRs), hardware dependency is the single largest bottleneck to developer velocity.

During my time as the primary UI developer for two commercial robot models at **Brain Corp (via ISBX)**, testing a new navigation feature or safety dialog originally meant booking time on physical test machines in specialized facilities.

To solve this across ~20 software releases, I built and embedded a **protocol-level robot simulator directly into the frontend application**.

---

## 1. The Protocol Simulator Pattern

Instead of attempting to simulate full 3D physics or ROS navigation controllers in C++, we modeled the exact **WebSocket protocol messages** that the robot core streams to the browser.

```typescript
// Protocol-Level Robot Event Simulator
export class VirtualRobotBridge {
  private socketListeners: Map<string, Set<Function>> = new Map();
  private telemetryState = {
    battery: 92,
    speed: 0.8,
    pose: { x: 100, y: 150 },
  };

  public simulateRouteNavigation(waypoints: Array<{ x: number; y: number }>) {
    let index = 0;
    const interval = setInterval(() => {
      if (index >= waypoints.length) {
        this.emit("robot/status", { state: "CLEANING_COMPLETE" });
        clearInterval(interval);
        return;
      }
      this.telemetryState.pose = waypoints[index];
      this.emit("robot/telemetry", { ...this.telemetryState });
      index++;
    }, 200);
  }
}
```

### Key Engineering Wins:

- **Dev Cycle Speed:** Reduced feature iteration cycles from **days to minutes**.
- **Portable Sales Demos:** Allowed sales and product teams to showcase full robot UI capabilities (including dynamic map zone selection) on standard laptops without physical hardware.
- **QA Observability:** Shipped an embedded dev toolbar that allowed QA to inject edge-case errors (e.g., loss of sensor calibration, emergency stops) instantly.

---

## 2. Dynamic Zone Selection with DeckGL

One flagship feature delivered using this architecture was **on-demand A-to-B cleaning**, replacing traditional pre-taught fixed routes.

To enable operators to select cleaning zones on complex facility maps:

- Integrated **DeckGL** layers over clustered points of interest.
- Rendered real-time robot pathing over custom Canvas vector maps.
- Ensured 60fps interaction speed on embedded low-power touch displays.

```
+-------------------------------------------------------------------+
| Embedded Touch Display (React + DeckGL Vector Map)                |
|  [ Cluster Point A ] ---- Pathing Preview ----> [ Cluster Point B]|
+-------------------------------------------------------------------+
                                 ^
                                 | WebSocket Telemetry Stream
+-------------------------------------------------------------------+
| Virtual Robot Protocol Simulator / Physical Robot Core            |
+-------------------------------------------------------------------+
```

---

## 3. Global Scale & Internationalization

Expanding software to international commercial markets required internationalizing the UI across **15 countries**, supporting right-to-left languages, custom spatial icon sets, and localized safety regulatory copy.

Designing software for physical hardware requires treating developer tooling as a first-class feature—ensuring that UI development remains fast, testable, and independent of hardware availability.
