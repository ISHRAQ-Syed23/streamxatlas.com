
'use client'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Hero */}
      <section className="py-32">
        <h1 className="mb-8">
          building ai tools<br />
          for india and the world
        </h1>
        <p className="text-lg opacity-80 max-w-2xl mb-12">
          i build in public. everything here is real — projects, learnings, failures, and wins. no bullshit. just code and execution.
        </p>
        <div className="flex gap-6">
          <a
            href="/projects"
            className="border border-ghost px-6 py-3 text-sm hover:bg-ghost hover:text-jet transition-colors"
          >
            see projects →
          </a>
          <a
            href="https://x.com/syedishraq23"
            target="_blank"
            rel="noopener"
            className="text-slate hover:text-ghost transition-colors text-sm"
          >
            follow on x →
          </a>
        </div>
      </section>

      {/* Quick Stat */}
      <section className="py-20 border-t border-slate border-opacity-20">
        <div className="grid grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-2">5+</h3>
            <p className="text-sm opacity-60">active projects</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">∞</h3>
            <p className="text-sm opacity-60">learning curve</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">0</h3>
            <p className="text-sm opacity-60">budget (by choice)</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-slate border-opacity-20">
        <div className="max-w-2xl">
          <h2 className="mb-6">latest updates</h2>
          <p className="opacity-80 mb-8">
            check out what i'm working on this week. real-time updates on progress, bugs, and breakthroughs.
          </p>
          <a
            href="/now"
            className="border border-ghost px-6 py-3 text-sm inline-block hover:bg-ghost hover:text-jet transition-colors"
          >
            what's happening now →
          </a>
        </div>
      </section>
    </div>
  )
}
