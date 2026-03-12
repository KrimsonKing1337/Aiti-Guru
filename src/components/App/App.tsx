import { ToastContainer } from 'react-toastify';

import { Auth } from 'components';

import 'styles/styles.scss';

export const App = () => {
  return (
    <div>
      <Auth />

      <ToastContainer
        hideProgressBar
        pauseOnHover
        closeOnClick
        theme="colored"
      />
    </div>
  );
};
