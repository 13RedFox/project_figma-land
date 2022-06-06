import { Container, MButton } from '../../common';
import { motion } from 'framer-motion';
import styles from './HomeHeader.module.scss';

const sectionAnimation = {
  hidden: {
    y: -100,
    opacity: 0
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
};

export const HomeHeader = () => {
  return (
    <motion.header
      initial='hidden'
      whileInView='visible'
      className={styles.header}>
      <div className={styles.header__bg} />
      <Container className={styles.container}>
        <div className={styles.header__content}>
          <motion.h1 custom={1} variants={sectionAnimation} className={styles.header__content_title}>The best products
            start with Figma
          </motion.h1>
          <motion.p custom={2} variants={sectionAnimation} className={styles.header__content_description}>
            Most calendars are designed for teams. Slate is designed for freelancers
          </motion.p>
        </div>
        <MButton custom={3} variants={sectionAnimation}>try for free</MButton>
      </Container>
    </motion.header>
  );
};