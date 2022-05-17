import styles from '../styles/LocalTitle.module.css';

export default function LocalTitle({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.mainTitle}>
          <h1>{children}</h1>
        </div>
      </div>
    </div>
  );
}
