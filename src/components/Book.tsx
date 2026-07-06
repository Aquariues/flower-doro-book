import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useCallback, useEffect, useState, type ReactNode } from 'react'
import type { FlowerBookEntry, Locale } from '../types'
import {
  FlowerLeftPage,
  FlowerRightPage,
  PageChrome,
  TocLeftPage,
  TocRightPage,
} from './BookPages'

interface Props {
  entries: FlowerBookEntry[]
  locale: Locale
  unlockedTotal: number
  total: number
}

// Spread 0 = table of contents; spread i (1-based) = flower entries[i-1].
export default function Book({ entries, locale, unlockedTotal, total }: Props) {
  const reduced = useReducedMotion()
  const [current, setCurrent] = useState(0)
  const [flip, setFlip] = useState<{ to: number; dir: 1 | -1 } | null>(null)
  const spreadCount = entries.length + 1

  const navigate = useCallback(
    (to: number) => {
      if (flip || to === current || to < 0 || to >= spreadCount) return
      if (reduced) {
        setCurrent(to)
        return
      }
      setFlip({ to, dir: to > current ? 1 : -1 })
    },
    [flip, current, spreadCount, reduced],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') navigate((flip?.to ?? current) + 1)
      if (e.key === 'ArrowLeft') navigate((flip?.to ?? current) - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate, current, flip])

  const leftPage = (i: number): ReactNode =>
    i === 0 ? (
      <PageChrome side="left">
        <TocLeftPage locale={locale} unlockedTotal={unlockedTotal} total={total} />
      </PageChrome>
    ) : (
      <PageChrome side="left" pageNumber={i * 2}>
        <FlowerLeftPage entry={entries[i - 1]} locale={locale} />
      </PageChrome>
    )

  const rightPage = (i: number): ReactNode =>
    i === 0 ? (
      <PageChrome side="right" pageNumber={1}>
        <TocRightPage entries={entries} locale={locale} onPick={(idx) => navigate(idx + 1)} />
      </PageChrome>
    ) : (
      <PageChrome side="right" pageNumber={i * 2 + 1}>
        <FlowerRightPage entry={entries[i - 1]} locale={locale} />
      </PageChrome>
    )

  // While a leaf turns: the static halves already show the destination on the
  // side being revealed, exactly like a paper book.
  const staticLeft = flip ? (flip.dir === 1 ? leftPage(current) : leftPage(flip.to)) : leftPage(current)
  const staticRight = flip
    ? flip.dir === 1
      ? rightPage(flip.to)
      : rightPage(current)
    : rightPage(current)

  const shown = flip?.to ?? current

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-full perspective-distant">
        {/* stacked page edges */}
        <div aria-hidden className="absolute -inset-x-1 inset-y-1 rounded-xl bg-paper-deep shadow-md" />
        <div aria-hidden className="absolute -inset-x-0.5 inset-y-0.5 rounded-xl bg-paper-edge" />

        <div className="relative grid aspect-[4/5] grid-cols-2 rounded-xl shadow-xl transform-3d sm:aspect-[13/8]">
          {staticLeft}
          {staticRight}

          {/* spine */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-ink/15"
          />

          <AnimatePresence>
            {flip && (
              <motion.div
                key={`${current}-${flip.to}`}
                className={`absolute inset-y-0 z-10 w-1/2 transform-3d ${
                  flip.dir === 1 ? 'left-1/2 origin-left' : 'left-0 origin-right'
                }`}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: flip.dir === 1 ? -180 : 180 }}
                transition={{ duration: 0.7, ease: [0.45, 0.05, 0.35, 1] }}
                onAnimationComplete={() => {
                  setCurrent(flip.to)
                  setFlip(null)
                }}
              >
                {/* leaf front */}
                <div className="absolute inset-0 backface-hidden">
                  {flip.dir === 1 ? rightPage(current) : leftPage(current)}
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/10 to-transparent ${
                      flip.dir === 1 ? '' : 'rotate-180'
                    }`}
                  />
                </div>
                {/* leaf back */}
                <div className="absolute inset-0 rotate-y-180 backface-hidden">
                  {flip.dir === 1 ? leftPage(flip.to) : rightPage(flip.to)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* navigation */}
      <nav className="flex items-center gap-4" aria-label="pages">
        <button
          onClick={() => navigate(shown - 1)}
          disabled={shown === 0}
          aria-label={locale === 'vi' ? 'Trang trước' : 'Previous page'}
          className="rounded-full border border-paper-edge bg-paper-deep px-4 py-1.5 text-sm text-ink transition-colors hover:border-leaf focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf disabled:opacity-35 disabled:hover:border-paper-edge"
        >
          ←
        </button>
        <span className="min-w-24 text-center text-xs text-ink-muted">
          {shown === 0
            ? locale === 'vi'
              ? 'Mục lục'
              : 'Contents'
            : `${shown} / ${entries.length}`}
        </span>
        <button
          onClick={() => navigate(shown + 1)}
          disabled={shown === spreadCount - 1}
          aria-label={locale === 'vi' ? 'Trang sau' : 'Next page'}
          className="rounded-full border border-paper-edge bg-paper-deep px-4 py-1.5 text-sm text-ink transition-colors hover:border-leaf focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf disabled:opacity-35 disabled:hover:border-paper-edge"
        >
          →
        </button>
      </nav>
    </div>
  )
}
