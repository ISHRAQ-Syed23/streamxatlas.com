
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ISHRAQ - Building AI Tools',
  description: 'Building AI tools for India. Competing with Google.',
  keywords: ['AI', 'Builder', 'India', 'Software Engineering'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-jet text-ghost">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-jet border-b border-slate border-opacity-20">
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="text-xl font-bold">
              ishraq
            </a>
            <div className="flex gap-8 text-sm">
              <a href="/" className="hover:opacity-70">home</a>
              <a href="/projects" className="hover:opacity-70">projects</a>
              <a href="/now" className="hover:opacity-70">now</a>
              <a href="/tools" className="hover:opacity-70">tools</a>
              <a href="/admin" className="hover:opacity-70">admin</a>
            </div>
          </div>
        </nav>

        <main className="pt-20 pb-20">
          {children}
        </main>

        <footer className="bg-jet border-t border-slate border-opacity-20 py-12">
          <div className="max-w-5xl mx-auto px-6 text-sm opacity-60">
            <p className="mb-4">
              Building in public. Reach out:
            </p>
            <div className="flex gap-6">
              <a href="mailto:syedishraq23@gmail.com" className="hover:opacity-100">
                email
              </a>
              <a href="https://x.com/syedishraq23" className="hover:opacity-100" target="_blank" rel="noopener">
                x
              </a>
              <a href="https://github.com/syedishraq23" className="hover:opacity-100" target="_blank" rel="noopener">
                github
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
