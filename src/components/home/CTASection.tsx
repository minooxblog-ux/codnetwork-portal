'use client';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className="section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={styles.ctaBox}
        >
          <h2 className="headline" style={{marginBottom: '1rem'}}>🚀 هل أنت مستعد لتحويل حلمك إلى واقع؟</h2>
          <p className={styles.desc}>
            انضم إلى 20,000+ تاجر يثقون بـ COD Network اليوم.<br />
            ابدأ مجاناً، بدون بطاقة ائتمان.
          </p>
          <div className={styles.actions}>
            <button className="btn-primary" style={{padding: '1rem 2rem', fontSize: '1.2rem'}}>أنشئ حسابك المجاني الآن</button>
          </div>
          <p className={styles.helpText}>سؤال؟ <Link href="/contact">تحدث مع فريقنا</Link> | <Link href="/blog">اقرأ المقالات</Link></p>
        </motion.div>
      </div>
    </section>
  );
}
