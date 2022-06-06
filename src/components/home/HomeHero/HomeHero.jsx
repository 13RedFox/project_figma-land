import heroImage from '../../../assets/images/hero_image.png';
import { Container, MButton } from '../../common';
import { motion } from 'framer-motion';
import styles from './HomeHero.module.scss';

const sectionAnimation = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
};

const sectionImageAnimation = {
  hidden: {
    x: 100,
    opacity: 0
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
};

export const HomeHero = () => {
  return (
    <motion.section
      style={{ overflow: 'hidden' }}
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.5 }}
      className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.hero__content}>
          <motion.h2 custom={1} variants={sectionAnimation} className={styles.hero__content_title}>Fastest way to
            organize
          </motion.h2>
          <motion.p custom={2} variants={sectionAnimation} className={styles.hero__content_description}>
            Most calendars are designed for teams. Slate is designed for freelancers
          </motion.p>
          <MButton custom={3} variants={sectionAnimation} className={styles.hero__content_btn}>try for free</MButton>
        </div>
        <motion.div custom={4} variants={sectionImageAnimation} className={styles.hero__img}>
          <img src={heroImage} alt='HeroImage' />
        </motion.div>
      </Container>
    </motion.section>
  );
};