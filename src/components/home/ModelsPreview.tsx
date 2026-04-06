'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import styles from './ModelsPreview.module.css';

export default function ModelsPreview() {
  const t = useTranslations('ModelsPreview');
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline" style={{textAlign: 'center'}}>{t('title')}</h2>
        
        <div className={styles.grid}>
          {/* Seller Model */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`glass-panel ${styles.card}`}
          >
            <h3 className={styles.cardTitle}>{t('sellerTitle')} <br/><small>{t('sellerModel')}</small></h3>
            <ul className={styles.features}>
              <li><span className={styles.check}>✓</span> {t('sellerF1')}</li>
              <li><span className={styles.check}>✓</span> {t('sellerF2')}</li>
              <li><span className={styles.check}>✓</span> {t('sellerF3')}</li>
            </ul>
            <button className="btn-primary" style={{width: '100%', marginTop: 'auto'}}>{t('sellerBtn')}</button>
          </motion.div>

          {/* Affiliate Model */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`glass-panel ${styles.card}`}
          >
            <h3 className={styles.cardTitle}>{t('affiliateTitle')} <br/><small>{t('affiliateModel')}</small></h3>
            <ul className={styles.features}>
              <li><span className={styles.cross}>✗</span> {t('affiliateF1')}</li>
              <li><span className={styles.check}>✓</span> {t('affiliateF2')}</li>
              <li><span className={styles.check}>✓</span> {t('affiliateF3')}</li>
            </ul>
            <button className="btn-primary" style={{width: '100%', marginTop: 'auto', background: 'transparent', border: '2px solid var(--color-primary)', color: 'var(--color-primary)'}}>{t('affiliateBtn')}</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
