'use client';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import styles from './TechStack.module.css';

const platforms = ['Shopify', 'YouCan', 'WooCommerce', 'Lightfunnels'];

export default function TechStack() {
  const t = useTranslations('TechStack');
  return (
    <section className="section bg-card">
      <div className="container" style={{textAlign: 'center'}}>
        <h2 className="headline" style={{textAlign: 'center'}}>{t('title')}</h2>
        
        <div className={styles.platforms}>
          {platforms.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-panel ${styles.platform}`}
            >
              {p}
            </motion.div>
          ))}
        </div>
        
        <ul className={styles.featuresList}>
          <li>{t('f1')}</li>
          <li>{t('f2')}</li>
          <li>{t('f3')}</li>
        </ul>
        <br/>
        <Link href="/technology" className={styles.link}>{t('discoverAll')}</Link>
      </div>
    </section>
  );
}
