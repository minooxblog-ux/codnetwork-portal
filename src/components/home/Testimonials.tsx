'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const t = useTranslations('Testimonials');
  const [index, setIndex] = useState(0);

  const testimonials = [
    { text: t('t1'), name: t('t1Name'), country: t('t1Country') },
    { text: t('t2'), name: t('t2Name'), country: t('t2Country') },
    { text: t('t3'), name: t('t3Name'), country: t('t3Country') }
  ];

  const nextTestimonial = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section bg-card">
      <div className="container" style={{textAlign: 'center'}}>
        <h2 className="headline text-center" style={{textAlign: 'center'}}>{t('title')}</h2>
        
        <div className={styles.carouselContainer}>
          <button className={styles.navBtn} onClick={prevTestimonial}>◀</button>
          
          <div className={styles.cardWrapper}>
            <AnimatePresence mode="wait">
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className={`glass-panel ${styles.testimonialCard}`}
              >
                <p className={styles.quote}>&quot;{testimonials[index].text}&quot;</p>
                <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                <h4 className={styles.author}>{testimonials[index].name}</h4>
                <span className={styles.country}>{testimonials[index].country}</span>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <button className={styles.navBtn} onClick={nextTestimonial}>▶</button>
        </div>
        
        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button 
              key={i} 
              className={`${styles.dot} ${index === i ? styles.activeDot : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
