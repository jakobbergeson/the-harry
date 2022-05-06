import Link from "next/link";
import styles from '../styles/Button.module.css';

export default function Button({ to, children }) {

  return (
    <Link href={to}>
      <a className={styles.container}>{children}</a>
    </Link>
  );
};