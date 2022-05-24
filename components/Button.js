import Link from "next/link";
import styles from '../styles/Button.module.css';

export default function Button({ to, children, secondary = false }) {

  return (
    <Link href={to}>
      <a className={secondary ? styles.containerSecondary : styles.container}>{children}</a>
    </Link>
  );
};