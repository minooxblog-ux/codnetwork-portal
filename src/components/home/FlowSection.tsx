'use client';
import { motion } from 'framer-motion';
import styles from './FlowSection.module.css';

const steps = [
  { num: "1️⃣", title: "سجل حسابك", desc: "أنشئ حسابك مجاناً (بريد + كلمة سر)" },
  { num: "2️⃣", title: "اختر نموذج العمل", desc: "اختر البائع أو المسوق واستقبل تفاصيل البرنامج" },
  { num: "3️⃣", title: "ابدأ البيع", desc: "اربح المال فوراً من اليوم الأول" }
];

export default function FlowSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline" style={{textAlign: 'center'}}>ابدأ في 3 خطوات فقط</h2>
        
        <div className={styles.flowContainer}>
          {steps.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`glass-panel ${styles.stepCard}`}
            >
              <div className={styles.icon}>{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div style={{textAlign: 'center', marginTop: '3rem'}}>
          <p className={styles.timeInfo}>⏱️ يستغرق دقيقة واحدة فقط!</p>
          <button className="btn-primary" style={{marginTop: '1rem'}}>ابدأ الآن - مجاناً 100%</button>
        </div>
      </div>
    </section>
  );
}
