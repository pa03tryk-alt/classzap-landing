import { Zap } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Zap className="size-3.5 fill-current" aria-hidden="true" />
          </span>
          <span className="text-sm font-bold tracking-tight">ClassZap</span>
        </div>

        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="transition-colors hover:text-foreground">
            Polityka prywatności
          </a>
          <a
            href="mailto:hello@classzap.app"
            className="transition-colors hover:text-foreground"
          >
            hello@classzap.app
          </a>
        </nav>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} ClassZap. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  )
}
