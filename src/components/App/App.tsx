import { ToastContainer } from 'react-toastify';

import 'styles/styles.scss';

export const App = () => {
  return (
    <ToastContainer
      hideProgressBar
      pauseOnHover
      closeOnClick
      theme="colored"
    />
  );
};
