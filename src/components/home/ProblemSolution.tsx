'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import styles from './ProblemSolution.module.css';

export default function ProblemSolution() {
  const t = useTranslations('ProblemSolution');

  const problems = [
    { problem: t('p1'), solution: t('s1'), icon: "🤝" },
    { problem: t('p2'), solution: t('s2'), icon: "🚚" },
    { problem: t('p3'), solution: t('s3'), icon: "📞" },
    { problem: t('p4'), solution: t('s4'), icon: "✅" },
    { problem: t('p5'), solution: t('s5'), icon: "💰" },
    { problem: t('p6'), solution: t('s6'), icon: "📊" }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <h2 className="headline" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
            {t('titlePrefix')} <span className="text-gradient">{t('titleGradient')}</span>
          </h2>
        </div>
        
        <div className={styles.grid}>
          {/* Column 1: Problems */}
          <div className={`glass-panel ${styles.colProblem}`}>
            <h3 className={styles.colTitle}>
              <span className={styles.iconRef}>❌</span> {t('colProblemTitle')}
            </h3>
            <ul className={styles.list}>
              {problems.map((p, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1 }}
                  className={styles.itemProblem}
                >
                  {p.problem}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Separation Arrow */}
          <div className={styles.arrowCenter}>
            <motion.span
               initial={{ opacity: 0, scale: 0 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               style={{ transform: 'scaleX(var(--rtl-scale, 1))' }}
            >→</motion.span>
          </div>

          {/* Column 2: Solutions */}
          <div className={`glass-panel ${styles.colSolution}`}>
            <h3 className={styles.colTitle}>
              <span className={styles.iconRef}>✅</span> {t('colSolutionTitle')}
            </h3>
            <ul className={styles.list}>
              {problems.map((p, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1 }}
                  className={styles.itemSolution}
                >
                  <span className={styles.itemIcon}>{p.icon}</span>
                  {p.solution}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
