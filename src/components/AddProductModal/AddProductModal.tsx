import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';

import classNames from 'classnames';

import CrossIcon from 'assets/icons/cross.svg';

import { goodsActions } from 'store/goods';

import { Wrapper, Input } from 'components';

import * as styles from './AddProductModal.scss';

export type AddProductModalProps = {
  isActive?: boolean;
  onButtonClick?: () => void;
};

export const AddProductModal = ({
  isActive = false, onButtonClick = () => {},
}: AddProductModalProps) => {
  const dispatch = useDispatch();

  const [nameInput, setNameInput] = useState('');
  const [priceInput, setPriceInput] = useState('');
  const [vendorInput, setVendorInput] = useState('');
  const [skuInput, setSkuInput] = useState('');

  const onCloseIconClick = () => {
    dispatch(goodsActions.setIsModalActive(false));
  };

  const addButtonClickHandler = () => {
    if (!nameInput
      || !priceInput
      || !vendorInput
      || !skuInput
      || !skuInput) {
      toast.error('Все поля обязательны для заполнения');

      return;
    }

    onButtonClick();
  };

  const wrapperClasNames = classNames({
    [styles.Wrapper]: true,
    [styles.isActive]: isActive,
  });

  return (
    <Wrapper className={wrapperClasNames} wrapperClassName={styles.WrapperWrapper}>
      <div className={styles.CrossIcon} onClick={onCloseIconClick}>
        <CrossIcon />
      </div>

      <div className={styles.Title}>
        Добавить продукт
      </div>

      <div className={styles.InputsWrapper}>
        <Input
          label="Наименование"
          placeholder="Наименование"
          wrapperClassName={styles.InputWrapper}
          inputWrapperClassName={styles.InputInputWrapper}
          labelClassName={styles.Label}
          value={nameInput}
          setValue={setNameInput}
        />

        <Input
          label="Цена"
          placeholder="Цена"
          wrapperClassName={styles.InputWrapper}
          inputWrapperClassName={styles.InputInputWrapper}
          labelClassName={styles.Label}
          value={priceInput}
          setValue={setPriceInput}
        />

        <Input
          label="Вендор"
          placeholder="Вендор"
          wrapperClassName={styles.InputWrapper}
          inputWrapperClassName={styles.InputInputWrapper}
          labelClassName={styles.Label}
          value={vendorInput}
          setValue={setVendorInput}
        />

        <Input
          label="Артикул"
          placeholder="Артикул"
          wrapperClassName={styles.InputWrapper}
          inputWrapperClassName={styles.InputInputWrapper}
          labelClassName={styles.Label}
          value={skuInput}
          setValue={setSkuInput}
        />
      </div>

      <div className={styles.AddButton} onClick={addButtonClickHandler}>
        Добавить
      </div>
    </Wrapper>
  );
};
