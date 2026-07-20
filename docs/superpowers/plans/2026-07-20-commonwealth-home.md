# Commonwealth Home Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the generic vehicle-subscription root page with a UnityLink Commonwealth home that organizes the existing product around Member, Series, Assets, Mobility, Energy, Work, Governance, Benefits, and Evidence.

**Architecture:** Add a typed Commonwealth presentation model and a focused `CommonwealthHome` page that uses the repository's existing React, Tailwind, shadcn, Lucide, Framer Motion, routing, and layout conventions. Preserve the former landing page at `/fleet-experience`, keep existing operating modules intact, and change only the top-level product hierarchy and navigation copy.

**Tech Stack:** React 18, TypeScript, Vite, React Router, Tailwind CSS, shadcn/Radix UI, Lucide React, Framer Motion, Vitest, Testing Library.

## Global Constraints

- UnityLink Commonwealth is the product; Unity Fleet is the mobility operator inside it.
- Do not expose protected USC, MEDUSA, SEOS, or internal governance materials on this public screen.
- Do not represent prototype metrics as live operational facts.
- Label current information as pilot or operating-model information where appropriate.
- Preserve all existing fleet, booking, charging, jobs, dashboard, and demonstration routes.
- Build on `chatgpt-live-preview`; do not modify `main`.

---

### Task 1: Establish a testable home-page contract

**Files:**
- Modify: `package.json`
- Create: `vitest.config.ts`
- Create: `src/test/setup.ts`
- Create: `src/pages/CommonwealthHome.test.tsx`

**Interfaces:**
- Consumes: Existing React/Vite project and `MainLayout` route conventions.
- Produces: `npm test` and an executable contract for the Commonwealth home screen.

- [ ] Add Vitest, jsdom, Testing Library, and jest-dom development dependencies plus a `test` script.
- [ ] Configure Vitest with the existing `@` alias and jsdom setup.
- [ ] Write a test that first asserts `src/pages/CommonwealthHome.tsx` exists, then renders it and verifies the Commonwealth heading, operating-spine labels, and primary links.
- [ ] Run `npm test` and verify RED because the page does not exist.

### Task 2: Define the Commonwealth presentation model

**Files:**
- Create: `src/features/commonwealth/commonwealthHome.model.ts`

**Interfaces:**
- Produces: `CommonwealthModule`, `CommonwealthPriority`, `commonwealthModules`, `commonwealthPriorities`, and `commonwealthOutcomes`.

- [ ] Define typed module records for Member, Series, Assets, Mobility, Energy, Work, Governance, Benefits, and Evidence.
- [ ] Map each public module to an existing route when one exists; use non-deceptive status copy where the operating backend is not yet connected.
- [ ] Define immediate pilot priorities without fabricated live metrics.

### Task 3: Build the Commonwealth home screen

**Files:**
- Create: `src/pages/CommonwealthHome.tsx`

**Interfaces:**
- Consumes: `commonwealthHome.model.ts`, `MainLayout`, shadcn `Button` and `Badge`, Lucide icons, Framer Motion, React Router.
- Produces: Default export `CommonwealthHome`.

- [ ] Build a first viewport that identifies UnityLink Commonwealth and explains Unity Fleet's subordinate operator role.
- [ ] Add direct actions for member access, mobility, hub operations, workforce, and the operator dashboard.
- [ ] Render the Commonwealth operating spine as a responsive module grid with honest status labels.
- [ ] Add a current-priorities section and a measurable-outcomes section without claiming live production data.
- [ ] Add a final action band linking into the existing system.

### Task 4: Rewire root routing and navigation

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/navigation/Logo.tsx`
- Modify: `src/components/navigation/NavbarButtons.tsx`

**Interfaces:**
- Consumes: `CommonwealthHome` and existing `Index` page.
- Produces: `/` for Commonwealth Home and `/fleet-experience` for the former landing page.

- [ ] Route `/` to `CommonwealthHome`.
- [ ] Preserve `Index` at `/fleet-experience`.
- [ ] Rename navigation labels to Commonwealth, Mobility, Hubs, Workforce, and About.
- [ ] Change the brand text to UnityLink Commonwealth and identify Unity Fleet as the operating layer.
- [ ] Change the primary navigation action from `Book Now` to `Enter Commonwealth`, linking to the dashboard.

### Task 5: Verify and deploy

**Files:**
- No source changes expected.

**Interfaces:**
- Consumes: Completed branch implementation.
- Produces: Passing tests, passing production build, and a refreshed ChatGPT-controlled preview URL.

- [ ] Run `npm test` and verify GREEN.
- [ ] Run `npm run build` and verify the Vite production build succeeds.
- [ ] Inspect the deployed root route and at least one linked route.
- [ ] Confirm the former landing page remains available at `/fleet-experience`.
- [ ] Report remaining known limitations separately from completed behavior.
