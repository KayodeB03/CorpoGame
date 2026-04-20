import { Outlet } from 'react-router-dom'
import Header from './Header'
import Breadcrumbs from './Breadcrumbs'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <main className="sheet">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}