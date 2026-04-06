# Tech Stack Help

**Vite**

Vite includes a hot-reload website preview that updates when changes are saved within the repository. Run "npm install" while in the base directory (.../CorpoGame: ) to install new app dependencies. 

After installation, you can use the command "npm run dev" to start the development server. Keep this terminal process open and running in a new terminal tab. 

**React + React Router + Typescript**

### The Big Shift: From HTML Pages to Components

In traditional HTML/CSS/JS, you had separate `.html` files for each page (`index.html`, `rules.html`, `components.html`). With React, you now have **components** that render dynamically based on the current route.

**Old way:**
- `index.html` → rendered separately
- `rules.html` → loaded as a new page
- `components.html` → loaded as a new page
- Inline `<script>` tags for logic
- DOM manipulation via `document.getElementById()`, event listeners

**New way:**
- One `index.html` with a `<div id="root">`
- `App.tsx` manages routing to different pages
- `pages/Home.tsx`, `pages/Rules.tsx`, `pages/Components.tsx` are React components
- Logic lives in component state and hooks
- React renders components reactively

---

### Key Concepts for Traditional Developers

#### 1. **Components are Functions**
Each React component is a TypeScript function that returns JSX (looks like HTML but is JavaScript).

```tsx
// Old HTML:
<h1>Corporate Sabotage Rules</h1>
<p>Players: 3–4</p>

// New React component:
export default function Rules() {
  return (
    <section>
      <h1>Corporate Sabotage Rules</h1>
      <p>Players: 3–4</p>
    </section>
  )
}
```

#### 2. **JSX is Not HTML**
JSX is JavaScript that *looks* like HTML. Key differences:
- `className` instead of `class` (class is reserved)
- `onClick` instead of `onclick`
- Curly braces `{}` for JavaScript expressions: `<p>{someVariable}</p>`
- Self-closing: `<FlipCard />` not `<flip-card></flip-card>`

#### 3. **State and Reactivity**
Instead of manually updating the DOM:

```js
// Old way (vanilla JS):
document.getElementById('timer').textContent = 60
// ... then manually change it again on button click

// New way (React):
const [time, setTime] = useState(60)
// React automatically re-renders when state changes
return <div id="timer">{time}</div>
```

#### 4. **No Event Listeners on Elements**
Old way:
```js
document.getElementById('startBtn').addEventListener('click', startTimer)
```

New way:
```tsx
<button onClick={startTimer}>Start</button>
```

#### 5. **Props (Component Communication)**
Passing data to components replaces `data-*` attributes.

```tsx
// Old HTML:
<div data-front="Audit 1" data-back="Details"></div>
// JS: const front = element.dataset.front

// New React:
<FlipCard front="Audit 1" back="Details" />
// Inside FlipCard component: receive as props
function FlipCard({ front, back }) { ... }
```

---

### Where Logic Goes in Your Project

#### **Page/Component Logic** → `src/pages/` & `src/components/`
- `pages/Home.tsx` — Homepage with hero, cards, steps
- `pages/Rules.tsx` — Rules content
- `pages/Components.tsx` — Card gallery
- `pages/QuickPlay.tsx` — Timer page
- `components/Header.tsx` — Navigation
- `components/Footer.tsx` — Footer
- `components/FlipCard.tsx` — Reusable flip card
- `components/Timer.tsx` — Timer UI

#### **Complex Logic (Hooks)** → `src/hooks/`
Logic that multiple components need, or complex state management.
- `hooks/useTimer.ts` — Timer logic (start, pause, reset)

Example: Instead of having timer logic in `QuickPlay.tsx`, it's in `useTimer.ts` and imported:
```tsx
// In QuickPlay.tsx
const { time, isRunning, start, pause, reset } = useTimer(60)
```

#### **Routing** → `src/App.tsx`
All page routes are defined here:
```tsx
<Route path="/" element={<Home />} />
<Route path="/rules" element={<Rules />} />
<Route path="/components" element={<Components />} />
<Route path="/quickplay" element={<QuickPlay />} />
```

#### **Styling** → `src/styles.css`
All CSS in one place. Class names work the same:
```tsx
<button className="primary">Buy</button>  
// Same CSS: .primary { background: #188038; }
```

#### **Page Structure** → `src/main.tsx` + `index.html`
- `index.html` — Contains single `<div id="root">` (React mounts here)
- `src/main.tsx` — Imports `App.tsx` and renders it to the root div

---

### TypeScript Benefits for Your Project

TypeScript adds **type safety**. You catch errors before runtime:

```tsx
// Without TypeScript (runtime error possible):
function FlipCard(props) {
  return <div>{props.front}</div>  // What if props.front is undefined?
}

// With TypeScript (caught at development):
interface FlipCardProps {
  front: string
  back: string
}

function FlipCard({ front, back }: FlipCardProps) {
  return <div>{front}</div>  // TypeScript knows front is a string
}
```

---

### React Router vs HTML Pages

Old routing:
- Click link → browser loads new `.html` file → page reloads

New routing:
- Click link → React Router updates URL → component re-renders → no full page reload
- Faster, smoother experience

```tsx
// Old HTML:
<a href="rules.html">Rules</a>

// New React:
import { Link } from 'react-router-dom'
<Link to="/rules">Rules</Link>
```

---

### Development Workflow

#### Old way:
```
Edit .html → Save → Refresh browser
Edit .js → Save → Refresh browser
```

#### New way (with hot reload):
```
Edit .tsx → Save → Browser updates automatically
Change state → Re-render happens instantly
```

No manual refresh needed—Vite's hot reload watches your files.

---

### File Organization by Responsibility

| Location | What Goes Here | Example |
|----------|---|---|
| `src/pages/` | Full page components | `Home.tsx`, `Rules.tsx` |
| `src/components/` | Reusable UI pieces | `FlipCard.tsx`, `Header.tsx` |
| `src/hooks/` | Shared logic (state + effects) | `useTimer.ts` |
| `src/App.tsx` | Routing & layout wrapper | All routes defined here |
| `src/main.tsx` | App entry point | Import App, render to root |
| `src/styles.css` | All styles | Keep organized by section |
| `index.html` | Single HTML file | Contains `<div id="root">` |

---

### Running the App

```bash
# Start development server (hot reload enabled)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

The app runs on `http://localhost:5173/` by default. All changes auto-refresh.

