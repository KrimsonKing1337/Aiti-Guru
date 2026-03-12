import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LockIcon from 'assets/icons/lock.svg';
import EyeOffIcon from 'assets/icons/eye-off.svg';
import EyeIcon from 'assets/icons/eye.svg';

import { loginActions, loginSelectors } from 'store/login';

import { Input } from '../Input';

export const InputPassword = () => {
  const dispatch = useDispatch();

  const value = useSelector(loginSelectors.password);

  const [showPassword, setShowPassword] = useState(false);

  const setValue = (value: string) => {
    dispatch(loginActions.setPassword(value));
  };

  const actionIconClickHandler = () => {
    setShowPassword(!showPassword);
  };

  const type = showPassword ? 'text' : 'password';
  const ActionIcon = showPassword ? EyeIcon : EyeOffIcon;

  return (
    <Input
      value={value}
      setValue={setValue}
      label="Пароль"
      type={type}
      placeholder="Введите пароль"
      Icon={LockIcon}
      ActionIcon={ActionIcon}
      onActionIconClick={actionIconClickHandler}
    />
  );
};
