import { Container } from '../Container';

import styles from './Header.module.scss';
import { GlobalSvgIcons } from '../../assets/icons/GlobalSvgIcons';

export const Header = () => {
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
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <ul className={styles.header__list}>
            {[] && menu.map((item) => (
              <li key={item.id} className={styles.header__list_item}>
                <a href={`#${item.value}`} className={styles.header__list_link}>{item.value}</a>
              </li>
            ))}
          </ul>
          <a href='/' className={styles.header__logo}>
            <GlobalSvgIcons id='header_logo' />
          </a>

        </div>
        <ul className={styles.header__social}>
          {[] && social.map((item) => (
            <li key={item.id} className={styles.header__social_item}>
              <a href='#' className={styles.header__social_link}>
                <GlobalSvgIcons id={item.icon} className={styles.header__social_icon} />
              </a>
            </li>
          ))}
        </ul>
        <GlobalSvgIcons id='menu' className={styles.header__menu} />
      </Container>
    </header>
  );
};