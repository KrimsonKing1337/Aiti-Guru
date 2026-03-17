import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';

import { goodsActions } from 'store/goods';

import { Modal, Input, DefaultButton, H3 } from 'components';

import * as styles from './AddProductModal.scss';

export type AddProductModalProps = {
  isActive?: boolean;
  onButtonClick?: () => void;
};

export const AddProductModal = ({ isActive = false, onButtonClick = () => {} }: AddProductModalProps) => {
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

  return (
    <Modal isActive={isActive} closeHandler={onCloseIconClick}>
      <H3 className={styles.Title}>
        Добавить продукт
      </H3>

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

      <DefaultButton className={styles.AddButton} ariaLabel="Добавить товар" onClick={addButtonClickHandler}>
        Добавить
      </DefaultButton>
    </Modal>
  );
};
