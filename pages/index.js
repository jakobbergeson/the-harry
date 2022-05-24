import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import LocalTitle from '../components/LocalTitle';
import Messaging from '../components/Messaging';
import Button from '../components/Button';
import Info from '../components/Info';
import ImageBar from '../components/ImageBar';

import styles from './index.module.css';

export default function Home() {

  const info = [{ title: 'Restaurant Hours', list: [{ subTitle: 'Mon - Thur', info: '11a.m - 11p.m' }, { subTitle: 'Fri', info: '11a.m - 12a.m' }, { subTitle: 'Sat', info: '9a.m - 12a.m' }, { subTitle: 'Sun', info: '9a.m - 11p.m' }] }, { title: 'Brunch', list: [{ subTitle: 'Weekdays', info: '11a.m - 2p.m' }, { subTitle: 'Weekend', info: '9a.m - 2p.m' },] }, { title: 'Happy Hour', list: [{ subTitle: 'Mon - Fri', info: '3p.m - 6p.m' }] }];

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
          image={'https://i.imgur.com/Bevsoi8.jpg'}
          alt={'Food'}
        >
          <Button to='/'>
            View Full Menus
          </Button>
          <Button to='/'>
            Order online
          </Button>
        </Messaging>
        <Info
          title={'Queenstown'}
          address={'1557 Columbia St, San Diego, CA 92101'}
          addressLink={'https://maps.google.com/maps?q=1557%20Columbia%20Street&t=m&z=15'}
          phone={'619-546-0444'}
          info={info}
        />
        <ImageBar />
        <Messaging
          title='Host your event at Queenstown'
          paragraph={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore numquam sint incidunt enim! Voluptates sit tenetur dignissimos, a quo ipsa ab modi quos voluptatum pariatur? Autem maiores magnam sequi exercitationem. Lorem ipsum dolor, sit amet consectetur adipisicing elit.'}
          image={'https://i.imgur.com/wKOtBk8.jpg'}
          alt={'Food'}
          styleImWrap={{
            marginRight: '-1.5rem',
            maxHeight: '430px',
            overflow: 'hidden',
            gridColumnStart: 1,
            gridRow: 1,
          }}
          styleMc={{
            padding: '2rem',
            backgroundColor: '#f7efe6',
            height: 'max-content',
            width: 'calc(100% + 1.5rem)',
            zIndex: '2',
            margin: 'auto 0 auto -1.5rem',
            textAlign: 'left',
            gridColumnStart: 2,
            gridRow: 1,
          }}
        >
          <Button to='/'>
            Learn More
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
