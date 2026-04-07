export const getStorage = () => {
  return localStorage.getItem('rememberMe') === 'true' ? localStorage : sessionStorage;
};
