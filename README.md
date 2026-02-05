# React Big Schedule – Dependencies Fork

This repository is a **lightweight fork** of `react-big-schedule` that keeps the original API and behavior, but adds a couple of focused features for visualising **dependencies and actuals**.

If you already know the upstream project, you can treat this fork as a drop‑in replacement; the differences are summarized below.

---

## How this fork differs from the original

### 1. Visual dependencies between events

**Upstream:** No built‑in way to draw relationships between events.  
**This fork:** Adds an optional `dependencies` prop on `Scheduler`:

```js
import { Scheduler } from 'react-big-schedule';

const dependencies = [
  { fromId: 9, toId: 2, color: '#4a90e2' },
  { fromId: 2, toId: 3 }, // color is optional
];

<Scheduler schedulerData={schedulerData} dependencies={dependencies} />;
```

- Each dependency draws an arrow from the **finish (right edge)** of the `fromId` event to the **start (left edge)** of the `toId` event.
- Arrows:
  - Work across different resources/lanes.
  - Work in both resource and task (event perspective) views.
  - Track scrolling and view changes (Day/Week/Month).
- Implementation lives in `DependencyOverlay`, which measures real DOM positions of `.timeline-event` elements to stay in sync with layout.

Type definition (see `typing/index.d.ts`):

```ts
export interface Dependency<EventType extends EventItem = EventItem> {
  fromId: EventType['id'];
  toId: EventType['id'];
  color?: string;
}
```

### 2. Scheduled vs actual time on events

**Upstream:** Events have a single time window (`start` / `end`) used for both layout and semantics.  
**This fork:** Adds optional **actuals** on events:

```ts
export interface EventItem {
  id: number | string;
  start: string; // scheduled start
  end: string;   // scheduled end
  resourceId: string;
  title: string;
  actualStart?: string;
  actualEnd?: string;
}
```

- `start` / `end` **still control bar placement** exactly as in the original.
- `actualStart` / `actualEnd` exist so you can:
  - Compute completion vs plan.
  - Render your own progress UI via `eventItemTemplateResolver`.

The core library does **not** hard‑code any progress visuals; the time fields are exposed so the **parent app** decides how to present them.

The **Time Dependencies** example (`/dependencies-time`) shows:
- A custom event template that draws a completed‑percentage overlay based on the overlap of `[actualStart, actualEnd]` within `[start, end]`.
- A red dot at the right edge when `actualEnd` is missing.

### 3. More informative default event labels

**Upstream:** `getEventText` usually returns just the event title (or resource name in event perspective).  
**This fork:** Slightly tweaks the default label to include time information:

- Hour/Day views: `HH:mm-HH:mm Title` (e.g. `09:00-10:30 Design`).
- Longer views (Week/Month/...): `MMM D Title` (e.g. `Dec 19 R1 has many tasks 1`).

If you already supply your own `getEventTextFunc` in behaviors, your implementation still wins.

### 4. New examples focused on dependencies & actuals

Two extra example pages demonstrate the forked behavior:

- `/dependencies` – **cross‑lane dependencies** on the standard sample data.
- `/dependencies-time` – **time‑labelled day view** with:
  - 15‑minute `minuteStep`.
  - Narrower resource column.
  - Events that have scheduled vs actual times, a custom progress overlay, and a red “open” indicator when there is no `actualEnd`.

All other examples and runtime behavior are unchanged from the upstream project.

---

## What stays the same

- Core API (`Scheduler`, `SchedulerData`, views, drag & drop, configuration, behaviors) matches the upstream library.
- Styling, theming, and DnD integrations are preserved.
- The fork remains MIT‑licensed and can be used as a **drop‑in replacement** for `react-big-schedule` if you want the extra dependency/actuals features.

For everything not explicitly mentioned here (installation, full API reference, etc.), refer to the original [`react-big-schedule` README](https://github.com/ansulagrawal/react-big-schedule).

