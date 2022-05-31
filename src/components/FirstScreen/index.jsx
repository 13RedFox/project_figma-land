import { Container } from '../Container';
import { Button } from '../Button/Button';
import styles from './FirstScreen.module.scss';

export const FirstScreen = () => {
  return (
    <div className={styles.firstScreen}>
      {/*<img src={bg} alt='FirstScreen' className={styles.firstScreen__bg} />*/}
      <div className={styles.firstScreen__bg} />
      <Container className={styles.container}>
        <div className={styles.firstScreen__content}>
          <h1 className={styles.firstScreen__content_title}>The best products start with Figma</h1>
          <p className={styles.firstScreen__content_description}>
            Most calendars are designed for teams. Slate is designed for freelancers
          </p>
        </div>
        <Button>try for free</Button>
      </Container>
    </div>
  );
};