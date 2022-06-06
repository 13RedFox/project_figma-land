import styles from '../HomeFeature.module.scss';
import { GlobalSvgIcons } from '../../../../assets/icons/GlobalSvgIcons';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';

export const HomeFeatureCard = forwardRef(({ card }, ref) => {
  return (
    <div ref={ref} className={styles.card}>
      <GlobalSvgIcons id={card.icon} className={styles.card__icon} />
      <h2 className={styles.card__title}>{card.title}</h2>
      <p className={styles.card__description}>{card.description}</p>
    </div>
  );
});

export const MHomeFeatureCard = motion(HomeFeatureCard);