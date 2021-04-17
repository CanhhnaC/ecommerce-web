import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import cls from 'classnames';
import type { SizeType } from 'src/types/components';
import { LoadingIcon } from '../LoadingIcon/LoadingIcon';
import styles from './Button.module.scss';

type ButtonVariants = 'default' | 'primary' | 'gray' | 'link';

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  variant?: ButtonVariants;
  prefixCls?: string;
  loading?: boolean;
  size?: SizeType;
  icon?: React.ReactNode;
}

export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;

export type NativeButtonProps = {
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

export const Button: React.FC<ButtonProps> = forwardRef((props, ref) => {
  const {
    loading = false,
    variant = 'default',
    children,
    prefixCls: customizePrefixCls,
    size: customizeSize,
    icon,
    ...rest
  } = props;

  const buttonRef = (ref as any) || React.createRef<HTMLElement>();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    const { onClick } = props;
    if (loading) {
      return;
    }
    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
  };

  const prefixCls = 'btn' ?? customizePrefixCls;

  // large => lg
  // small => sm
  let sizeCls = '';
  switch (customizeSize) {
    case 'large':
      sizeCls = 'lg';
      break;
    case 'small':
      sizeCls = 'sm';
      break;
    default:
      break;
  }

  const classes = cls(styles[prefixCls], {
    [styles[`${prefixCls}-${variant}`]]: variant,
    [styles[`${prefixCls}-${sizeCls}`]]: sizeCls,
    [styles[`${prefixCls}-loading`]]: loading,
  });

  const iconNode = icon && !loading ? icon : <LoadingIcon prefixCls={prefixCls} loading={loading} />;

  return (
    <button ref={buttonRef} className={classes} onClick={handleClick} {...rest}>
      {iconNode}
      {children}
    </button>
  );
});
