import styles from '../HomeFeature.module.scss';
import { GlobalSvgIcons } from '../../../../assets/icons/GlobalSvgIcons';

export const HomeFeatureCard = ({ card }) => {
  return (
    <div className={styles.card}>
      <GlobalSvgIcons id={card.icon} className={styles.card__icon} />
      <h2 className={styles.card__title}>{card.title}</h2>
      <p className={styles.card__description}>{card.description}</p>
    </div>
  );
};