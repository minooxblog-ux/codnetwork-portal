import { Link } from '@/i18n/routing';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.column}>
          <h4 className={styles.title}>المنتج</h4>
          <Link href="/services">الخدمات</Link>
          <Link href="/pricing">الأسعار</Link>
          <Link href="/technology">التطبيقات</Link>
          <Link href="/case-studies">الحالات</Link>
        </div>
        <div className={styles.column}>
          <h4 className={styles.title}>الموارد</h4>
          <Link href="/blog">المدونة</Link>
          <Link href="/faq">الأسئلة الشائعة</Link>
          <Link href="#">الأدلة</Link>
          <Link href="/blog">المقالات</Link>
        </div>
        <div className={styles.column}>
          <h4 className={styles.title}>الشركة</h4>
          <Link href="/about">من نحن</Link>
          <Link href="#">الوظائف</Link>
          <Link href="#">الشركاء</Link>
          <Link href="#">الأخبار</Link>
        </div>
        <div className={styles.column}>
          <h4 className={styles.title}>التواصل</h4>
          <a href="mailto:support@cod.network">📧 support@cod.network</a>
          <a href="tel:+97100000000">📞 +971-XXX-XXXXX</a>
          <a href="#">💬 الدعم 24/7</a>
          <div className={styles.socials}>
            <a href="#">🌐 FB</a>
            <a href="#">🌐 IG</a>
            <a href="#">🌐 IN</a>
          </div>
        </div>
      </div>
      <div className={`container ${styles.bottom}`}>
        <p>Copyright © 2024 COD Network. جميع الحقوق محفوظة.</p>
        <div className={styles.legal}>
          <Link href="#">الشروط والأحكام</Link>
          <Link href="#">سياسة الخصوصية</Link>
          <Link href="#">سياسة الكوكيز</Link>
        </div>
      </div>
    </footer>
  );
}
