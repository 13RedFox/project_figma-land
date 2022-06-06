import video from '../../../assets/images/feature.png';
import { motion } from 'framer-motion';
import { Container } from '../../common';
import { GlobalSvgIcons } from '../../../assets/icons/GlobalSvgIcons';
import styles from './HomeFeature.module.scss';
import { MHomeFeatureCard } from './HomeFeatureCard';

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

const cardAnimation = {
  hidden: {
    y: -100,
    opacity: 0
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 }
  })
};

export const HomeFeature = () => {
  const card = [
    {
      id: '0',
      icon: 'drawing',
      title: 'OpenType features Variable fonts',
      description: 'Slate helps you see how many more days you need to work to reach your financial goal.'
    },
    {
      id: '1',
      icon: 'draw',
      title: 'Design with real data',
      description: 'Slate helps you see how many more days you need to work to reach your financial goal.'
    },
    {
      id: '2',
      icon: 'brush',
      title: 'Fastest way to take action',
      description: 'Slate helps you see how many more days you need to work to reach your financial goal.'
    }
  ];

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.2 }}
      className={styles.feature}>
      <Container className={styles.container}>
        <motion.h2 custom={1} variants={sectionAnimation} className={styles.feature__title}>features</motion.h2>
        <motion.p custom={2} variants={sectionAnimation} className={styles.feature__description}>
          Most calendars are designed for teams. Slate is designed for freelancers
        </motion.p>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.2 }}
          className={styles.feature__wrapper}>
          {[] && card.map((item, idx) => (
            <MHomeFeatureCard
              custom={idx + 1}
              variants={cardAnimation}
              key={item.id}
              card={item}
            />
          ))}
        </motion.div>
        <div className={styles.feature__video}>
          <img src={video} alt='Images' />
          <div className={styles.feature__video_btn}>
            <GlobalSvgIcons id='play' className={styles.feature__video_icon} />
          </div>
        </div>
      </Container>
    </motion.section>
  );
};