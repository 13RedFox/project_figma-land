import classNames from 'classnames';
import styles from './Button.module.scss';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';

export const Button = forwardRef(({ children, className }, ref) => {
  return (
    <button ref={ref} className={classNames(styles.button, className)}>{children}</button>
  );
});

export const MButton = motion(Button);