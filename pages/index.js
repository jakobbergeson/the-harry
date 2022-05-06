import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import LocalTitle from '../components/LocalTitle';
import Messaging from '../components/Messaging';
import FoodPic from '../public/qt-food-2.png';
import Button from '../components/Button';

import styles from '@/pages/index.module.css';

export default function Home() {

  return (
    <div className={styles.container}>

      <Head>
        <title>Queenstown Public House</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <LocalTitle>QUEENSTOWN IN LITTLE ITALY</LocalTitle>
        <Messaging
          title='OUR MENU'
          paragraph={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore numquam sint incidunt enim! Voluptates sit tenetur dignissimos, a quo ipsa ab modi quos voluptatum pariatur? Autem maiores magnam sequi exercitationem. Lorem ipsum dolor, sit amet consectetur adipisicing elit.'}
          image={FoodPic}
          alt={'Food'}
        >
          <Button
            to='/'
          >
            View Full Menus
          </Button>
          <Button
            to='/'
          >
            Order online
          </Button>
        </Messaging>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
