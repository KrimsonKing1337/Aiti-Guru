import type { PropsWithChildren } from 'react';

import classNames from 'classnames';

import CrossIcon from 'assets/icons/cross.svg';

import { Button, Wrapper } from 'components';

import * as styles from './Modal.scss';

export type ModalProps = PropsWithChildren & {
  isActive: boolean;
  closeHandler: () => void;
};

export const Modal = ({ children, isActive, closeHandler } : ModalProps) => {
  const clickOutsideHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    const handler = () => {
      setTimeout(() => {
        closeHandler();
      }, 0);
    };

    document.addEventListener('click', handler, { once: true });
  };

  const closeIconClickHandler = () => {
    closeHandler();
  };

  const wrapperClasNames = classNames({
    [styles.Wrapper]: true,
    [styles.isActive]: isActive,
  });

  return (
    <Wrapper className={wrapperClasNames} wrapperClassName={styles.WrapperWrapper} onClick={clickOutsideHandler}>
      <Button className={styles.CrossIcon} ariaLabel="Закрыть модальное окно" onClick={closeIconClickHandler}>
        <CrossIcon />
      </Button>

      {children}
    </Wrapper>
  );
};
