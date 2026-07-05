import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useMemo, useState } from 'react'
import FlowerCard from './components/FlowerCard'
import FlowerDetail from './components/FlowerDetail'
import { sampleFlowerBook } from './data/flowers'
import type { FlowerBookEntry, Locale } from './types'

type Filter = 'all' | 'unlocked' | 'locked'

const copy = {
  en: {
    title: 'Flower Book',
    subtitle: 'Every focus session grows your collection.',
    collected: 'collected',
    filters: { all: 'All', unlocked: 'Collected', locked: 'Undiscovered' } as Record<Filter, string>,
  },
  vi: {
    title: 'Sổ Tay Hoa',
    subtitle: 'Mỗi phiên tập trung giúp bộ sưu tập nở rộ.',
    collected: 'đã thu thập',
    filters: { all: 'Tất cả', unlocked: 'Đã có', locked: 'Chưa khám phá' } as Record<Filter, string>,
  },
}

export default function App() {
  const reduced = useReducedMotion()
  const [locale, setLocale] = useState<Locale>('en')
  const [filter, setFilter] = useState<Filter>('all')
  const [selected, setSelected] = useState<FlowerBookEntry | null>(null)

  const book = sampleFlowerBook
  const t = copy[locale]

  const visible = useMemo(() => {
    if (filter === 'unlocked') return book.flowers.filter((f) => f.unlocked)
    if (filter === 'locked') return book.flowers.filter((f) => !f.unlocked)
    return book.flowers
  }, [book, filter])

  const progress = book.total > 0 ? (book.unlocked_total / book.total) * 100 : 0

  return (
    <div className="mx-auto min-h-screen max-w-6xl px-4 py-8 sm:px-8">
      <header className="mb-8 flex flex-col gap-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-display text-4xl text-ink sm:text-5xl">{t.title}</h1>
            <p className="mt-2 text-ink-muted">{t.subtitle}</p>
          </div>
          <button
            onClick={() => setLocale(locale === 'en' ? 'vi' : 'en')}
            className="rounded-full border border-paper-edge bg-paper-deep px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:border-leaf focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
          >
            {locale === 'en' ? 'Tiếng Việt' : 'English'}
          </button>
        </div>

        {/* Collection progress */}
        <div className="flex flex-col gap-2">
          <div className="flex items-baseline justify-between text-sm">
            <span className="font-medium text-ink">
              {book.unlocked_total} / {book.total} {t.collected}
            </span>
            <span className="text-ink-muted">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-paper-deep">
            <motion.div
              initial={reduced ? false : { width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="h-full rounded-full bg-leaf"
            />
          </div>
        </div>

        {/* Filters */}
        <nav className="flex gap-2" aria-label="filter">
          {(['all', 'unlocked', 'locked'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf ${
                filter === f
                  ? 'bg-leaf text-paper'
                  : 'bg-paper-deep text-ink-muted hover:text-ink'
              }`}
            >
              {t.filters[f]}
            </button>
          ))}
        </nav>
      </header>

      <motion.main
        key={filter}
        variants={{ visible: { transition: { staggerChildren: reduced ? 0 : 0.03 } } }}
        initial={reduced ? 'visible' : 'hidden'}
        animate="visible"
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5"
      >
        {visible.map((entry) => (
          <FlowerCard key={entry.flower.kind} entry={entry} locale={locale} onSelect={setSelected} />
        ))}
      </motion.main>

      <AnimatePresence>
        {selected && (
          <FlowerDetail entry={selected} locale={locale} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>

      <footer className="mt-12 border-t border-paper-edge pt-6 text-center text-xs text-ink-muted">
        FlowerDoro · {locale === 'vi' ? 'Vườn hoa của sự tập trung' : 'A garden grown from focus'}
      </footer>
    </div>
  )
}
