'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import styles from './Hero.module.css';

export default function Hero() {
  const t = useTranslations('Hero');
  return (
    <section className={styles.hero}>
      {/* Animated background blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />
      {/* Grid overlay */}
      <div className={styles.grid} />

      <div className={`container ${styles.content}`}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.badgeWrap}
        >
          <span className="badge">🌍 {t('badge')}</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`headline ${styles.h1}`}
        >
          {t('headlinePrefix')}<br />
          <span className="text-gradient">{t('headlineGradient')}</span>
          <br />{t('headlineSuffix')}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className={`subheadline ${styles.subtitle}`}
        >
          {t('subtitle')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.actions}
        >
          <button className="btn-primary">{t('btnPrimary')} →</button>
          <button className="btn-outline">{t('btnSecondary')}</button>
        </motion.div>

        {/* Trust Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className={styles.trustRibbon}
        >
          <div className={styles.trustItem}>
            <span className={styles.trustNum}>+2000</span>
            <span className={styles.trustLabel}>{t('trustText')}</span>
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustItem}>
            <span className={styles.trustNum}>6</span>
            <span className={styles.trustLabel}>{t('integrateText')}</span>
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustItem}>
            <span className={styles.trustNum}>24h</span>
            <span className={styles.trustLabel}>{t('deliveryText')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
