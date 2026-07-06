import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FlowerArt from '../components/FlowerArt'
import { sampleFlowerBook } from '../data/flowers'
import type { Locale } from '../types'

const copy = {
  en: {
    tagline: 'Focus. Bloom. Collect.',
    intro:
      'FlowerDoro turns focus time into a garden. Finish a focus session and a new flower joins your collection — every bloom recorded in your field book.',
    cta: 'Open the Flower Book',
    features: [
      { icon: '⏳', title: 'Focus', text: 'Set the timer and give your full attention to one thing.' },
      { icon: '🌱', title: 'Grow', text: 'Each completed session plants a flower in your garden.' },
      { icon: '📖', title: 'Collect', text: 'Learn about every bloom you earn in the flower book.' },
    ],
  },
  vi: {
    tagline: 'Tập trung. Nở hoa. Sưu tầm.',
    intro:
      'FlowerDoro biến thời gian tập trung thành một khu vườn. Hoàn thành một phiên tập trung, một bông hoa mới sẽ về với bộ sưu tập — mỗi bông đều được ghi lại trong sổ tay hoa.',
    cta: 'Mở Sổ Tay Hoa',
    features: [
      { icon: '⏳', title: 'Tập trung', text: 'Đặt đồng hồ và dành trọn sự chú ý cho một việc.' },
      { icon: '🌱', title: 'Vun trồng', text: 'Mỗi phiên hoàn thành gieo một bông hoa vào vườn.' },
      { icon: '📖', title: 'Sưu tầm', text: 'Tìm hiểu về từng bông hoa bạn nhận được trong sổ tay.' },
    ],
  },
}

const heroFlowers = ['daisy', 'rose', 'sunflower', 'lotus', 'lavender']

export default function Home({ locale }: { locale: Locale }) {
  const reduced = useReducedMotion()
  const t = copy[locale]
  const { unlocked_total, total } = sampleFlowerBook

  return (
    <div className="flex flex-col items-center gap-12 py-8 text-center sm:gap-16 sm:py-14">
      {/* hero */}
      <section className="flex flex-col items-center gap-6">
        <motion.div
          variants={{ visible: { transition: { staggerChildren: reduced ? 0 : 0.1 } } }}
          initial={reduced ? 'visible' : 'hidden'}
          animate="visible"
          className="flex items-end gap-1 sm:gap-2"
        >
          {heroFlowers.map((kind, i) => (
            <motion.div
              key={kind}
              variants={{
                hidden: { opacity: 0, y: 14, scale: 0.7 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ type: 'spring', stiffness: 120, damping: 12 }}
              className={i === 2 ? 'h-24 w-24 sm:h-32 sm:w-32' : 'h-16 w-16 sm:h-20 sm:w-20'}
            >
              <FlowerArt assetName={kind} className="h-full w-full" />
            </motion.div>
          ))}
        </motion.div>

        <div>
          <h1 className="font-display text-4xl text-ink sm:text-6xl">FlowerDoro</h1>
          <p className="mt-3 font-display text-lg text-leaf italic sm:text-xl">{t.tagline}</p>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">{t.intro}</p>

        <motion.div
          whileHover={reduced ? undefined : { scale: 1.03 }}
          whileTap={reduced ? undefined : { scale: 0.98 }}
        >
          <Link
            to="/book"
            className="inline-flex items-center gap-2 rounded-full bg-leaf px-6 py-3 font-medium text-paper shadow-md transition-colors hover:bg-leaf/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
          >
            <span aria-hidden>📖</span>
            {t.cta}
            <span className="rounded-full bg-paper/20 px-2 py-0.5 text-xs">
              {unlocked_total}/{total}
            </span>
          </Link>
        </motion.div>
      </section>

      {/* features */}
      <section className="grid w-full max-w-3xl gap-4 sm:grid-cols-3">
        {t.features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={reduced ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4, ease: 'easeOut' }}
            className="rounded-2xl border border-paper-edge bg-paper p-5 text-center"
          >
            <span aria-hidden className="text-2xl">
              {feature.icon}
            </span>
            <h2 className="mt-2 font-display text-lg text-ink">{feature.title}</h2>
            <p className="mt-1 text-sm leading-relaxed text-ink-muted">{feature.text}</p>
          </motion.div>
        ))}
      </section>
    </div>
  )
}
