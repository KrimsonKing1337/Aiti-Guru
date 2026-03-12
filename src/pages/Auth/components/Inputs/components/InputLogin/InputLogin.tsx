import { useDispatch, useSelector } from 'react-redux';

import UserIcon from 'assets/icons/user.svg';
import CrossIcon from 'assets/icons/cross.svg';

import { loginActions, loginSelectors } from 'store/login';

import { Input } from '../Input';

export const InputLogin = () => {
  const dispatch = useDispatch();

  const value = useSelector(loginSelectors.login);

  const setValue = (value: string) => {
    dispatch(loginActions.setLogin(value));
  };

  const actionIconClickHandler = () => {
    dispatch(loginActions.setLogin(''));
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
