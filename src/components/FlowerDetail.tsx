import { motion, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'
import type { FlowerBookEntry, Locale } from '../types'
import { flowerDescription, flowerFacts, flowerName } from '../types'
import FlowerArt from './FlowerArt'

interface Props {
  entry: FlowerBookEntry
  locale: Locale
  onClose: () => void
}

const rarityLabel: Record<string, { en: string; vi: string }> = {
  common: { en: 'Common', vi: 'Phổ biến' },
  uncommon: { en: 'Uncommon', vi: 'Ít gặp' },
  rare: { en: 'Rare', vi: 'Hiếm' },
  legendary: { en: 'Legendary', vi: 'Huyền thoại' },
}

export default function FlowerDetail({ entry, locale, onClose }: Props) {
  const reduced = useReducedMotion()
  const { flower, unlocked, collected_count } = entry
  const facts = flowerFacts(flower, locale)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={flowerName(flower, locale)}
    >
      <motion.article
        layoutId={reduced ? undefined : `flower-${flower.kind}`}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="flex w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-paper-edge bg-paper shadow-xl sm:flex-row"
      >
        {/* Art panel */}
        <div className="flex items-center justify-center bg-paper-deep p-8 sm:w-2/5">
          <motion.div
            initial={reduced ? false : { scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.1 }}
            className="h-44 w-44"
          >
            <FlowerArt
              assetName={flower.asset_name}
              className={`h-full w-full ${unlocked ? '' : 'opacity-35 grayscale'}`}
            />
          </motion.div>
        </div>

        {/* Field notes */}
        <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
          <header className="flex items-start justify-between gap-3">
            <div>
              <h2 className="font-display text-2xl text-ink">
                {unlocked ? flowerName(flower, locale) : '???'}
              </h2>
              <p className="text-sm text-ink-muted italic">
                {unlocked ? flowerName(flower, locale === 'en' ? 'vi' : 'en') : ''}
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="rounded-full px-2.5 py-1 text-ink-muted transition-colors hover:bg-paper-deep hover:text-ink focus-visible:outline-2 focus-visible:outline-leaf"
            >
              ✕
            </button>
          </header>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full bg-leaf-soft px-2.5 py-1 font-medium text-leaf">
              {rarityLabel[flower.rarity]?.[locale] ?? flower.rarity}
            </span>
            {unlocked ? (
              <span className="rounded-full bg-bloom-soft px-2.5 py-1 font-medium text-bloom">
                {locale === 'vi'
                  ? `Đã thu thập ×${collected_count}`
                  : `Collected ×${collected_count}`}
              </span>
            ) : (
              <span className="rounded-full bg-paper-deep px-2.5 py-1 text-ink-muted">
                {locale === 'vi'
                  ? 'Hoàn thành phiên tập trung để mở khóa'
                  : 'Complete a focus session to unlock'}
              </span>
            )}
          </div>

          {unlocked ? (
            <>
              <p className="text-sm leading-relaxed text-ink">
                {flowerDescription(flower, locale)}
              </p>
              {facts.length > 0 && (
                <ul className="flex flex-col gap-2 border-t border-paper-edge pt-4">
                  {facts.map((fact, i) => (
                    <motion.li
                      key={i}
                      initial={reduced ? false : { opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.08, duration: 0.3 }}
                      className="flex gap-2 text-sm leading-relaxed text-ink-muted"
                    >
                      <span aria-hidden className="text-leaf">
                        ❧
                      </span>
                      {fact}
                    </motion.li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <p className="text-sm leading-relaxed text-ink-muted">
              {locale === 'vi'
                ? 'Bông hoa này vẫn còn là bí ẩn. Tập trung 30 phút để có cơ hội tìm thấy nó.'
                : 'This flower is still a mystery. Focus for 30 minutes for a chance to find it.'}
            </p>
          )}
        </div>
      </motion.article>
    </motion.div>
  )
}
