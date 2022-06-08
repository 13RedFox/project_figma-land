import styles from './HomeSubscribe.module.scss';
import { Container } from '../../common';
import subscribeImg from '../../../assets/images/subscribe.png';

export const HomeSubscribe = () => {
  return (
    <section className={styles.subscribe}>
      <Container className={styles.container}>
        <div className={styles.subscribe__image}>
          <img src={subscribeImg} alt='Subscribe' />
        </div>
        <div className={styles.subscribe__content}>
          <span className={styles.subscribe__content_subtitle}>At you fingertips</span>
          <h2 className={styles.subscribe__content_title}>Lightning fast prototyping</h2>
          <form className={styles.subscribe__form}>
            <h3 className={styles.subscribe__form_title}>Subscribe to our Newslatter</h3>
            <p className={styles.subscribe__form_description}>Available exclusivery on Figmaland</p>
            <div className={styles.subscribe__form_wrapper}>
              <input className={styles.subscribe__form_email} type='text' placeholder='Your Email' />
              <input className={styles.subscribe__form_btn} type='submit' value='Subscribe' />
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};