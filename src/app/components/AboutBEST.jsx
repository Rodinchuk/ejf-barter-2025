// Компонент на Next.js

import styles from './AboutBEST.module.css';

export default function AboutBEST() {
  return (
    <section  className={styles.bestSection}> 
      <h2 className={styles.title}>Організатор події</h2>
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.textBlock}>
          <h3 className={styles.subtitle}>BEST Lviv</h3>
          <p className={styles.description}>
            (Board of European Students of Technology) – осередок міжнародної
            неприбуткової громадської організації, який об'єднує студентів
            технічних спеціальностей. Нашою місією є розвиток студентів через
            обмін знаннями та співпрацю компаній, університетів та студентів
            Європи.
          </p>
          <a href="https://www.best-lviv.org.ua/" className={styles.link}>
            Дізнатися більше на сайті ↗
          </a>
        </div>
        <div className={styles.infoBlock}>
          <img
            src="./images/best-logo.svg"
            className={styles.logo}
          />
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>84</span>
              <span className={styles.statLabel}>осередків</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>30</span>
              <span className={styles.statLabel}>країн</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>36</span>
              <span className={styles.statLabel}>років досвіду</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
