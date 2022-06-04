import heroImage from '../../../assets/images/hero_image.png';
import { Button, Container } from '../../common';
import styles from './HomeHero.module.scss';

export const HomeHero = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.hero__content}>
          <h2 className={styles.hero__content_title}>Fastest way to organize</h2>
          <p className={styles.hero__content_description}>
            Most calendars are designed for teams. Slate is designed for freelancers
          </p>
          <Button className={styles.hero__content_btn}>try for free</Button>
        </div>
        <div className={styles.hero__img}>
          <img src={heroImage} alt='HeroImage' />
        </div>
      </Container>
    </section>
  );
};