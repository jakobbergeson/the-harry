import { motion } from "framer-motion";

export default function Box({
  children,
  variants,
  style,
  initial = 'hidden',
  whileInView = 'visible',
  viewport = 'default',
  amount = .15,
  delay = 0,
}) {

  const defaultVariants = {
    hidden: {
      y: 25,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 1
      }
    }
  };

  const defaultViewport = {
    once: false,
    amount,
  };

  return (
    <motion.div
      variants={
        !variants
          ? defaultVariants
          : variants
      }
      viewport={
        viewport === 'default'
          ? defaultViewport
          : viewport
      }
      initial={initial}
      whileInView={whileInView}
      style={style}
    >
      {children}
    </motion.div>
  );
}
