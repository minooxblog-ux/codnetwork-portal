'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import styles from './StatsSection.module.css';

export default function StatsSection() {
  const t = useTranslations('Stats');

  const stats = [
    { val: '+20,000', label: t('clients') },
    { val: '+500,000', label: t('orders') },
    { val: '%95', label: t('success') },
    { val: '+9', label: t('countries') },
    { val: '+4', label: t('continents') },
    { val: '24/7', label: t('support') }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className={`glass-panel ${styles.statsBox}`}>
          <div className={styles.grid}>
            {stats.map((s, i) => (
              <div key={i} className={styles.statItem}>
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={styles.value}
                >
                  {s.val}
                </motion.div>
                <div className={styles.label}>{s.label}</div>
              </div>
            ))}
          </div>
          
          <div className={styles.partners}>
            <span>{t('partnersTitle')}</span>
            <div className={styles.logos}>
              <span className={styles.logoItem}>Shopify</span>
              <span className={styles.logoItem}>YouCan</span>
              <span className={styles.logoItem}>WooCommerce</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
