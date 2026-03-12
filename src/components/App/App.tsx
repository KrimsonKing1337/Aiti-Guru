import { useEffect } from 'react';

import { useNavigate } from 'react-router';

import { ToastContainer } from 'react-toastify';

import 'styles/styles.scss';

export const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, []);

  return (
    <ToastContainer
      hideProgressBar
      pauseOnHover
      closeOnClick
      theme="colored"
    />
  );
};
