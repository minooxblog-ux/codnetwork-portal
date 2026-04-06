'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, Play, Star, Zap, Globe2 } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] bg-[var(--primary)] -top-32 -right-32 animate-[float_10s_ease-in-out_infinite]" />
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] bg-[var(--primary-light)] bottom-0 left-[10%] animate-[float_8s_ease-in-out_infinite_-3s]" />
        <div className="absolute w-[250px] h-[250px] rounded-full opacity-[0.08] blur-[80px] bg-[var(--primary)] top-[40%] left-[45%] animate-[float_12s_ease-in-out_infinite_-6s]" />
        {/* Grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,123,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,123,0,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse 70% 50% at 50% 50%, black, transparent)',
        }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-[rgba(255,123,0,0.25)] bg-[rgba(255,123,0,0.08)] text-[var(--primary)]">
              <Zap size={14} /> {t('badge')}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight max-w-[900px]"
          >
            {t('headlinePrefix')}<br />
            <span className="text-gradient">{t('headlineGradient')}</span>
            <br />{t('headlineSuffix')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-base sm:text-lg text-[var(--text-muted)] max-w-[560px] leading-relaxed"
          >
            {t('subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
          >
            <button className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] hover:shadow-xl hover:shadow-[var(--primary-glow)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
              {t('btnPrimary')} <ArrowRight size={16} />
            </button>
            <button className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-semibold border border-[var(--border)] text-[var(--text)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all flex items-center justify-center gap-2">
              <Play size={16} /> {t('btnSecondary')}
            </button>
          </motion.div>

          {/* Trust Ribbon */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 sm:mt-20 glass rounded-2xl sm:rounded-full px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-center gap-6 sm:gap-8"
          >
            {[
              { icon: <Star size={18} className="text-[var(--primary)]" />, val: '+2,000', label: t('trustText') },
              { icon: <Zap size={18} className="text-[var(--primary)]" />, val: '6+', label: t('integrateText') },
              { icon: <Globe2 size={18} className="text-[var(--primary)]" />, val: '24h', label: t('deliveryText') },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[rgba(255,123,0,0.08)] border border-[rgba(255,123,0,0.15)] flex items-center justify-center">
                  {s.icon}
                </div>
                <div>
                  <div className="text-lg font-extrabold text-gradient">{s.val}</div>
                  <div className="text-xs text-[var(--text-muted)]">{s.label}</div>
                </div>
                {i < 2 && <div className="hidden sm:block w-px h-10 bg-[var(--border)] ms-4" />}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
