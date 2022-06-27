import Link from 'next/link';
import style from '../styles/Banner.module.css';

export default function Banner() {
  return (
    <Link
      href='/' className={style.promoBar}
    >
      <a>
        <ul>
          <li>Join our club! Receive 25% off your first online order</li>
        </ul>
      </a>
    </Link>
  );
}
