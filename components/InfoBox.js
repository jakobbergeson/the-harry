import styles from '../styles/InfoBox.module.css';

export default function InfoBox({
  title,
  obj,
}) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {
          obj.list.map((listItem, i) => {
            return (
              <li
                key={i}
                className={styles.listItem}
              >
                <strong>{listItem.subTitle}</strong>
                <br />
                <p>{listItem.info}</p>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}
