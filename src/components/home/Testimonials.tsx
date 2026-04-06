'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const t = useTranslations('Testimonials');
  const [idx, setIdx] = useState(0);

  const items = [
    { text: t('t1'), name: t('t1Name'), country: t('t1Country') },
    { text: t('t2'), name: t('t2Name'), country: t('t2Country') },
    { text: t('t3'), name: t('t3Name'), country: t('t3Country') },
  ];

  const next = () => setIdx((p) => (p + 1) % items.length);
  const prev = () => setIdx((p) => (p - 1 + items.length) % items.length);

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-14">{t('title')}</h2>

        <div className="flex items-center gap-4 sm:gap-6">
          <button onClick={prev} className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[var(--border)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all">
            <ChevronLeft size={18} />
          </button>

          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div key={idx} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3 }}
                className="card rounded-2xl p-8 sm:p-10 text-center"
              >
                <Quote size={32} className="mx-auto text-[var(--primary)] opacity-30 mb-4" />
                <p className="text-base sm:text-lg leading-relaxed text-[var(--text)] italic mb-6">&quot;{items[idx].text}&quot;</p>
                <div className="text-sm font-bold text-[var(--text)]">{items[idx].name}</div>
                <div className="text-xs text-[var(--primary)] font-medium mt-1">{items[idx].country}</div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={next} className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[var(--border)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all">
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} className={`h-1.5 rounded-full transition-all ${i === idx ? 'w-6 bg-[var(--primary)]' : 'w-1.5 bg-[var(--border)]'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
