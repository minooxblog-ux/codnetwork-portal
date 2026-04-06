'use client';
import { motion } from 'framer-motion';
import styles from './StatsSection.module.css';

const stats = [
  { val: '+20,000', label: 'عميل راضٍ' },
  { val: '+500,000', label: 'طلب شهريّ' },
  { val: '%95', label: 'معدل النجاح' },
  { val: '+9', label: 'دول' },
  { val: '+4', label: 'قارات' },
  { val: '24/7', label: 'دعم فني' }
];

export default function StatsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className={`glass-panel ${styles.statsBox}`}>
          <div className={styles.grid}>
            {stats.map((s, i) => (
              <div key={i} className={styles.statItem}>
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={styles.value}
                >
                  {s.val}
                </motion.div>
                <div className={styles.label}>{s.label}</div>
              </div>
            ))}
          </div>
          
          <div className={styles.partners}>
            <span>شركاء موثوقون:</span>
            <div className={styles.logos}>
              <span className={styles.logoItem}>Shopify</span>
              <span className={styles.logoItem}>YouCan</span>
              <span className={styles.logoItem}>WooCommerce</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
