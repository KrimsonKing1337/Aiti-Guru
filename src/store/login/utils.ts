export type SetTokensArgs = {
  accessToken: string;
  refreshToken: string;
  storageKey: 'session' | 'local';
};

export const setTokens = ({ accessToken, refreshToken, storageKey }: SetTokensArgs) => {
  const storage = storageKey === 'session' ? sessionStorage : localStorage;

  storage.setItem('token', accessToken);
  storage.setItem('refreshToken', refreshToken);
};
