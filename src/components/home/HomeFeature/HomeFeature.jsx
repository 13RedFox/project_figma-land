import { Container } from '../../common';
import styles from './HomeFeature.module.scss';
import { HomeFeatureCard } from './HomeFeatureCard';

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
    <div className={styles.feature}>
      <Container className={styles.container}>
        <h2 className={styles.feature__title}>features</h2>
        <p className={styles.feature__description}>
          Most calendars are designed for teams. Slate is designed for freelancers
        </p>
        <div className={styles.feature__wrapper}>
          {[] && card.map((item) => (
            <HomeFeatureCard key={item.id} card={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};