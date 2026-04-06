'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { UserPlus, Settings2, Rocket, ArrowRight, Clock } from 'lucide-react';

export default function FlowSection() {
  const t = useTranslations('Flow');

  const steps = [
    { icon: <UserPlus size={28} />, num: '01', title: t('s1Title'), desc: t('s1Desc') },
    { icon: <Settings2 size={28} />, num: '02', title: t('s2Title'), desc: t('s2Desc') },
    { icon: <Rocket size={28} />, num: '03', title: t('s3Title'), desc: t('s3Desc') },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[var(--bg-card)] border-y border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-14">{t('title')}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 relative">
          {/* Connector line */}
          <div className="hidden sm:block absolute top-14 left-[18%] right-[18%] h-[2px] bg-gradient-to-r from-[var(--primary)] via-[var(--primary-light)] to-[var(--primary)] opacity-20" />

          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="card rounded-2xl p-7 sm:p-8 text-center relative"
            >
              <div className="w-14 h-14 rounded-2xl bg-[rgba(255,123,0,0.08)] border border-[rgba(255,123,0,0.15)] flex items-center justify-center text-[var(--primary)] mx-auto mb-5 relative z-10">
                {s.icon}
              </div>
              <span className="text-[10px] font-extrabold tracking-widest text-[var(--primary)] uppercase">Step {s.num}</span>
              <h3 className="text-lg font-bold mt-2 mb-2 text-[var(--text)]">{s.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="flex items-center justify-center gap-2 text-sm text-[var(--text-muted)] mb-4">
            <Clock size={16} className="text-[var(--primary)]" /> {t('timeInfo')}
          </p>
          <button className="px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] hover:shadow-xl hover:shadow-[var(--primary-glow)] hover:-translate-y-0.5 transition-all flex items-center gap-2 mx-auto">
            {t('btnStart')} <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
