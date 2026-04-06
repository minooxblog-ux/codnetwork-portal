'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import styles from './ServicesOverview.module.css';

export default function ServicesOverview() {
  const t = useTranslations('Services');
  const [activeId, setActiveId] = useState<number | null>(null);

  const services = [
    { id: 1, title: t('sourcing'), en: t('sourcingEn'), icon: '🏭', desc: t('sourcingDesc') },
    { id: 2, title: t('customs'), en: t('customsEn'), icon: '📋', desc: t('customsDesc') },
    { id: 3, title: t('warehouse'), en: t('warehouseEn'), icon: '📦', desc: t('warehouseDesc') },
    { id: 4, title: t('callCenter'), en: t('callCenterEn'), icon: '📞', desc: t('callCenterDesc') },
    { id: 5, title: t('shipping'), en: t('shippingEn'), icon: '🚚', desc: t('shippingDesc') },
    { id: 6, title: t('remittance'), en: t('remittanceEn'), icon: '💰', desc: t('remittanceDesc') }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="headline text-center" style={{textAlign: 'center'}}>{t('title')}</h2>
        
        <div className={styles.scrollWrapper}>
          <div className={styles.cardContainer}>
            {services.map((svc) => (
              <motion.div 
                key={svc.id}
                className={`glass-panel ${styles.card} ${activeId === svc.id ? styles.cardActive : ''}`}
                onClick={() => setActiveId(activeId === svc.id ? null : svc.id)}
                whileHover={{ y: -5 }}
              >
                <div className={styles.icon}>{svc.icon}</div>
                <h3>{svc.title}</h3>
                <span className={styles.enTitle}>{svc.en}</span>
                
                <motion.div 
                  initial={false}
                  animate={{ height: activeId === svc.id ? 'auto' : 0, opacity: activeId === svc.id ? 1 : 0 }}
                  className={styles.expandedContent}
                >
                  <div style={{ paddingTop: '1rem' }}>
                    <p>{svc.desc}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className={styles.textCenter} style={{textAlign: 'center', marginTop: '2rem'}}>
          <Link href="/services" className={styles.moreLink}>{t('more')}</Link>
        </div>
      </div>
    </section>
  );
}
