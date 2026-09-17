# NOC Executive Dashboard

Next.js port of the "Executive dashboard" NOC (Network Operations Center) mockup —
service reliability overview across managed customers for Telkomsel Operations.

## Stack

- Next.js 16 (App Router, TypeScript, `src/` dir)
- Tailwind CSS v4
- Geist font (`geist` package)
- ECharts (`echarts-for-react`) for the alert trend sparklines

## Structure

Components are organized per dashboard section under `src/components/sections/*`
(header, filter-bar, key-figures, alerts, service-health, customer-availability,
attention), with shared primitives in `src/components/ui/*` (Card, Badge,
ProgressBar, SegmentedProgressBar, SectionHeading, StatusDot) and icons grouped
under `src/components/icons/*`. Each section keeps its data in a colocated
`*-data.ts(x)` file, separate from its presentational component.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view it.
