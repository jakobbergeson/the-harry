import Button from './Button';
import InfoBox from './InfoBox';

import styles from '../styles/Info.module.css';

export default function Info({
  title,
  address,
  addressLink,
  phone,
  info,
}) {

  return (
    <div className={styles.wrapper}>
      <div
        data-coordinates='32.721886992522876,-117.16905855302592'
        data-status-indication-message-data-address='1557 Columbia St, San Diego, CA 92101'
        className={styles.map}
      >
        <a
          aria-label='Get Directions'
          href={addressLink}
          target='_blank'
          rel="noreferrer"

        >
          <img
            src={`https://maps.googleapis.com/maps/api/staticmap?center=32.721886992522876,-117.16905855302592&zoom=15&scale=2&size=330x330&maptype=roadmap&format=png&visual_refresh=true&key=${process.env.GOOGLE_MAP_API_KEY}&markers=scale:2|anchor:bottom|icon:https://i.imgur.com/SAMKiBY.png|32.72177051641377,-117.16718020794819&style=feature:water|element:geometry|color:0xe8e8e8|lightness:17&style=feature:landscape|element:geometry|color:0xf5f5f5|lightness:20&style=feature:road.highway|element:geometry.fill|color:0xcfcfcf|lightness:20&style=feature:road.highway|element:geometry.stroke|color:0xe8e8e8|lightness:29|weight:0.2&style=feature:road.arterial|element:geometry|color:0xffffff|lightness:18&style=feature:road.local|element:geometry|color:0xffffff|lightness:16&style=feature:landscape.man_made|element:geometry.fill|color:0xe9e9e9|lightness:5&style=feature:landscape.man_made|element:geometry.stroke|color:0xf5f5f5|lightness:5|weight:10&style=feature:poi|element:geometry|color:0xf5f5f5|lightness:21&style=feature:poi.park|element:geometry|color:0xefefef|lightness:21&style=feature:all|element:labels.text|visibility:on|color:0x464646|lightness:20&style=feature:all|element:labels.text.stroke|visibility:on|color:0xffffff|lightness:16&style=feature:all|element:labels.text.fill|color:0x464646|lightness:20&style=feature:all|element:labels.icon|visibility:off&style=feature:transit|element:geometry|color:0xf2f2f2|lightness:19&style=feature:administrative|element:geometry.fill|color:0xfefefe|lightness:20&style=feature:administrative|element:geometry.stroke|color:0xfefefe|lightness:17|weight:1.2`} />
        </a>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <address className={styles.address}>
          <a
            href={addressLink}
            target='_blank'
            rel="noreferrer"
          >
            {address}
          </a>
        </address>
        <div className={styles.phone}>
          <a href={`tel:${phone}`}>
            {phone}
          </a>
        </div>
        <div className={styles.buttons}>
          <Button to='/'>ORDER ONLINE</Button>
          <Button to='/'>MAKE RESERVATIONS</Button>
          <Button to='/'>GROUP DINING</Button>
        </div>
        {
          info.map((obj, i) => {
            return (
              <InfoBox
                key={i}
                obj={obj}
                title={obj.title}
              />
            );
          })
        }
      </div>
    </div>
  );
}
