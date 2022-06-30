import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import styles from './Card.module.css';

export const Card = ({
  children,
  className
}: PropsWithChildren<{ className?: string }>) => {
  return <div className={clsx(styles.card, className)}>{children}</div>;
};
