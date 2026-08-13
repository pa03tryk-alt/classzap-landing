import { PencilLine, Send, BarChart3 } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    icon: PencilLine,
    step: '01',
    title: 'Wpisz temat',
    description: 'Wklej notatki z lekcji lub temat powtórki. AI zajmie się resztą.',
  },
  {
    icon: Send,
    step: '02',
    title: 'Wyślij link',
    description: 'Skopiuj unikalny link i wyślij uczniowi na WhatsApp lub Messenger.',
  },
  {
    icon: BarChart3,
    step: '03',
    title: 'Zbieraj wyniki',
    description: 'Śledź postępy ucznia na prostym, przejrzystym dashboardzie.',
  },
]

export function HowItWorks() {
  return (
    <section id="jak-to-dziala" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Jak to działa
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Od notatek do gotowej gry w trzech krokach
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.step} delay={i * 100} as="li">
              <div className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm">
                <span className="absolute right-6 top-6 text-4xl font-bold text-primary/10">
                  {step.step}
                </span>
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm shadow-primary/30">
                  <step.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
