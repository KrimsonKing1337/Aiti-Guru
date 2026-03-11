import { useState } from 'react';

import LockIcon from 'assets/icons/lock.svg';
import EyeOffIcon from 'assets/icons/eye-off.svg';
import EyeIcon from 'assets/icons/eye.svg';

import { Input } from '../Input';

export const InputPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const actionIconClickHandler = () => {
    setShowPassword(!showPassword);
  };

  const type = showPassword ? 'text' : 'password';
  const ActionIcon = showPassword ? EyeIcon : EyeOffIcon;

  return (
    <Input
      label="Пароль"
      type={type}
      placeholder="Введите пароль"
      Icon={LockIcon}
      ActionIcon={ActionIcon}
      onActionIconClick={actionIconClickHandler}
    />
  );
};
