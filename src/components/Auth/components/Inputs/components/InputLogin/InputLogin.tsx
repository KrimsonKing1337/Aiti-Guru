import UserIcon from 'assets/icons/user.svg';
import CrossIcon from 'assets/icons/cross.svg';

import { Input } from '../Input';

export const InputLogin = () => {
  return (
    <Input
      label="Логин"
      placeholder="Введите логин"
      Icon={UserIcon}
      ActionIcon={CrossIcon}
      onActionIconClick={() => {}}
    />
  );
};
