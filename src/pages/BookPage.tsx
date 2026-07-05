import Book from '../components/Book'
import { sampleFlowerBook } from '../data/flowers'
import type { Locale } from '../types'

export default function BookPage({ locale }: { locale: Locale }) {
  const book = sampleFlowerBook
  return (
    <div className="py-4">
      <Book
        entries={book.flowers}
        locale={locale}
        unlockedTotal={book.unlocked_total}
        total={book.total}
      />
    </div>
  )
}
