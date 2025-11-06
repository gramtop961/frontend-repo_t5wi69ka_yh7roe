import React from 'react';
import { Brain, Sparkles, Users2, Layers, Pointer, Clock, Shapes, Link2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Brain,
    title: 'AI-powered ideation',
    desc: 'Generate sticky notes, cluster themes, and summarize boards in seconds.'
  },
  {
    icon: Users2,
    title: 'True multiplayer',
    desc: 'Cursor presence, voice chat handoff, and roles to keep flow organized.'
  },
  {
    icon: Layers,
    title: 'Structured canvas',
    desc: 'Frames, grids, and smart alignment that snaps ideas into shape.'
  },
  {
    icon: Pointer,
    title: 'Fluid drawing',
    desc: 'Pencil-smooth ink with shape recognition and quick actions.'
  },
  {
    icon: Clock,
    title: 'Time travel',
    desc: 'Rewind decisions with version history and AI highlights.'
  },
  {
    icon: Link2,
    title: 'Works with anything',
    desc: 'Embed Figma, Notion, and live websites right into your board.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-[#0b0b17] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_20%_0%,rgba(119,72,255,0.12),transparent),radial-gradient(50%_40%_at_80%_100%,rgba(255,145,77,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Built for high‑velocity teams
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto mt-3 max-w-2xl text-center text-white/70"
        >
          Everything you need to move from idea to decision in one place.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/30 to-cyan-400/30">
                {React.createElement(f.icon, { className: 'h-5 w-5 text-white' })}
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
