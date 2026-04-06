'use client';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import styles from './CTASection.module.css';

export default function CTASection() {
  const t = useTranslations('CTA');
  return (
    <section className="section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={styles.ctaBox}
        >
          <h2 className="headline" style={{marginBottom: '1rem'}}>{t('title')}</h2>
          <p className={styles.desc}>
            {t('desc1')}<br />
            {t('desc2')}
          </p>
          <div className={styles.actions}>
            <button className="btn-primary" style={{padding: '1rem 2rem', fontSize: '1.2rem'}}>{t('btn')}</button>
          </div>
          <p className={styles.helpText}>{t('q')} <Link href="/contact">{t('talk')}</Link> {t('or')} <Link href="/blog">{t('read')}</Link></p>
        </motion.div>
      </div>
    </section>
  );
}
