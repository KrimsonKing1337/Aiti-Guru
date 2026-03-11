import LogoIcon from 'assets/icons/logo.svg';

import { Wrapper, Header, Inputs, RememberMe } from './components';

export const Auth = () => {
  return (
    <Wrapper>
      <LogoIcon />
      <Header />
      <Inputs />
      <RememberMe />
    </Wrapper>
  );
};
