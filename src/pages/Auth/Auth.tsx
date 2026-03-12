import LogoIcon from 'assets/icons/logo.svg';

import { Wrapper } from 'components';

import { Header, Dashboard } from './components';

export const Auth = () => {
  return (
    <Wrapper>
      <LogoIcon />
      <Header />
      <Dashboard />
    </Wrapper>
  );
};
