import styles from '../styles/Header.module.css';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

export default function Header() {

  const { scrollY } = useViewportScroll();

  const variant = {
    initial: {
      y: '-5%',
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        transition: 'ease'
      }
    }
  };

  const childVar = {
    initial: {
      opecity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 1,
        transition: 'ease'
      }
    }
  };

  const y1 = useTransform(
    scrollY,
    [0, 300], [0, -30],
    { clamp: false }
  );
  return (
    <motion.div
      className={styles.header}
      variants={variant}
      initial='initial'
      animate='animate'
      style={{
        y: y1,
      }}
    >
      <motion.div
        className={styles.gradientOverlay}
        variants={childVar}
      >
      </motion.div>
    </motion.div>
  );
}
