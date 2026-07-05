import { useState } from 'react'
import Book from './components/Book'
import { sampleFlowerBook } from './data/flowers'
import type { Locale } from './types'

export default function App() {
  const [locale, setLocale] = useState<Locale>('en')
  const book = sampleFlowerBook

  return (
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 py-6 sm:px-8">
      <header className="mb-6 flex items-center justify-between">
        <span className="font-display text-lg text-ink">FlowerDoro</span>
        <button
          onClick={() => setLocale(locale === 'en' ? 'vi' : 'en')}
          className="rounded-full border border-paper-edge bg-paper-deep px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:border-leaf focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
        >
          {locale === 'en' ? 'Tiếng Việt' : 'English'}
        </button>
      </header>

      <main className="flex-1">
        <Book
          entries={book.flowers}
          locale={locale}
          unlockedTotal={book.unlocked_total}
          total={book.total}
        />
      </main>

      <footer className="mt-8 border-t border-paper-edge pt-4 text-center text-xs text-ink-muted">
        FlowerDoro · {locale === 'vi' ? 'Vườn hoa của sự tập trung' : 'A garden grown from focus'}
      </footer>
    </div>
  )
}
