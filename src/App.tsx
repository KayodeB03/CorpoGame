import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import Home from './pages/Home.tsx'
import Rules from './pages/Rules.tsx'
import Components from './pages/Components.tsx'
import QuickPlay from './pages/QuickPlay.tsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/components" element={<Components />} />
          <Route path="/quickplay" element={<QuickPlay />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}