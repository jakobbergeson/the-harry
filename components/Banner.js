import style from '@/styles/Banner.module.css';

export default function Banner() {
  return (
    <a href='/' className={style.promoBar}>
      <ul>
        <li>Join our Ebites Club! Receive $10 off $20 your first online order</li>
      </ul>
    </a>
  );
}
