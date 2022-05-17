import Box from "./animations/Box";
import Image from "next/image";

export default function Messaging({
  title,
  image,
  alt,
  paragraph,
  children,
  styleWrap,
  styleMc,
  styleP,
  ...props
}) {
  return (
    <Box
      style={styleWrap ? styleWrap : styles.wrapper}
    >
      <div
        style={styleMc ? styleMc : styles.messagingContent}
      >
        <h2>{title}</h2>
        <p
          style={styleP ? styleP : styles.messagingContentP}
        >
          {paragraph}
        </p>
        <div
          style={styles.children}
        >
          {children}
        </div>
      </div>
      <div
        style={styles.messagingImage}
      >
        <Image
          src={image}
          alt={alt}
        />
      </div>
    </Box>
  );
}

const styles = {
  wrapper: {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '1.5rem 0',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  },
  messagingContent: {
    padding: '2rem',
    backgroundColor: '#f7efe6',
    height: 'max-content',
    width: 'calc(100% + 1.5rem)',
    zIndex: '2',
    margin: 'auto',
  },
  messagingContentP: {
    padding: '1rem 0 0.5rem',
  },
  messagingImage: {
    marginLeft: '-1.5rem',
  },
  children: {
    paddingTop: '1rem'
  }
};
