'use client';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import styles from './TechStack.module.css';

const platforms = ['Shopify', 'YouCan', 'WooCommerce', 'Lightfunnels'];

export default function TechStack() {
  return (
    <section className="section bg-card">
      <div className="container" style={{textAlign: 'center'}}>
        <h2 className="headline" style={{textAlign: 'center'}}>منصات مدعومة بشكل مباشر</h2>
        
        <div className={styles.platforms}>
          {platforms.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-panel ${styles.platform}`}
            >
              {p}
            </motion.div>
          ))}
        </div>
        
        <ul className={styles.featuresList}>
          <li>API مفتوحة للمطورين</li>
          <li>Webhooks و Automations</li>
          <li>Real-time sync (مزامنة فورية)</li>
        </ul>
        <br/>
        <Link href="/technology" className={styles.link}>اكتشف جميع التطبيقات المتوافقة</Link>
      </div>
    </section>
  );
}
