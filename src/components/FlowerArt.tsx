// Parametric SVG flower illustrations keyed by asset_name.
// Draft-quality stylized art; final release swaps in hand-tuned SVG assets.

interface PetalLayer {
  count: number
  length: number
  width: number
  color: string
  rotate?: number
  shape?: 'round' | 'pointed' | 'cup'
}

interface RadialSpec {
  type: 'radial'
  layers: PetalLayer[]
  center: { radius: number; color: string; dotColor?: string }
}

interface SpikeSpec {
  type: 'spike'
  budColor: string
  budColorAlt: string
  stemColor: string
}

interface CascadeSpec {
  type: 'cascade'
  budColor: string
  budColorAlt: string
  vineColor: string
}

type FlowerSpec = RadialSpec | SpikeSpec | CascadeSpec

const specs: Record<string, FlowerSpec> = {
  daisy: {
    type: 'radial',
    layers: [{ count: 16, length: 34, width: 9, color: '#fdfdf6', shape: 'round' }],
    center: { radius: 13, color: '#f2b93e', dotColor: '#d99a2b' },
  },
  rose: {
    type: 'radial',
    layers: [
      { count: 8, length: 36, width: 22, color: '#c9445a', shape: 'cup' },
      { count: 8, length: 27, width: 17, color: '#d9607a', rotate: 22.5, shape: 'cup' },
      { count: 6, length: 18, width: 13, color: '#e87f97', rotate: 10, shape: 'cup' },
    ],
    center: { radius: 7, color: '#a83248' },
  },
  sunflower: {
    type: 'radial',
    layers: [
      { count: 18, length: 38, width: 10, color: '#e8a41c', shape: 'pointed' },
      { count: 18, length: 30, width: 9, color: '#f5bd3d', rotate: 10, shape: 'pointed' },
    ],
    center: { radius: 16, color: '#5c4023', dotColor: '#7a5a35' },
  },
  tulip: {
    type: 'radial',
    layers: [
      { count: 3, length: 38, width: 26, color: '#d9536a', shape: 'cup' },
      { count: 3, length: 34, width: 22, color: '#e46e83', rotate: 60, shape: 'cup' },
    ],
    center: { radius: 6, color: '#b03a50' },
  },
  lotus: {
    type: 'radial',
    layers: [
      { count: 10, length: 38, width: 16, color: '#f0a9c0', shape: 'pointed' },
      { count: 8, length: 28, width: 13, color: '#f7c4d5', rotate: 18, shape: 'pointed' },
    ],
    center: { radius: 10, color: '#f5d76e', dotColor: '#e0b93f' },
  },
  lavender: { type: 'spike', budColor: '#8f7fc0', budColorAlt: '#a795d4', stemColor: '#7d8f6a' },
  orchid: {
    type: 'radial',
    layers: [
      { count: 5, length: 36, width: 20, color: '#c88fd8', shape: 'round' },
      { count: 3, length: 22, width: 14, color: '#e2b8ec', rotate: 36, shape: 'round' },
    ],
    center: { radius: 8, color: '#8e4b9e', dotColor: '#f2e28a' },
  },
  poppy: {
    type: 'radial',
    layers: [
      { count: 4, length: 38, width: 34, color: '#d8402f', shape: 'round' },
      { count: 4, length: 30, width: 26, color: '#e85a44', rotate: 45, shape: 'round' },
    ],
    center: { radius: 10, color: '#2f2a33', dotColor: '#4a4452' },
  },
  peony: {
    type: 'radial',
    layers: [
      { count: 10, length: 38, width: 22, color: '#e78aa5', shape: 'cup' },
      { count: 10, length: 29, width: 17, color: '#f0a7bd', rotate: 18, shape: 'cup' },
      { count: 8, length: 19, width: 12, color: '#f8c5d4', rotate: 9, shape: 'cup' },
    ],
    center: { radius: 6, color: '#d5688a' },
  },
  jasmine: {
    type: 'radial',
    layers: [{ count: 6, length: 34, width: 15, color: '#fbf8ef', shape: 'round' }],
    center: { radius: 8, color: '#f2d878', dotColor: '#dbb84f' },
  },
  wisteria: { type: 'cascade', budColor: '#9d8ccc', budColorAlt: '#b7a8e0', vineColor: '#6f7f5c' },
  edelweiss: {
    type: 'radial',
    layers: [
      { count: 9, length: 36, width: 11, color: '#f3f1e6', shape: 'pointed' },
      { count: 7, length: 24, width: 9, color: '#fbfaf3', rotate: 20, shape: 'pointed' },
    ],
    center: { radius: 11, color: '#e5d78a', dotColor: '#c9b95e' },
  },
}

const fallback: RadialSpec = {
  type: 'radial',
  layers: [{ count: 8, length: 34, width: 16, color: '#d9a0b4', shape: 'round' }],
  center: { radius: 10, color: '#e8c96a' },
}

