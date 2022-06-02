import { GlobalSvgIcons } from '../../assets/icons/GlobalSvgIcons';
import { Container } from '../common';
import styles from './TheNavigation.module.scss';

export const TheNavigation = () => {
  const menu = [
    { id: '1', value: 'home' },
    { id: '2', value: 'product' },
    { id: '3', value: 'pricing' },
    { id: '4', value: 'about' },
    { id: '5', value: 'contact' }
  ];

  const social = [
    { id: '1', icon: 'twitter' },
    { id: '2', icon: 'facebook' },
    { id: '3', icon: 'linkedin' }
  ];
  return (
    <nav className={styles.navigation}>
      <Container>
        <div className={styles.wrapper}>
          <ul className={styles.navigation__list}>
            {[] && menu.map((item) => (
              <li key={item.id} className={styles.navigation__list_item}>
                <a href={`#${item.value}`} className={styles.navigation__list_link}>{item.value}</a>
              </li>
            ))}
          </ul>
          <a href='/' className={styles.navigation__logo}>
            <GlobalSvgIcons id='header_logo' />
          </a>

        </div>
        <ul className={styles.navigation__social}>
          {[] && social.map((item) => (
            <li key={item.id} className={styles.navigation__social_item}>
              <a href='/#' className={styles.navigation__social_link}>
                <GlobalSvgIcons id={item.icon} className={styles.navigation__social_icon} />
              </a>
            </li>
          ))}
        </ul>
        <GlobalSvgIcons id='menu' className={styles.navigation__menu} />
      </Container>
    </nav>
  );
};