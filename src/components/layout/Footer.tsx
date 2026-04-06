'use client';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  const columns = [
    { title: t('company'), links: [
      { href: '/about', label: t('about') },
      { href: '/services', label: t('services') },
      { href: '/technology', label: t('tech') },
      { href: '/pricing', label: t('pricing') },
    ]},
    { title: t('resources'), links: [
      { href: '/faq', label: t('faq') },
      { href: '/case-studies', label: t('cases') },
      { href: '/blog', label: t('blog') },
    ]},
    { title: t('contact'), links: [
      { href: '/contact', label: t('contactUs') },
      { href: 'mailto:info@codnetwork.com', label: 'info@codnetwork.com', external: true },
    ]},
  ];

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-card)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 mb-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 font-extrabold text-lg mb-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center text-white text-sm">▲</span>
              COD Network
            </div>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-[220px]">{t('tagline')}</p>
          </div>

          {columns.map((col, i) => (
            <div key={i}>
              <h4 className="text-xs font-bold tracking-widest uppercase text-[var(--text-muted)] mb-4">{col.title}</h4>
              <div className="flex flex-col gap-2.5">
                {col.links.map((l, j) => (
                  l.external ?
                    <a key={j} href={l.href} className="text-sm text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">{l.label}</a> :
                    <Link key={j} href={l.href} className="text-sm text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">{l.label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-[var(--border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">© 2024 COD Network. {t('rights')}</p>
          <div className="flex gap-3">
            {['f', 'in', 'X'].map((s, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center text-xs text-[var(--text-muted)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
