'use client';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ArrowRight, MessageCircle, BookOpen } from 'lucide-react';

export default function CTASection() {
  const t = useTranslations('CTA');

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="relative rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden border border-[rgba(255,123,0,0.15)]"
          style={{ background: 'linear-gradient(135deg, rgba(255,123,0,0.06) 0%, transparent 60%)' }}
        >
          {/* Decorative blobs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[var(--primary)] opacity-10 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[var(--primary-light)] opacity-[0.07] blur-[80px] pointer-events-none" />

          <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{t('title')}</h2>
          <p className="relative text-[var(--text-muted)] text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8">
            {t('desc1')}<br />{t('desc2')}
          </p>

          <button className="relative px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] hover:shadow-xl hover:shadow-[var(--primary-glow)] hover:-translate-y-1 transition-all flex items-center gap-2 mx-auto">
            {t('btn')} <ArrowRight size={18} />
          </button>

          <p className="relative flex items-center justify-center gap-4 mt-6 text-sm text-[var(--text-muted)]">
            {t('q')}
            <Link href="/contact" className="inline-flex items-center gap-1 text-[var(--primary)] font-semibold hover:underline"><MessageCircle size={14} /> {t('talk')}</Link>
            <span>|</span>
            <Link href="/blog" className="inline-flex items-center gap-1 text-[var(--primary)] font-semibold hover:underline"><BookOpen size={14} /> {t('read')}</Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
