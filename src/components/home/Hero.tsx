'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import styles from './Hero.module.css';

export default function Hero() {
  const t = useTranslations('Hero');
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
      </div>
      <div className={`container ${styles.content}`}>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="headline"
        >
          {t('headlinePrefix')}<br/>
          <span className="text-gradient">{t('headlineGradient')}</span><br/> {t('headlineSuffix')}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.subtitle}
        >
          {t('subtitle')}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.actions}
        >
          <button className="btn-primary" style={{padding: '1rem 2.5rem', fontSize: '1.1rem'}}>{t('btnPrimary')}</button>
          <button className={styles.btnSecondary}>{t('btnSecondary')}</button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className={`glass-panel ${styles.trustRibbon}`}
        >
          <span>{t('trustText')}</span>
          <span className={styles.dot}>•</span>
          <span>{t('integrateText')}</span>
          <span className={styles.dot}>•</span>
          <span>{t('deliveryText')}</span>
        </motion.div>
      </div>
    </section>
  );
}
