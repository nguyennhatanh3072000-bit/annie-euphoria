import type { TranslationCopy } from '../content/translations'
import { FadeIn } from './FadeIn'
import { HtmlBlock } from './HtmlBlock'

type Tab = 'tarot' | 'tea'

const TAROT_ROWS: [string, string][] = [
  ['01 · Tarot', '40.000 ₫'],
  ['02 · Tarot', '180.000 ₫'],
  ['03 · Tarot', '300.000 ₫'],
]

const TEA_ROWS: [string, string][] = [
  ['01 · Tea Leaf', '60.000 ₫'],
  ['02 · Tea Leaf', '90.000 ₫'],
  ['03 · Tea Leaf', '120.000 ₫'],
]

export function Services({
  t,
  tab,
  onTab,
}: {
  t: TranslationCopy
  tab: Tab
  onTab: (v: Tab) => void
}) {
  const tarotCards: [typeof t.t1, typeof t.t2, typeof t.t3] = [t.t1, t.t2, t.t3]
  const teaCards: [typeof t.tl1, typeof t.tl2, typeof t.tl3] = [t.tl1, t.tl2, t.tl3]

  return (
    <section className="sec relative z-[1] mx-auto max-w-[1160px] px-14 py-[100px] max-[860px]:px-5 max-[860px]:py-[72px]" id="services">
      <FadeIn>
        <HtmlBlock
          as="p"
          html={t.svcEy}
          className="text-gold mb-[18px] flex items-center gap-4 text-[12px] tracking-[3px] uppercase before:h-px before:w-7 before:bg-gold before:opacity-60 before:content-['']"
        />
      </FadeIn>
      <FadeIn>
        <HtmlBlock
          as="h2"
          html={t.svcTitle}
          className="playfair text-text mb-5 text-[clamp(34px,5vw,62px)] leading-[1.05] font-normal [&_em]:text-gold [&_em]:italic"
        />
      </FadeIn>
      <FadeIn>
        <p className="text-text2 max-w-[540px] text-base leading-[1.85]">{t.svcLead}</p>
      </FadeIn>
      <FadeIn>
        <div className="border-border mt-[52px] mb-0 flex border-b">
          <button
            type="button"
            aria-selected={tab === 'tarot'}
            className={`playfair -mb-px cursor-pointer border-b px-[34px] py-3.5 text-[12px] tracking-[2px] uppercase transition-all duration-300 ${
              tab === 'tarot'
                ? 'border-gold text-gold'
                : 'border-transparent text-text3'
            }`}
            onClick={() => onTab('tarot')}
          >
            🔮 Tarot Reading
          </button>
          <button
            type="button"
            aria-selected={tab === 'tea'}
            className={`playfair -mb-px cursor-pointer border-b px-[34px] py-3.5 text-[12px] tracking-[2px] uppercase transition-all duration-300 ${
              tab === 'tea'
                ? 'border-gold text-gold'
                : 'border-transparent text-text3'
            }`}
            onClick={() => onTab('tea')}
          >
            {t.tabTea}
          </button>
        </div>
      </FadeIn>
      <FadeIn>
        <div
          className={`bg-border gap-px ${tab === 'tarot' ? 'grid grid-cols-3 max-[860px]:grid-cols-1' : 'hidden'}`}
          id="p-tarot"
          role="tabpanel"
          hidden={tab !== 'tarot'}
        >
          {[0, 1, 2].map((i) => {
            const [name, desc, unit] = tarotCards[i]!
            const [label, price] = TAROT_ROWS[i]!
            const star = i === 1
            return (
              <div
                key={label}
                className={`relative bg-black2 p-8 transition-colors duration-300 hover:bg-card max-[860px]:p-8 ${star ? 'bg-card' : ''}`}
              >
                {star ? (
                  <span className="absolute top-0 right-0 bg-gold px-3 py-[5px] font-[family-name:var(--font-raleway)] text-[9px] tracking-[2px] text-black uppercase">
                    Popular
                  </span>
                ) : null}
                <span className="playfair mb-5 block text-[12px] tracking-[2px] text-[rgba(201,168,76,.4)]">
                  {label}
                </span>
                <div className="playfair text-text mb-2.5 text-2xl font-normal">{name}</div>
                <div className="text-text3 mb-6 text-[13px] leading-[1.75]">{desc}</div>
                <div className="playfair text-gold text-[30px] font-normal">{price}</div>
                <div className="text-text3 mt-[3px] text-[11px] tracking-[1px]">{unit}</div>
                <div className="mt-[18px] flex gap-[7px]">
                  <span className="border-border text-text3 border px-2.5 py-[3px] text-[12px] tracking-[0.5px]">
                    🎙 Voice
                  </span>
                  <span className="border-border text-text3 border px-2.5 py-[3px] text-[12px] tracking-[0.5px]">
                    💬 Text
                  </span>
                </div>
              </div>
            )
          })}
        </div>
        <div
          className={`bg-border gap-px ${tab === 'tea' ? 'grid grid-cols-3 max-[860px]:grid-cols-1' : 'hidden'}`}
          id="p-tea"
          role="tabpanel"
          hidden={tab !== 'tea'}
        >
          {[0, 1, 2].map((i) => {
            const [name, desc, unit] = teaCards[i]!
            const [label, price] = TEA_ROWS[i]!
            const star = i === 1
            return (
              <div
                key={label}
                className={`relative bg-black2 p-8 transition-colors duration-300 hover:bg-card max-[860px]:p-8 ${star ? 'bg-card' : ''}`}
              >
                {star ? (
                  <span className="absolute top-0 right-0 bg-gold px-3 py-[5px] font-[family-name:var(--font-raleway)] text-[9px] tracking-[2px] text-black uppercase">
                    Popular
                  </span>
                ) : null}
                <span className="playfair mb-5 block text-[12px] tracking-[2px] text-[rgba(201,168,76,.4)]">
                  {label}
                </span>
                <div className="playfair text-text mb-2.5 text-2xl font-normal">{name}</div>
                <div className="text-text3 mb-6 text-[13px] leading-[1.75]">{desc}</div>
                <div className="playfair text-gold text-[30px] font-normal">{price}</div>
                <div className="text-text3 mt-[3px] text-[11px] tracking-[1px]">{unit}</div>
              </div>
            )
          })}
        </div>
      </FadeIn>
    </section>
  )
}
