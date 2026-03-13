export const getRememberMe = () => {
  return localStorage.getItem('rememberMe') === 'true';
};

export const setRememberMe = (value: boolean) => {
  localStorage.setItem('rememberMe', value.toString());
};
