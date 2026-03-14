import classNames from 'classnames';

import { Title as DefaultTitle } from './components';

import * as styles from './Cell.scss';

export type CellProps = {
  style?: React.CSSProperties;
  className?: string;
  extraWrapperClassName?: string;
  Left?: React.ReactNode;
  Title: React.ReactNode;
  titleIsThin?: boolean;
};

export const Cell = ({
  style = {},
  className = '',
  extraWrapperClassName = '',
  Left = null,
  Title,
  titleIsThin = false,
}: CellProps) => {
  const wrapperClassNames = classNames({
    [styles.Wrapper]: true,
    [className]: !!className,
  });

  const extraWrapperClassNames = classNames({
    [styles.ExtraWrapper]: true,
    [extraWrapperClassName]: !!extraWrapperClassName,
  });

  return (
    <div style={style} className={wrapperClassNames}>
      {Left}

      <div className={extraWrapperClassNames}>
        {typeof Title === 'string' && (
          <DefaultTitle isThin={titleIsThin}>
            {Title}
          </DefaultTitle>
        )}

        {typeof Title !== 'string' && (
          <>
            {Title}
          </>
        )}
      </div>
    </div>
  );
};