function petalPath(length: number, width: number, shape: PetalLayer['shape']): string {
  const half = width / 2
  switch (shape) {
    case 'pointed':
      return `M 0 0 C ${half} ${-length * 0.35}, ${half * 0.5} ${-length * 0.85}, 0 ${-length} C ${-half * 0.5} ${-length * 0.85}, ${-half} ${-length * 0.35}, 0 0 Z`
    case 'cup':
      return `M 0 0 C ${half} ${-length * 0.2}, ${half} ${-length * 0.9}, 0 ${-length} C ${-half} ${-length * 0.9}, ${-half} ${-length * 0.2}, 0 0 Z`
    default:
      return `M 0 0 C ${half} ${-length * 0.3}, ${half} ${-length * 0.75}, 0 ${-length} C ${-half} ${-length * 0.75}, ${-half} ${-length * 0.3}, 0 0 Z`
  }
}

function Radial({ spec }: { spec: RadialSpec }) {
  return (
    <g transform="translate(50 50)">
      {spec.layers.map((layer, li) => (
        <g key={li} transform={`rotate(${layer.rotate ?? 0})`}>
          {Array.from({ length: layer.count }, (_, i) => (
            <path
              key={i}
              d={petalPath(layer.length, layer.width, layer.shape)}
              fill={layer.color}
              transform={`rotate(${(360 / layer.count) * i})`}
              stroke="rgba(0,0,0,0.06)"
              strokeWidth="0.5"
            />
          ))}
        </g>
      ))}
      <circle r={spec.center.radius} fill={spec.center.color} />
      {spec.center.dotColor &&
        Array.from({ length: 7 }, (_, i) => {
          const angle = (i / 7) * Math.PI * 2
          const r = spec.center.radius * 0.55
          return (
            <circle
              key={i}
              cx={Math.cos(angle) * r}
              cy={Math.sin(angle) * r}
              r={spec.center.radius * 0.16}
              fill={spec.center.dotColor}
            />
          )
        })}
    </g>
  )
}

function Spike({ spec }: { spec: SpikeSpec }) {
  const buds: { x: number; y: number; alt: boolean }[] = []
  for (let row = 0; row < 8; row++) {
    const y = 18 + row * 7
    const spread = row < 2 ? 3 : 5.5
    buds.push({ x: 50 - spread, y, alt: row % 2 === 0 })
    buds.push({ x: 50 + spread, y, alt: row % 2 === 1 })
    if (row > 1) buds.push({ x: 50, y: y - 3, alt: false })
  }
  return (
    <g>
      <path d="M 50 78 C 50 88, 48 92, 47 96" stroke={spec.stemColor} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M 50 82 C 43 84, 39 88, 37 92 M 50 86 C 56 88, 60 91, 62 94" stroke={spec.stemColor} strokeWidth="2" fill="none" strokeLinecap="round" />
      {buds.map((bud, i) => (
        <ellipse key={i} cx={bud.x} cy={bud.y} rx="4.2" ry="3.4" fill={bud.alt ? spec.budColor : spec.budColorAlt} />
      ))}
    </g>
  )
}

function Cascade({ spec }: { spec: CascadeSpec }) {
  const chains = [
    { x: 30, len: 6 },
    { x: 50, len: 8 },
    { x: 70, len: 5 },
  ]
  return (
    <g>
      <path d="M 15 14 C 40 8, 62 10, 85 16" stroke={spec.vineColor} strokeWidth="3" fill="none" strokeLinecap="round" />
      {chains.map((chain, ci) => (
        <g key={ci}>
          <path
            d={`M ${chain.x} 14 C ${chain.x - 2} ${14 + chain.len * 4}, ${chain.x + 2} ${14 + chain.len * 7}, ${chain.x} ${14 + chain.len * 9}`}
            stroke={spec.vineColor}
            strokeWidth="1.4"
            fill="none"
          />
          {Array.from({ length: chain.len }, (_, i) => {
            const t = i / (chain.len - 1)
            const y = 18 + t * chain.len * 8.2
            const size = 5.5 - t * 2.5
            return (
              <g key={i}>
                <circle cx={chain.x - size * 0.7} cy={y} r={size} fill={spec.budColor} />
                <circle cx={chain.x + size * 0.7} cy={y} r={size} fill={spec.budColorAlt} />
              </g>
            )
          })}
        </g>
      ))}
    </g>
  )
}

export default function FlowerArt({ assetName, className }: { assetName: string; className?: string }) {
  const spec = specs[assetName] ?? fallback
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label={assetName}>
      {spec.type === 'radial' && <Radial spec={spec} />}
      {spec.type === 'spike' && <Spike spec={spec} />}
      {spec.type === 'cascade' && <Cascade spec={spec} />}
    </svg>
  )
}
