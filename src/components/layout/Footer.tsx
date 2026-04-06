'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './Footer.module.css';

export default function Footer() {
  const t = useTranslations('Footer');
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>▲</span> COD Network
          </div>
          <p className={styles.desc}>{t('desc')}</p>
        </div>
        
        <div className={styles.linksBlock}>
          <h4>{t('links')}</h4>
          <ul>
            <li><Link href="/about">{t('about')}</Link></li>
            <li><Link href="/services">{t('services')}</Link></li>
            <li><Link href="/contact">{t('contact')}</Link></li>
            <li><Link href="/faq">{t('faq')}</Link></li>
          </ul>
        </div>

        <div className={styles.linksBlock}>
          <h4>&nbsp;</h4>
          <ul>
            <li><Link href="/business-models">{t('models')}</Link></li>
            <li><Link href="/blog">{t('blog')}</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>{t('rights')}</p>
      </div>
    </footer>
  );
}
