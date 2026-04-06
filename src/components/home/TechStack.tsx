'use client';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Code2, Webhook, RefreshCw, ArrowRight } from 'lucide-react';

const platforms = ['Shopify', 'YouCan', 'WooCommerce', 'Lightfunnels'];

export default function TechStack() {
  const t = useTranslations('TechStack');

  const features = [
    { icon: <Code2 size={16} />, text: t('f1') },
    { icon: <Webhook size={16} />, text: t('f2') },
    { icon: <RefreshCw size={16} />, text: t('f3') },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-10">{t('title')}</h2>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {platforms.map((p, i) => (
            <motion.div key={i} initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-[var(--text)] bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] hover:-translate-y-0.5 transition-all cursor-default"
            >
              {p}
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <span className="text-[var(--primary)]">{f.icon}</span> {f.text}
            </div>
          ))}
        </div>

        <Link href="/technology" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-[var(--primary)] border border-[rgba(255,123,0,0.3)] hover:bg-[rgba(255,123,0,0.06)] transition-all">
          {t('discoverAll')} <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
