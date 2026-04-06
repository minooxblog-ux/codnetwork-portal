'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Users, Package, TrendingUp, MapPin, Globe2, Headphones } from 'lucide-react';

export default function StatsSection() {
  const t = useTranslations('Stats');

  const stats = [
    { icon: <Users size={22} />, val: '+20,000', label: t('clients') },
    { icon: <Package size={22} />, val: '+500K', label: t('orders') },
    { icon: <TrendingUp size={22} />, val: '95%', label: t('success') },
    { icon: <MapPin size={22} />, val: '+9', label: t('countries') },
    { icon: <Globe2 size={22} />, val: '+4', label: t('continents') },
    { icon: <Headphones size={22} />, val: '24/7', label: t('support') },
  ];

  return (
    <section className="py-16 sm:py-20 border-y border-[var(--border)] bg-[var(--bg-card)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="flex flex-col items-center text-center gap-2 py-4">
              <div className="w-11 h-11 rounded-xl bg-[rgba(255,123,0,0.08)] border border-[rgba(255,123,0,0.15)] flex items-center justify-center text-[var(--primary)]">
                {s.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-gradient">{s.val}</div>
              <div className="text-xs sm:text-sm text-[var(--text-muted)] font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
