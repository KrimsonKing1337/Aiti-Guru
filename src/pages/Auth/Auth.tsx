import { useEffect } from 'react';

import { useNavigate } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';

import LogoIcon from 'assets/icons/logo.svg';

import { loginActions, loginSelectors } from 'store/login';

import { Wrapper, Header, Dashboard } from './components';

export const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthed = useSelector(loginSelectors.isAuthed);
  const isFetchSuccess = useSelector(loginSelectors.isFetchSuccess);

  useEffect(() => {
    dispatch(loginActions.authMeFetch());
  }, []);

  useEffect(() => {
    if (isAuthed && isFetchSuccess) {
      navigate('/goods');
    }
  }, [isAuthed, isFetchSuccess]);

  return (
    <Wrapper>
      <LogoIcon />
      <Header />
      <Dashboard />
    </Wrapper>
  );
};
