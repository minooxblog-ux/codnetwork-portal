'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Store, Users2, Check, X, ArrowRight } from 'lucide-react';

export default function ModelsPreview() {
  const t = useTranslations('ModelsPreview');

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-14">{t('title')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
          {/* Seller */}
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="card rounded-2xl p-7 sm:p-8 flex flex-col relative overflow-hidden border-[rgba(255,123,0,0.2)]"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)]" />
            <div className="w-12 h-12 rounded-xl bg-[rgba(255,123,0,0.08)] border border-[rgba(255,123,0,0.15)] flex items-center justify-center text-[var(--primary)] mb-5">
              <Store size={24} />
            </div>
            <h3 className="text-xl font-bold mb-1">{t('sellerTitle')}</h3>
            <span className="text-xs text-[var(--primary)] font-medium mb-5">{t('sellerModel')}</span>
            <ul className="flex flex-col gap-3 flex-1 mb-6">
              {[t('sellerF1'), t('sellerF2'), t('sellerF3')].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                  <div className="w-5 h-5 rounded-full bg-[rgba(255,123,0,0.1)] flex items-center justify-center"><Check size={12} className="text-[var(--primary)]" /></div>
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] hover:shadow-lg hover:shadow-[var(--primary-glow)] transition-all flex items-center justify-center gap-2">
              {t('sellerBtn')} <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Affiliate */}
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="card rounded-2xl p-7 sm:p-8 flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-[var(--border)] flex items-center justify-center text-[var(--text-muted)] mb-5">
              <Users2 size={24} />
            </div>
            <h3 className="text-xl font-bold mb-1">{t('affiliateTitle')}</h3>
            <span className="text-xs text-[var(--text-muted)] font-medium mb-5">{t('affiliateModel')}</span>
            <ul className="flex flex-col gap-3 flex-1 mb-6">
              {[{ f: t('affiliateF1'), x: true }, { f: t('affiliateF2'), x: false }, { f: t('affiliateF3'), x: false }].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${item.x ? 'bg-[var(--border)]' : 'bg-[rgba(255,123,0,0.1)]'}`}>
                    {item.x ? <X size={12} className="text-[var(--text-muted)]" /> : <Check size={12} className="text-[var(--primary)]" />}
                  </div>
                  {item.f}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl text-sm font-semibold border border-[var(--border)] text-[var(--text)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all">
              {t('affiliateBtn')}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
