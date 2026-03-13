import { Provider } from 'react-redux';

import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import { store } from 'store';

import { Main, Auth, Goods } from 'pages';

import { App } from 'components';

const root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <>
        <App />

        <Routes>
          <Route element={<Main />}>
            <Route path="/" element={<div />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/goods" element={<Goods />} />
          </Route>
        </Routes>
      </>
    </BrowserRouter>
  </Provider>,
);
