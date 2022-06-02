import { Button, Container } from '../../common';
import styles from './HomeHeader.module.scss';

export const HomeHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__bg} />
      <Container className={styles.container}>
        <div className={styles.header__content}>
          <h1 className={styles.header__content_title}>The best products start with Figma</h1>
          <p className={styles.header__content_description}>
            Most calendars are designed for teams. Slate is designed for freelancers
          </p>
        </div>
        <Button>try for free</Button>
      </Container>
    </header>
  );
};