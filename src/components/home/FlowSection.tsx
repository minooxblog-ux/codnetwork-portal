'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import styles from './FlowSection.module.css';

export default function FlowSection() {
  const t = useTranslations('Flow');

  const steps = [
    { num: "1️⃣", title: t('s1Title'), desc: t('s1Desc') },
    { num: "2️⃣", title: t('s2Title'), desc: t('s2Desc') },
    { num: "3️⃣", title: t('s3Title'), desc: t('s3Desc') }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="headline" style={{textAlign: 'center'}}>{t('title')}</h2>
        
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
          <p className={styles.timeInfo}>{t('timeInfo')}</p>
          <button className="btn-primary" style={{marginTop: '1rem'}}>{t('btnStart')}</button>
        </div>
      </div>
    </section>
  );
}
