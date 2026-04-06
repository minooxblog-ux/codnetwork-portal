'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Factory, FileCheck, Warehouse, Phone, Truck, Banknote, ArrowRight } from 'lucide-react';

export default function ServicesOverview() {
  const t = useTranslations('Services');
  const [activeId, setActiveId] = useState<number | null>(null);

  const services = [
    { id: 1, icon: <Factory size={28} />, title: t('sourcing'), en: t('sourcingEn'), desc: t('sourcingDesc') },
    { id: 2, icon: <FileCheck size={28} />, title: t('customs'), en: t('customsEn'), desc: t('customsDesc') },
    { id: 3, icon: <Warehouse size={28} />, title: t('warehouse'), en: t('warehouseEn'), desc: t('warehouseDesc') },
    { id: 4, icon: <Phone size={28} />, title: t('callCenter'), en: t('callCenterEn'), desc: t('callCenterDesc') },
    { id: 5, icon: <Truck size={28} />, title: t('shipping'), en: t('shippingEn'), desc: t('shippingDesc') },
    { id: 6, icon: <Banknote size={28} />, title: t('remittance'), en: t('remittanceEn'), desc: t('remittanceDesc') },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[var(--bg-card)] border-y border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-14">{t('title')}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((svc) => (
            <motion.div key={svc.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              onClick={() => setActiveId(activeId === svc.id ? null : svc.id)}
              className={`card rounded-2xl p-6 cursor-pointer relative overflow-hidden group ${activeId === svc.id ? 'border-[var(--primary)]/30 shadow-lg shadow-[var(--primary-glow)]' : ''}`}
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] transition-opacity ${activeId === svc.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
              <div className="w-12 h-12 rounded-xl bg-[rgba(255,123,0,0.08)] border border-[rgba(255,123,0,0.15)] flex items-center justify-center text-[var(--primary)] mb-4">
                {svc.icon}
              </div>
              <h3 className="text-lg font-bold text-[var(--text)] mb-1">{svc.title}</h3>
              <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">{svc.en}</span>

              <motion.div initial={false} animate={{ height: activeId === svc.id ? 'auto' : 0, opacity: activeId === svc.id ? 1 : 0 }} className="overflow-hidden">
                <p className="pt-4 text-sm text-[var(--text-muted)] leading-relaxed">{svc.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-[var(--primary)] border border-[rgba(255,123,0,0.3)] hover:bg-[rgba(255,123,0,0.06)] transition-all">
            {t('more')} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
