
'use client'

import { useEffect, useState } from 'react'
import { supabase, BuildLog } from '@/lib/supabase'

export default function Now() {
  const [logs, setLogs] = useState<BuildLog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const { data } = await supabase
          .from('build_logs')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(12)

        setLogs(data || [])
      } finally {
        setLoading(false)
      }
    }

    fetchLogs()
  }, [])

  return (
    <div className="max-w-5xl mx-auto px-6">
      <section className="py-20">
        <h1 className="mb-4">what i'm doing right now</h1>
        <p className="opacity-70 mb-12">
          weekly updates. real-time thoughts on what's working and what isn't.
        </p>

        {loading && (
          <div className="py-20 text-center opacity-60">
            loading updates...
          </div>
        )}

        {!loading && logs.length === 0 && (
          <div className="py-20 text-center opacity-60">
            no updates yet. stay tuned.
          </div>
        )}

        {!loading && logs.length > 0 && (
          <div className="space-y-16">
            {logs.map((log) => (
              <article key={log.id} className="border-b border-slate border-opacity-20 pb-12">
                <h2 className="text-lg font-bold mb-2">
                  week {log.week} / {log.year}
                </h2>

                <div className="opacity-80 whitespace-pre-line mb-6 max-w-2xl">
                  {log.content}
                </div>

                {log.highlights && log.highlights.length > 0 && (
                  <div className="mb-6">
                    <p className="text-sm font-bold mb-3 opacity-60">highlights</p>
                    <ul className="space-y-2 text-sm">
                      {log.highlights.map((item, idx) => (
                        <li key={idx} className="opacity-70">
                          → {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <p className="text-xs opacity-50">
                  {new Date(log.created_at).toLocaleDateString()}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
