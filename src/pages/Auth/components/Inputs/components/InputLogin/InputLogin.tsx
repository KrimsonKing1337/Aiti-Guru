import { useDispatch, useSelector } from 'react-redux';

import UserIcon from 'assets/icons/user.svg';
import CrossIcon from 'assets/icons/cross.svg';

import { authActions, authSelectors } from 'store/auth';

import { Input } from '../Input';

export const InputLogin = () => {
  const dispatch = useDispatch();

  const value = useSelector(authSelectors.login);

  const setValue = (value: string) => {
    dispatch(authActions.setLogin(value));
  };

  const actionIconClickHandler = () => {
    dispatch(authActions.setLogin(''));
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
