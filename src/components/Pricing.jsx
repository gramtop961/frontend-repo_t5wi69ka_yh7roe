import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    cta: 'Start free',
    highlight: false,
    features: [
      '3 boards',
      'Up to 5 collaborators',
      'AI summaries (25/mo)',
      'Export to PDF'
    ]
  },
  {
    name: 'Pro',
    price: '$12',
    sub: 'per user / month',
    cta: 'Upgrade to Pro',
    highlight: true,
    features: [
      'Unlimited boards',
      'Advanced AI tools',
      'Workspace roles',
      'Priority support'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cta: 'Contact sales',
    highlight: false,
    features: [
      'SSO & SCIM',
      'Audit logs',
      'Custom SLA',
      'Dedicated success manager'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full bg-[#0b0b17] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_10%_0%,rgba(147,51,234,0.12),transparent),radial-gradient(40%_50%_at_90%_100%,rgba(34,211,238,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold tracking-tight md:text-4xl"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-3 text-white/70"
          >
            Choose a plan that scales with your team's ambition.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md ${
                t.highlight ? 'ring-2 ring-purple-400/60' : ''
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-purple-400/30 bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-200 backdrop-blur">Most popular</div>
              )}
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-bold">{t.price}</span>
                {t.sub && <span className="mb-1 text-sm text-white/60">{t.sub}</span>}
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-white/80">
                    <Check className="h-4 w-4 text-emerald-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-xl px-4 py-3 text-sm font-medium transition ${
                t.highlight
                  ? 'bg-white text-[#0a0a12] shadow-[0_8px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.22)]'
                  : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
              }`}>
                {t.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-sm text-white/70 backdrop-blur-md">
          <Sparkles className="mx-auto mb-2 h-5 w-5 text-amber-300" />
          Eligible startups get 6 months of Pro for free. Contact us to learn more.
        </div>
      </div>
    </section>
  );
}
