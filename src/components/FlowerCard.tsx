import { motion, useReducedMotion } from 'framer-motion'
import type { FlowerBookEntry, Locale } from '../types'
import { flowerName } from '../types'
import FlowerArt from './FlowerArt'

interface Props {
  entry: FlowerBookEntry
  locale: Locale
  onSelect: (entry: FlowerBookEntry) => void
}

export default function FlowerCard({ entry, locale, onSelect }: Props) {
  const reduced = useReducedMotion()
  const { flower, unlocked, collected_count } = entry

  return (
    <motion.button
      layoutId={reduced ? undefined : `flower-${flower.kind}`}
      variants={{
        hidden: { opacity: 0, y: 8 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={reduced ? undefined : { scale: 1.03 }}
      whileTap={reduced ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      onClick={() => onSelect(entry)}
      className={`group relative flex flex-col items-center gap-2 rounded-2xl border p-4 pb-5 text-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf ${
        unlocked
          ? 'border-paper-edge bg-paper-deep hover:border-leaf'
          : 'border-paper-edge/60 bg-paper-deep/40 hover:border-ink-muted/40'
      }`}
    >
      <div className="relative h-24 w-24 sm:h-28 sm:w-28">
        <motion.div
          className="h-full w-full"
          whileHover={reduced ? undefined : { rotate: [0, -2, 2, 0] }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <FlowerArt
            assetName={flower.asset_name}
            className={`h-full w-full ${unlocked ? '' : 'opacity-35 grayscale'}`}
          />
        </motion.div>
        {!unlocked && (
          <span
            aria-label="locked"
            className="absolute right-0 bottom-0 flex h-6 w-6 items-center justify-center rounded-full bg-paper-edge text-xs text-ink-muted"
          >
            🔒
          </span>
        )}
      </div>

      <span
        className={`font-display text-base leading-tight ${unlocked ? 'text-ink' : 'text-ink-muted'}`}
      >
        {unlocked ? flowerName(flower, locale) : '???'}
      </span>

      {unlocked && collected_count > 0 && (
        <span className="rounded-full bg-leaf-soft px-2 py-0.5 text-xs font-medium text-leaf">
          ×{collected_count}
        </span>
      )}
    </motion.button>
  )
}
