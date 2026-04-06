'use client';
import { motion } from 'framer-motion';
import styles from './ProblemSolution.module.css';

const problems = [
  { problem: "موردين متعددين ومُرهقين", solution: "مورد موحد موثوق", icon: "🤝" },
  { problem: "شركات شحن بطيئة وغير آمنة", solution: "شحن سريع وآمن مضمون", icon: "🚚" },
  { problem: "تأكيد الطلبات يدويّاً (تكلفة)", solution: "مراكز اتصال احترافية", icon: "📞" },
  { problem: "نسبة مرتجعات عالية جداً", solution: "نسبة تأكيد 95%", icon: "✅" },
  { problem: "تحصيل أموال معقد", solution: "محفظة رقمية فورية", icon: "💰" },
  { problem: "لا رؤية على الأداء", solution: "لوحة تحكم ذكية", icon: "📊" }
];

export default function ProblemSolution() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <h2 className="headline" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
            كل هذه المشاكل... <span className="text-gradient">حلّها بسيط!</span>
          </h2>
        </div>
        
        <div className={styles.grid}>
          {/* Column 1: Problems */}
          <div className={`glass-panel ${styles.colProblem}`}>
            <h3 className={styles.colTitle}>
              <span className={styles.iconRef}>❌</span> مشاكل التاجر الحالية
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
            >←</motion.span>
          </div>

          {/* Column 2: Solutions */}
          <div className={`glass-panel ${styles.colSolution}`}>
            <h3 className={styles.colTitle}>
              <span className={styles.iconRef}>✅</span> حل COD Network
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
