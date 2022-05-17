import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import { useState, useEffect } from 'react';
import NavButton from './NavButton';

export default function Navbar() {
  const [bg, setBg] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 400) {
      setBg(true);
    } else {
      setBg(false);
    }
  };

  useEffect(() => {
    changeBg();
    window.addEventListener("scroll", changeBg);
  });


  return (
    <div
      className={bg ? styles.navContainerBg : styles.navContainer} >
      <div className={styles.navWrapper}>
        <div className={styles.navSeperator}><hr /></div>
        <nav className="main-nav">
          <ul className={styles.uNav}>
            <div className={bg ? styles.logoBg : styles.logo}>
              <Link href='/' >
                <a><Image src="/qt-logo-w.png" alt="Queenstown Public House" width={250} height={65} /></a>
              </Link>
            </div>
            <li><Link href='/'><a>HOME</a></Link></li>
            <li><Link href='/'><a>MENUS</a></Link></li>
            <li><Link href='/'><a>GIFT CARDS</a></Link></li>
            <li>
              <Link
                href='https://nz-eats.com/careers/'
              >
                <a>CAREERS</a>
              </Link>
            </li>
            <NavButton bg={bg} to='/'>RESERVATIONS</NavButton>
            <NavButton bg={bg} to='/'>ORDER ONLINE</NavButton>
          </ul>
        </nav>
      </div>
    </div>
  );
}
