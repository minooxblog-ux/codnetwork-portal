'use client';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import styles from './Footer.module.css';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>▲</span>
              COD Network
            </div>
            <p className={styles.tagline}>{t('tagline')}</p>
          </div>

          <div>
            <p className={styles.colTitle}>{t('company')}</p>
            <div className={styles.links}>
              <Link href="/about">{t('about')}</Link>
              <Link href="/services">{t('services')}</Link>
              <Link href="/technology">{t('tech')}</Link>
              <Link href="/pricing">{t('pricing')}</Link>
            </div>
          </div>

          <div>
            <p className={styles.colTitle}>{t('resources')}</p>
            <div className={styles.links}>
              <Link href="/faq">{t('faq')}</Link>
              <Link href="/case-studies">{t('cases')}</Link>
              <Link href="/blog">{t('blog')}</Link>
            </div>
          </div>

          <div>
            <p className={styles.colTitle}>{t('contact')}</p>
            <div className={styles.links}>
              <Link href="/contact">{t('contactUs')}</Link>
              <a href="mailto:info@codnetwork.com">info@codnetwork.com</a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© 2024 COD Network. {t('rights')}</p>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">in</a>
            <a href="#" aria-label="Twitter">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
