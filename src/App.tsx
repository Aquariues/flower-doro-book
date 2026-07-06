import { useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import BookPage from './pages/BookPage'
import Home from './pages/Home'
import type { Locale } from './types'

export default function App() {
  const [locale, setLocale] = useState<Locale>('en')

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf ${
      isActive ? 'bg-leaf-soft text-leaf' : 'text-ink-muted hover:text-ink'
    }`

  return (
    <BrowserRouter>
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 py-6 sm:px-8">
        <header className="mb-6 flex items-center justify-between gap-3">
          <Link
            to="/"
            className="font-display text-lg text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
          >
            FlowerDoro
          </Link>
          <nav className="flex items-center gap-1 sm:gap-2" aria-label="main">
            <NavLink to="/" end className={navLinkClass}>
              {locale === 'vi' ? 'Trang chủ' : 'Home'}
            </NavLink>
            <NavLink to="/book" className={navLinkClass}>
              {locale === 'vi' ? 'Sổ tay hoa' : 'Flower Book'}
            </NavLink>
            <button
              onClick={() => setLocale(locale === 'en' ? 'vi' : 'en')}
              className="ml-1 rounded-full border border-paper-edge bg-paper-deep px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:border-leaf focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
            >
              {locale === 'en' ? 'VI' : 'EN'}
            </button>
          </nav>
        </header>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home locale={locale} />} />
            <Route path="/book" element={<BookPage locale={locale} />} />
          </Routes>
        </main>

        <footer className="mt-8 border-t border-paper-edge pt-4 text-center text-xs text-ink-muted">
          FlowerDoro · {locale === 'vi' ? 'Vườn hoa của sự tập trung' : 'A garden grown from focus'}
        </footer>
      </div>
    </BrowserRouter>
  )
}
