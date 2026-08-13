import { ArrowRight, Check, Sparkles, Trophy, X } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[-10rem] -z-10 flex justify-center"
      >
        <div className="h-[28rem] w-[46rem] rounded-full bg-primary/20 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-16 pb-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:pt-24 lg:pb-28">
        {/* copy */}
        <div className="flex flex-col items-start">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
              <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
              Nowość dla niezależnych korepetytorów
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              Zamień nudne zadania domowe w{' '}
              <span className="text-primary">60-sekundową grę</span> na telefonie.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Generuj interaktywne powtórki AI dla swoich uczniów w 15 sekund. Automatyczne raporty
              dla rodziców. Uczniowie rozwiązują je jednym kliknięciem — bez zakładania konta.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#beta"
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'h-12 rounded-full px-6 text-base font-semibold shadow-lg shadow-primary/25',
                )}
              >
                Zdobądź darmowy dostęp
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href="#jak-to-dziala"
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'h-12 rounded-full px-6 text-base font-semibold',
                )}
              >
                Zobacz jak to działa
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {['Bez karty kredytowej', 'Konfiguracja w 15 sekund', 'Uczniowie bez konta'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="size-4 text-success" aria-hidden="true" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </Reveal>
        </div>

        {/* phone mockup */}
        <Reveal delay={200} className="flex justify-center lg:justify-end">
          <PhoneMockup />
        </Reveal>
      </div>
    </section>
  )
}

function PhoneMockup() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-b from-primary/25 to-success/20 blur-2xl"
      />
      <div className="relative w-[280px] rounded-[2.5rem] border border-border bg-card p-3 shadow-2xl shadow-primary/20 sm:w-[300px]">
        {/* notch */}
        <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-foreground/90" />
        <div className="overflow-hidden rounded-[1.9rem] bg-background">
          {/* app top bar */}
          <div className="flex items-center justify-between bg-primary px-5 pb-4 pt-9 text-primary-foreground">
            <span className="text-sm font-semibold">Ułamki — Powtórka</span>
            <span className="rounded-full bg-primary-foreground/20 px-2 py-0.5 text-xs font-medium">
              4 / 5
            </span>
          </div>

          {/* progress */}
          <div className="h-1.5 w-full bg-muted">
            <div className="h-full w-4/5 rounded-r-full bg-success" />
          </div>

          {/* question */}
          <div className="space-y-4 p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Pytanie 4
            </p>
            <p className="text-base font-semibold leading-snug text-foreground">
              Ile to jest 1/2 + 1/4 ?
            </p>

            <div className="space-y-2.5">
              <Answer label="2/6" />
              <Answer label="3/4" correct />
              <Answer label="1/6" />
            </div>

            {/* score chip */}
            <div className="mt-4 flex items-center gap-3 rounded-2xl bg-success-muted p-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-success text-success-foreground">
                <Trophy className="size-4" aria-hidden="true" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-foreground">Świetnie! +50 pkt</p>
                <p className="text-xs text-muted-foreground">Seria 4 poprawnych odpowiedzi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Answer({ label, correct = false }: { label: string; correct?: boolean }) {
  return (
    <div
      className={cn(
        'flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium',
        correct
          ? 'border-success/40 bg-success-muted text-foreground'
          : 'border-border bg-card text-muted-foreground',
      )}
    >
      {label}
      {correct ? (
        <Check className="size-4 text-success" aria-hidden="true" />
      ) : (
        <X className="size-4 opacity-30" aria-hidden="true" />
      )}
    </div>
  )
}
