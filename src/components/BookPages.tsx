import type { ReactNode } from 'react'
import type { FlowerBookEntry, Locale } from '../types'
import { flowerDescription, flowerFacts, flowerName } from '../types'
import FlowerArt from './FlowerArt'

const rarityLabel: Record<string, { en: string; vi: string }> = {
  common: { en: 'Common', vi: 'Phổ biến' },
  uncommon: { en: 'Uncommon', vi: 'Ít gặp' },
  rare: { en: 'Rare', vi: 'Hiếm' },
  legendary: { en: 'Legendary', vi: 'Huyền thoại' },
}

export function PageChrome({
  side,
  pageNumber,
  children,
}: {
  side: 'left' | 'right'
  pageNumber?: number
  children: ReactNode
}) {
  return (
    <div
      className={`relative flex h-full w-full flex-col overflow-hidden bg-paper p-5 sm:p-8 ${
        side === 'left' ? 'rounded-l-xl' : 'rounded-r-xl'
      }`}
    >
      {/* spine shading */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-y-0 w-10 ${
          side === 'left'
            ? 'right-0 bg-gradient-to-l from-ink/10 to-transparent'
            : 'left-0 bg-gradient-to-r from-ink/10 to-transparent'
        }`}
      />
      <div className="relative flex min-h-0 flex-1 flex-col">{children}</div>
      {pageNumber !== undefined && (
        <span
          className={`relative mt-2 shrink-0 text-xs text-ink-muted ${
            side === 'left' ? 'text-left' : 'text-right'
          }`}
        >
          {pageNumber}
        </span>
      )}
    </div>
  )
}

export function TocLeftPage({
  locale,
  unlockedTotal,
  total,
}: {
  locale: Locale
  unlockedTotal: number
  total: number
}) {
  const progress = total > 0 ? Math.round((unlockedTotal / total) * 100) : 0
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
      <span aria-hidden className="text-4xl">
        ❧
      </span>
      <div>
        <h1 className="font-display text-3xl text-ink sm:text-4xl">
          {locale === 'vi' ? 'Sổ Tay Hoa' : 'Flower Book'}
        </h1>
        <p className="mt-3 text-sm text-ink-muted italic">
          {locale === 'vi'
            ? 'Mỗi phiên tập trung giúp bộ sưu tập nở rộ.'
            : 'Every focus session grows your collection.'}
        </p>
      </div>
      <div className="w-3/4">
        <div className="flex items-baseline justify-between text-xs text-ink-muted">
          <span>
            {unlockedTotal} / {total} {locale === 'vi' ? 'đã thu thập' : 'collected'}
          </span>
          <span>{progress}%</span>
        </div>
        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-paper-deep">
          <div className="h-full rounded-full bg-leaf" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  )
}

export function TocRightPage({
  entries,
  locale,
  onPick,
}: {
  entries: FlowerBookEntry[]
  locale: Locale
  onPick: (index: number) => void
}) {
  return (
    <div className="flex h-full flex-col">
      <h2 className="mb-3 shrink-0 font-display text-lg text-ink">
        {locale === 'vi' ? 'Mục lục' : 'Contents'}
      </h2>
      <div className="grid min-h-0 flex-1 grid-cols-3 content-start gap-2 overflow-y-auto sm:grid-cols-4">
        {entries.map((entry, i) => (
          <button
            key={entry.flower.kind}
            onClick={() => onPick(i)}
            title={entry.unlocked ? flowerName(entry.flower, locale) : '???'}
            className="group flex flex-col items-center gap-1 rounded-lg p-1.5 transition-colors hover:bg-paper-deep focus-visible:outline-2 focus-visible:outline-leaf"
          >
            <FlowerArt
              assetName={entry.flower.asset_name}
              className={`h-10 w-10 sm:h-12 sm:w-12 ${entry.unlocked ? '' : 'opacity-35 grayscale'}`}
            />
            <span className="w-full truncate text-center text-[10px] leading-tight text-ink-muted">
              {entry.unlocked ? flowerName(entry.flower, locale) : '???'}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export function FlowerLeftPage({ entry, locale }: { entry: FlowerBookEntry; locale: Locale }) {
  const { flower, unlocked } = entry
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex h-40 w-40 items-center justify-center rounded-full bg-paper-deep sm:h-52 sm:w-52">
        <FlowerArt
          assetName={flower.asset_name}
          className={`h-32 w-32 sm:h-44 sm:w-44 ${unlocked ? '' : 'opacity-35 grayscale'}`}
        />
      </div>
      <div className="text-center">
        <h2 className="font-display text-2xl text-ink">
          {unlocked ? flowerName(flower, locale) : '???'}
        </h2>
        <p className="mt-1 text-sm text-ink-muted italic">
          {unlocked ? flowerName(flower, locale === 'en' ? 'vi' : 'en') : ''}
        </p>
      </div>
    </div>
  )
}

export function FlowerRightPage({ entry, locale }: { entry: FlowerBookEntry; locale: Locale }) {
  const { flower, unlocked, collected_count } = entry
  const facts = flowerFacts(flower, locale)

  if (!unlocked) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
        <span aria-hidden className="text-3xl">
          🔒
        </span>
        <p className="max-w-[26ch] text-sm leading-relaxed text-ink-muted">
          {locale === 'vi'
            ? 'Bông hoa này vẫn còn là bí ẩn. Tập trung 30 phút để có cơ hội tìm thấy nó.'
            : 'This flower is still a mystery. Focus for 30 minutes for a chance to find it.'}
        </p>
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col gap-4 overflow-y-auto">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-leaf-soft px-2.5 py-1 font-medium text-leaf">
          {rarityLabel[flower.rarity]?.[locale] ?? flower.rarity}
        </span>
        <span className="rounded-full bg-bloom-soft px-2.5 py-1 font-medium text-bloom">
          {locale === 'vi' ? `Đã thu thập ×${collected_count}` : `Collected ×${collected_count}`}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-ink">{flowerDescription(flower, locale)}</p>
      {facts.length > 0 && (
        <ul className="flex flex-col gap-2.5 border-t border-paper-edge pt-4">
          {facts.map((fact, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
              <span aria-hidden className="text-leaf">
                ❧
              </span>
              {fact}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
