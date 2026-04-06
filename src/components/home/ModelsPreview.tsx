'use client';
import { motion } from 'framer-motion';
import styles from './ModelsPreview.module.css';

export default function ModelsPreview() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline" style={{textAlign: 'center'}}>نماذج العمل</h2>
        
        <div className={styles.grid}>
          {/* Seller Model */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`glass-panel ${styles.card}`}
          >
            <h3 className={styles.cardTitle}>نموذج البائع <br/><small>(Seller Model)</small></h3>
            <ul className={styles.features}>
              <li><span className={styles.check}>✓</span> تملك منتجاتك الخاصة</li>
              <li><span className={styles.check}>✓</span> عمولة كاملة على المبيعات</li>
              <li><span className={styles.check}>✓</span> بناء علامة تجارية</li>
            </ul>
            <button className="btn-primary" style={{width: '100%', marginTop: 'auto'}}>ابدأ كبائع</button>
          </motion.div>

          {/* Affiliate Model */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`glass-panel ${styles.card}`}
          >
            <h3 className={styles.cardTitle}>نموذج المسوق بالعمولة <br/><small>(Affiliate Model)</small></h3>
            <ul className={styles.features}>
              <li><span className={styles.cross}>✗</span> ليس لديك مخزون</li>
              <li><span className={styles.check}>✓</span> بدون مسؤوليات</li>
              <li><span className={styles.check}>✓</span> ابدأ بـ $0 فوراً</li>
            </ul>
            <button className="btn-primary" style={{width: '100%', marginTop: 'auto', background: 'transparent', border: '2px solid var(--color-primary)', color: 'var(--color-primary)'}}>ابدأ كمسوق</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
