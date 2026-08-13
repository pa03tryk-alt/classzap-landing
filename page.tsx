import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { WhyClassZap } from '@/components/why-classzap'
import { HowItWorks } from '@/components/how-it-works'
import { BetaSignup } from '@/components/beta-signup'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <WhyClassZap />
        <HowItWorks />
        <BetaSignup />
      </main>
      <SiteFooter />
    </div>
  )
}
