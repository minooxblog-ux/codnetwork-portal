'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from '@/i18n/routing';
import styles from './ServicesOverview.module.css';

const services = [
  { id: 1, title: 'التوريد', en: 'SOURCING', icon: '🏭', desc: 'نبحث عن أفضل الموردين والمصانع بدلاً منك. فحص جودة، أفضل الأسعار، وشروط دفع مرنة.' },
  { id: 2, title: 'التخليص الجمركي', en: 'CUSTOMS', icon: '📋', desc: 'فريقنا يتعامل مع كل التعقيدات. رسائل جمركية، فحوصات، وتصاريح - كل شيء بقانونية 100%.' },
  { id: 3, title: 'التخزين', en: 'WAREHOUSE', icon: '📦', desc: 'مستودعات حديثة بأنظمة تبريد ومراقبة أمنية. مخزونك آمن ومحمي.' },
  { id: 4, title: 'مراكز الاتصال', en: 'CALL CENTER', icon: '📞', desc: 'موظفون يتحدثون اللهجات المحلية. هم يؤكدون، يبيعون إضافيات، ويحلون الاعتراضات.' },
  { id: 5, title: 'الشحن والتوصيل', en: 'SHIPPING', icon: '🚚', desc: 'توصيل سريع بنفس اليوم في بعض المناطق. تتبع فوري، وسائق محترف.' },
  { id: 6, title: 'تحصيل الأموال', en: 'COD REMITTANCE', icon: '💰', desc: 'استقبل أرباحك فوراً. محفظة رقمية آمنة وتحويلات سريعة بدون رسوم مخفية.' }
];

export default function ServicesOverview() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="section">
      <div className="container">
        <h2 className="headline text-center" style={{textAlign: 'center'}}>خدماتنا في لمحة</h2>
        
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
          <Link href="/services" className={styles.moreLink}>عرض المزيد عن الخدمات ←</Link>
        </div>
      </div>
    </section>
  );
}
