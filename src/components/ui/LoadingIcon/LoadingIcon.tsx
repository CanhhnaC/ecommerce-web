import React from 'react';
import { motion, Transition } from 'framer-motion';
import cls from 'classnames';
import styles from './LoadingIcon.module.scss';

export interface LoadingIconProps {
  prefixCls: string;
  loading?: boolean;
}

const spinTransition: Transition = {
  loop: Infinity,
  ease: 'linear',
  duration: 1,
};

export const LoadingIcon: React.FC<LoadingIconProps> = ({ prefixCls, loading }) => {
  const visible = !!loading;

  return (
    <div
      className={cls(styles.container, {
        hidden: !visible,
      })}
    >
      <motion.span className={styles.spin} animate={{ rotate: 360 }} transition={spinTransition} />
    </div>
  );
};
