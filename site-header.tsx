import Link from 'next/link'
import { Zap } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="ClassZap — strona główna">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm shadow-primary/30">
            <Zap className="size-4 fill-current" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-tight">ClassZap</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#jak-to-dziala" className="transition-colors hover:text-foreground">
            Jak to działa
          </a>
          <a href="#dlaczego" className="transition-colors hover:text-foreground">
            Dlaczego ClassZap
          </a>
        </nav>

        <a
          href="#beta"
          className={cn(
            buttonVariants({ variant: 'default' }),
            'h-10 rounded-full px-5 text-sm font-semibold shadow-sm shadow-primary/25',
          )}
        >
          Dołącz do Bety
        </a>
      </div>
    </header>
  )
}
