import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import { Provider } from 'react-redux';

import { store } from 'store';

import { Auth, Goods } from 'pages';

import { App } from 'components';

const root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <>
        <App />

        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/goods" element={<Goods />} />
        </Routes>
      </>
    </BrowserRouter>
  </Provider>,
);
