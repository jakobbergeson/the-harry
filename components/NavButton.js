import Link from "next/link";
import styles from '@/styles/NavButton.module.css';

export default function NavButton({ bg, to, children }) {

  return (
    <Link href={to}>
      <a className={bg ? styles.containerBg : styles.container}>{children}</a>
    </Link>
  );
};
