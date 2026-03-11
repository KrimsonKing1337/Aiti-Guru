import { useState } from 'react';

import UserIcon from 'assets/icons/user.svg';
import CrossIcon from 'assets/icons/cross.svg';

import { Input } from '../Input';

export const InputLogin = () => {
  const [value, setValue] = useState('');

  const actionIconClickHandler = () => {
    setValue('');
  };

  return (
    <Input
      value={value}
      setValue={setValue}
      label="Логин"
      placeholder="Введите логин"
      Icon={UserIcon}
      ActionIcon={CrossIcon}
      onActionIconClick={actionIconClickHandler}
    />
  );
};
