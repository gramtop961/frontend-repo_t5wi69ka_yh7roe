import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-[#0a0a12] via-[#0a0a12] to-[#0b0b17] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil so text has contrast */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(82,0,255,0.18),transparent),radial-gradient(40%_40%_at_70%_70%,rgba(255,102,0,0.12),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0a12]/40 via-transparent to-[#0a0a12]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-xs font-medium tracking-wide text-white/80">Real-time AI collaboration</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-center text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          The modern AI-powered collaborative
          <span className="bg-gradient-to-r from-purple-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent"> whiteboard</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-5 max-w-2xl text-center text-base leading-relaxed text-white/70 md:text-lg"
        >
          Sketch, brainstorm, and build together with an intelligent canvas that organizes ideas, summarizes discussions, and turns scribbles into structure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-[#0a0a12] shadow-[0_8px_30px_rgb(255,255,255,0.1)] transition hover:translate-y-[-1px] hover:shadow-[0_10px_40px_rgb(255,255,255,0.18)]"
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:rotate-12" />
            Get Started
          </a>
          <button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur-md transition hover:bg-white/10">
            <Play className="h-4 w-4" />
            Watch Demo
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-3 text-xs text-white/70 sm:grid-cols-4"
        >
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
            <Shield className="h-4 w-4 text-emerald-400" /> Secure by design
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
            <Users className="h-4 w-4 text-cyan-300" /> 1000+ teams
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
            <span className="h-4 w-4 rounded-full bg-gradient-to-br from-amber-300 to-pink-300" /> AI summaries
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
            <span className="h-4 w-4 rounded-full bg-gradient-to-br from-purple-400 to-cyan-300" /> Infinite canvas
          </div>
        </motion.div>
      </div>
    </section>
  );
}
