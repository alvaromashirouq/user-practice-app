import clsx from 'clsx';
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import styles from './Button.module.css';

export const Button: FC<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = (props) => {
  return (
    <button
      type={props.type}
      className={clsx(styles.button)}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
