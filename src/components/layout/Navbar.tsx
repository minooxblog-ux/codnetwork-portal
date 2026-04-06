'use client';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';

export default function Navbar() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('Navbar');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const switchLang = () => {
    const next = locale === 'ar' ? 'en' : locale === 'en' ? 'ru' : 'ar';
    router.replace(pathname, { locale: next });
  };

  const navLinks = [
    { href: '/about', label: t('about') },
    { href: '/services', label: t('services') },
    { href: '/business-models', label: t('businessModels') },
    { href: '/technology', label: t('tech') },
    { href: '/pricing', label: t('pricing') },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 px-4 py-3">
      <div className="max-w-6xl mx-auto glass rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-[var(--text)] font-extrabold text-lg whitespace-nowrap">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center text-white text-sm">▲</span>
          COD Network
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} className="px-3 py-1.5 text-sm font-medium text-[var(--text-muted)] rounded-full hover:text-[var(--text)] hover:bg-[var(--border)] transition-all">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {mounted && (
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all" aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
          <button onClick={switchLang} className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all" aria-label="Switch language">
            <Globe size={16} />
          </button>
          <button className="hidden sm:block px-3 py-1.5 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">{t('login')}</button>
          <button className="hidden sm:block px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] hover:shadow-lg hover:shadow-[var(--primary-glow)] hover:-translate-y-0.5 transition-all">{t('startFree')}</button>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)]" aria-label="Menu">
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden mt-2 max-w-6xl mx-auto glass rounded-2xl p-4 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="px-4 py-2.5 text-sm font-medium text-[var(--text-muted)] rounded-xl hover:bg-[var(--border)] transition-all">
              {l.label}
            </Link>
          ))}
          <div className="flex gap-2 mt-2">
            <button className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium border border-[var(--border)] text-[var(--text-muted)]">{t('login')}</button>
            <button className="flex-1 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)]">{t('startFree')}</button>
          </div>
        </div>
      )}
    </nav>
  );
}
