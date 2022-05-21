import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/free-mode";

import { Autoplay, FreeMode } from "swiper";

import styles from '../styles/Swiper.module.css';

import FoodPic from '../public/q-food-squ.jpeg';
import LogoPic from '../public/border-button-s-g.png';

export default function ImageBar() {

  return (
    <div
      className={styles.wrapper}
    >
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        speed={10000}
        modules={[Autoplay, FreeMode]}
        className='mySwiper'
      >
        <SwiperSlide>
          <SwiperSlide
            className='twoRow'
          >
            <img src={'https://i.imgur.com/0VkhnBw.jpg'} />
            <img src={'https://i.imgur.com/nR4DNIJ.jpg'} />
          </SwiperSlide>
        </SwiperSlide>
        <SwiperSlide> <img src={'https://s3-media0.fl.yelpcdn.com/bphoto/85P6K29F0l3BNn15Gzm8GA/o.jpg'} /></SwiperSlide>
        <SwiperSlide> <img src={'https://i.imgur.com/ZTRBlAI.jpg'} /></SwiperSlide>
        <SwiperSlide> <img src={'https://i.imgur.com/0ApmImb.jpg'} /></SwiperSlide>
        <SwiperSlide>
          <SwiperSlide
            className='twoRow'
          >
            <img src={'https://i.imgur.com/9d7GUK7.jpg'} />
            <img src={'https://i.imgur.com/A0kb7Fn.jpg'} />
          </SwiperSlide>
        </SwiperSlide>
        <SwiperSlide> <img src={'https://i.imgur.com/Q69pa7T.jpg'} /></SwiperSlide>
        <SwiperSlide> <img src={'https://i.imgur.com/5qUVQCK.jpg'} /></SwiperSlide>
        <SwiperSlide> <img src={'https://i.imgur.com/B6zSY4U.jpg'} /></SwiperSlide>
        <SwiperSlide>
          <SwiperSlide
            className='twoRow'
          >
            <img src={'https://i.imgur.com/ZAcDzIf.jpg'} />
            <img src={'https://i.imgur.com/emQMnLW.jpg'} />
          </SwiperSlide>
        </SwiperSlide>
        <SwiperSlide> <img src={'https://i.imgur.com/q7CHCYD.jpg'} /></SwiperSlide>
        <SwiperSlide> <img src={'https://i.imgur.com/lxGPrLy.jpg'} /></SwiperSlide>
        <SwiperSlide> <img src={'https://i.imgur.com/UptJ2Hv.jpg'} /></SwiperSlide>
      </Swiper>
    </div>
  );
}
