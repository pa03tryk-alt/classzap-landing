'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Status = 'idle' | 'loading' | 'success'

export function BetaSignup() {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'loading') return
    setStatus('loading')
    // Simulate an API call for the MVP.
    setTimeout(() => setStatus('success'), 900)
  }

  return (
    <section id="beta" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 lg:py-28">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 shadow-xl shadow-primary/5 sm:px-12">
        {/* ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -z-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[100px]"
        />

        <div className="relative mx-auto max-w-md text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-accent px-3 py-1 text-xs font-semibold text-primary">
            Zamknięta beta — limitowane miejsca
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Dołącz do bety ClassZap
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            Zostaw e-mail, a odezwiemy się z dostępem, gdy tylko zwolni się miejsce.
          </p>

          {status === 'success' ? (
            <div
              role="status"
              aria-live="polite"
              className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-success/30 bg-success-muted p-8"
            >
              <CheckCircle2 className="size-10 text-success" aria-hidden="true" />
              <p className="text-lg font-semibold text-foreground">Dzięki! Jesteś na liście.</p>
              <p className="text-sm text-muted-foreground text-pretty">
                Otrzymasz dostęp do platformy na maila już wkrótce.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 text-left">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium">
                  Adres e-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ty@przyklad.pl"
                  className="h-11 rounded-xl border border-input bg-background px-4 text-sm outline-none transition focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-sm font-medium">
                  Czego uczysz?
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="h-11 rounded-xl border border-input bg-background px-4 text-sm outline-none transition focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
                >
                  <option value="" disabled>
                    Wybierz przedmiot…
                  </option>
                  <option value="matematyka">Matematyka</option>
                  <option value="jezyki">Języki obce</option>
                  <option value="inne">Inne</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'mt-2 h-12 rounded-xl text-base font-semibold shadow-lg shadow-primary/25',
                )}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                    Zapisywanie…
                  </>
                ) : (
                  <>
                    Zapisz się do zamkniętej bety
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </>
                )}
              </button>

              <p className="mt-1 text-center text-xs text-muted-foreground">
                Bez spamu. Wypiszesz się jednym kliknięciem.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
