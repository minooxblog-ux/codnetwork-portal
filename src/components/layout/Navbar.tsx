'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import styles from './Navbar.module.css';

export default function Navbar() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('Navbar');

  const switchLanguage = () => {
    const nextLocale = locale === 'ar' ? 'en' : locale === 'en' ? 'ru' : 'ar';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoIcon}>▲</span> COD Network
          </Link>
        </div>
        
        <div className={styles.links}>
          <Link href="/about" className={styles.link}>{t('about')}</Link>
          <Link href="/services" className={styles.link}>{t('services')}</Link>
          <Link href="/business-models" className={styles.link}>{t('businessModels')}</Link>
          <Link href="/technology" className={styles.link}>{t('tech')}</Link>
          <Link href="/pricing" className={styles.link}>{t('pricing')}</Link>
        </div>

        <div className={styles.actions}>
          <button className={styles.langToggle} onClick={switchLanguage}>
            {locale.toUpperCase()}
          </button>
          <button className={styles.loginBtn}>{t('login')}</button>
          <button className={`btn-primary ${styles.startBtn}`}>{t('startFree')}</button>
        </div>
      </div>
    </nav>
  );
}
