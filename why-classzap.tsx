import { MousePointerClick, Mail, Wand2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const pillars = [
  {
    icon: MousePointerClick,
    title: 'Zero tarcia dla ucznia',
    problem: 'Bez logowania, bez haseł, bez instalowania aplikacji.',
    solution:
      'Uczeń klika link z WhatsAppa i od razu gra. Jedno kliknięcie dzieli go od nauki.',
  },
  {
    icon: Mail,
    title: 'Rodzice widzą Twoją wartość',
    problem: 'Rodzice nie wiedzą, co dzieje się między lekcjami.',
    solution:
      'Automatyczne raporty na e-mail pokazują postępy dziecka i udowadniają, że warto płacić właśnie Tobie.',
  },
  {
    icon: Wand2,
    title: 'Konfiguracja w 15 sekund',
    problem: 'Tworzenie quizów ręcznie zajmuje godziny co tydzień.',
    solution:
      'Wklej notatki z lekcji, a AI błyskawicznie ułoży dopasowaną, interaktywną powtórkę.',
  },
]

export function WhyClassZap() {
  return (
    <section id="dlaczego" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">
          Dlaczego ClassZap
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Mniej pracy administracyjnej. Więcej zadowolonych uczniów.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          ClassZap rozwiązuje trzy największe bóle niezależnego korepetytora.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 100}>
            <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
              <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <pillar.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-sm font-medium text-muted-foreground line-through decoration-destructive/50">
                {pillar.problem}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">{pillar.solution}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
