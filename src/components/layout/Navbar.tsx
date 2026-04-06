'use client';


import { Link, usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();

  const toggleLocale = () => {
    // Simple cycle between 'ar', 'en', 'ru'
    const nextLocaleMap: Record<string, 'ar' | 'en' | 'ru'> = {
      'ar': 'en',
      'en': 'ru',
      'ru': 'ar'
    };
    const nextLocale = nextLocaleMap[locale] || 'ar';
    router.replace(pathname, {locale: nextLocale});
  };

  // Temporarily define translations here until we build a full dictionary
  const navItems = [
    { href: '/about', label: 'من نحن' },
    { href: '/services', label: 'خدماتنا' },
    { href: '/business-models', label: 'نماذج العمل' },
    { href: '/technology', label: 'التكنولوجيا' },
    { href: '/pricing', label: 'الأسعار' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="12" fill="url(#paint0_linear)"/>
            <path d="M20 12l8 14H12L20 12z" fill="#fff" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF7B00"/>
                <stop offset="1" stopColor="#F99A1A"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="text-gradient" style={{margin:0, fontSize:'1.5rem', fontFamily: 'var(--font-headline)'}}>COD Network</span>
        </Link>
        
        <div className={styles.navLinks}>
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? styles.active : ''}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className={styles.navActions}>
          <button onClick={toggleLocale} className={styles.langBtn}>
            {locale.toUpperCase()}
          </button>
          <button className="btn-primary" style={{padding: '0.6rem 1.5rem', fontSize:'0.9rem'}}>ابدأ مجاناً</button>
        </div>
      </div>
    </nav>
  );
}
