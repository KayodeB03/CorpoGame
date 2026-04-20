import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import Home from './pages/Home.tsx'
import Rules from './pages/Rules.tsx'
import Components from './pages/Components.tsx'
import QuickPlay from './pages/QuickPlay.tsx'
import ProductPage from './pages/ProductPage.tsx'
import CheckoutPage from './pages/CheckoutPage.tsx'
import { PurchaseProvider } from './context/PurchaseContext.tsx'

export default function App() {
  return (
    <HashRouter>
      <PurchaseProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/components" element={<Components />} />
            <Route path="/quickplay" element={<QuickPlay />} />
            <Route path="/purchase" element={<ProductPage />} />
            <Route path="/purchase/checkout" element={<CheckoutPage />} />
          </Route>
        </Routes>
      </PurchaseProvider>
    </HashRouter>
  )
}