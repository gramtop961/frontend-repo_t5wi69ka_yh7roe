import React from 'react';
import { motion } from 'framer-motion';

export default function Showcase() {
  return (
    <section className="relative w-full bg-[#0a0a12] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_50%_0%,rgba(0,212,255,0.12),transparent),radial-gradient(60%_40%_at_50%_100%,rgba(157,78,221,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold tracking-tight md:text-4xl"
          >
            A canvas that thinks with you
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-3 text-white/70"
          >
            Drop ideas, connect them, and let the system surface themes, next steps, and owners automatically.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
          >
            <div className="grid grid-cols-2 gap-3">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4">
                  <div className="h-28 rounded-lg bg-gradient-to-br from-purple-500/20 via-cyan-400/20 to-amber-300/20" />
                  <div className="mt-3 h-2 w-2/3 rounded bg-white/30" />
                  <div className="mt-2 h-2 w-1/2 rounded bg-white/20" />
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            {[
              {
                title: 'Auto-cluster notes',
                body: 'Turn messy brainstorms into organized groups with one click.'
              },
              {
                title: 'Instant summaries',
                body: 'Get meeting recaps, decisions, and action items right on the board.'
              },
              {
                title: 'Smart connectors',
                body: 'Link ideas and the system will suggest related threads and owners.'
              }
            ].map((item, i) => (
              <li key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-white/70">{item.body}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
