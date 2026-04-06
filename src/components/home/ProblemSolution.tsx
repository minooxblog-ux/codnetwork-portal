'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import styles from './ProblemSolution.module.css';

export default function ProblemSolution() {
  const t = useTranslations('ProblemSolution');

  const rows = [
    { old: t('p1'), new: t('s1') },
    { old: t('p2'), new: t('s2') },
    { old: t('p3'), new: t('s3') },
    { old: t('p4'), new: t('s4') },
    { old: t('p5'), new: t('s5') },
    { old: t('p6'), new: t('s6') },
  ];

  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <span className="badge">⚡ {t('titlePrefix')}</span>
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          {t('titlePrefix')} <span className="text-gradient">{t('titleGradient')}</span>
        </h2>
        <p className="subheadline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: '3.5rem' }}>
          {t('subtitle', { defaultValue: '' })}
        </p>

        <div className={styles.wrapper}>
          {/* Old Way */}
          <div className={styles.sideOld}>
            <span className={styles.sideTag}>❌ {t('colProblemTitle')}</span>
            <div className={styles.items}>
              {rows.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={styles.item}
                >
                  <span className={styles.itemBad}>✗</span>
                  {r.old}
                </motion.div>
              ))}
            </div>
          </div>

          {/* VS Divider */}
          <div className={styles.divider}>
            <div className={styles.vsCircle}>VS</div>
          </div>

          {/* New Way */}
          <div className={styles.sideNew}>
            <span className={styles.sideTag}>✅ {t('colSolutionTitle')}</span>
            <div className={styles.items}>
              {rows.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={styles.item}
                >
                  <span className={styles.itemGood}>✓</span>
                  {r.new}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
