import style from '@/styles/Banner.module.css';

export default function Banner() {
  return (
    <a href='/' className={style.promoBar}>
      <ul>
        <li>Join our club! Receive 25% off your first online order</li>
      </ul>
    </a>
  );
}
