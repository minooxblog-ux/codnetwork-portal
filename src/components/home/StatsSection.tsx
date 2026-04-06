'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import styles from './StatsSection.module.css';

export default function StatsSection() {
  const t = useTranslations('Stats');

  const stats = [
    { val: '+20,000', label: t('clients') },
    { val: '+500K', label: t('orders') },
    { val: '95%', label: t('success') },
    { val: '+9', label: t('countries') },
    { val: '+4', label: t('continents') },
    { val: '24/7', label: t('support') },
  ];

  return (
    <section className={styles.stats}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={styles.card}
            >
              <div className={styles.number}>{s.val}</div>
              <div className={styles.label}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
