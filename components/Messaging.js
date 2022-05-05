import Box from "./animations/Box";
import Image from "next/image";
import style from '@/styles/Messaging.module.css';
import { findByTitle } from "@testing-library/react";

export default function Messaging({
  title,
  paragraph,
  styleWrap,
  styleMc,
  styleP,
  ...props
}) {
  return (
    <div
      style={styles.wrapper}
    >
      <Box
        style={styles.messagingContent}
      >
        <h2>{title}</h2>
        <p
          style={styles.messagingContentP}
        >
          {paragraph}
        </p>
      </Box>
    </div>
  );
}

const styles = {
  wrapper: {
    maxWidth: '80rem',
    position: 'relative',
    margin: '0 auto',
    padding: '1.5rem 0',
  },
  messagingContent: {
    padding: '2rem',
    backgroundColor: '#f7efe6',
    right: 'auto',
    top: '50%',
    width: 'calc(50% - 1.5rem)',
    zIndex: '2',
  },
  messagingContentP: {
    padding: '1rem 0 0.5rem',
  }
};
