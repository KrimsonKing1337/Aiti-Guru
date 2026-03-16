import classNames from 'classnames';

import { Title as DefaultTitle } from './components';

import * as styles from './Cell.scss';

export type CellProps = {
  style?: React.CSSProperties;
  className?: string;
  extraWrapperClassName?: string;
  titleClassName?: string;
  Left?: React.ReactNode;
  Title: React.ReactNode;
  titleIsThin?: boolean;
};

export const Cell = ({
  style = {},
  className = '',
  extraWrapperClassName = '',
  titleClassName = '',
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

  const titleClassNames = classNames({
    [titleClassName]: !!titleClassName,
  });

  return (
    <div style={style} className={wrapperClassNames}>
      {Left}

      <div className={extraWrapperClassNames}>
        {typeof Title === 'string' && (
          <DefaultTitle className={titleClassNames} isThin={titleIsThin}>
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
