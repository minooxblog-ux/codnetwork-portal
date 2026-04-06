'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { XCircle, CheckCircle } from 'lucide-react';

export default function ProblemSolution() {
  const t = useTranslations('ProblemSolution');

  const rows = [
    { old: t('p1'), sol: t('s1') },
    { old: t('p2'), sol: t('s2') },
    { old: t('p3'), sol: t('s3') },
    { old: t('p4'), sol: t('s4') },
    { old: t('p5'), sol: t('s5') },
    { old: t('p6'), sol: t('s6') },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-[rgba(255,123,0,0.25)] bg-[rgba(255,123,0,0.08)] text-[var(--primary)] mb-4">
            ⚡ {t('titlePrefix')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            {t('titlePrefix')} <span className="text-gradient">{t('titleGradient')}</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)] max-w-lg mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-start">
          {/* Problems */}
          <div className="card rounded-2xl p-6 sm:p-8 border-red-500/10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-red-500/10 text-red-400 mb-6">
              <XCircle size={14} /> {t('colProblemTitle')}
            </div>
            <div className="flex flex-col gap-3">
              {rows.map((r, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3 text-sm sm:text-[15px] text-[var(--text-muted)]">
                  <XCircle size={16} className="text-red-400/60 shrink-0" />
                  {r.old}
                </motion.div>
              ))}
            </div>
          </div>

          {/* VS */}
          <div className="hidden md:flex flex-col items-center justify-center pt-20">
            <div className="w-12 h-12 rounded-full border border-[var(--border)] bg-[var(--bg-card)] flex items-center justify-center text-xs font-extrabold text-[var(--text-muted)]">VS</div>
          </div>

          {/* Solutions */}
          <div className="card rounded-2xl p-6 sm:p-8 border-[rgba(255,123,0,0.2)]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[rgba(255,123,0,0.1)] text-[var(--primary)] mb-6">
              <CheckCircle size={14} /> {t('colSolutionTitle')}
            </div>
            <div className="flex flex-col gap-3">
              {rows.map((r, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3 text-sm sm:text-[15px] text-[var(--text-muted)]">
                  <CheckCircle size={16} className="text-[var(--primary)] shrink-0" />
                  {r.sol}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
