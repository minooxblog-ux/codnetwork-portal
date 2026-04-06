'use client';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
      </div>
      <div className={`container ${styles.content}`}>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="headline"
        >
          نُمكّن الجميع من بدء، تنمية، وتوسيع إمبراطورية<br/>
          <span className="text-gradient">التجارة الإلكترونية</span><br/> في الشرق الأوسط، إفريقيا، وما وراءهما 🚀
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.subtitle}
        >
          COD Network هي شريكك اللوجستي الموثوق. من المصنع إلى باب العميل، نحن نتكفل بكل شيء. أنت ركّز على ما تجيده أفضل: البيع والتسويق! 💼
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.actions}
        >
          <button className="btn-primary" style={{padding: '1rem 2.5rem', fontSize: '1.1rem'}}>ابدأ مجاناً الآن</button>
          <button className={styles.btnSecondary}>شاهد الفيديو التوضيحي ▷</button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className={`glass-panel ${styles.trustRibbon}`}
        >
          <span>⭐ موثوق من قبل 20,000+ تاجر</span>
          <span className={styles.dot}>•</span>
          <span>⚡ متكامل مع 10+ منصات</span>
          <span className={styles.dot}>•</span>
          <span>🌍 توصيل إلى 9 دول</span>
        </motion.div>
      </div>
    </section>
  );
}
