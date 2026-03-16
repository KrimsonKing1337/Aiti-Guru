import classNames from 'classnames';

import { type ButtonProps, Button } from '../Button';

export type DefaultButtonProps = ButtonProps;

import * as styles from './DefaultButton.scss';

export const DefaultButton = (props: DefaultButtonProps) => {
  const { className = '' } = props;

  const buttonClassNames = classNames({
    [styles.Button]: true,
    [className]: !!className,
  });

  return (
    <Button {...props} className={buttonClassNames} />
  );
};
