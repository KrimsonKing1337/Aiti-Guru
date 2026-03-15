import classNames from 'classnames';

import * as styles from './Loader.scss';

export type LoaderProps = {
  className?: string;
};

export const Loader = ({ className = '' }: LoaderProps) => {
  const wrapperClassNames = classNames({
    [styles.Loader]: true,
    [className]: !!className,
  });
  
  return (
    <div className={wrapperClassNames} />
  );
};
