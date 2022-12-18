import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import en from '@shopify/polaris/locales/en.json'; // DropZone里面的文字依赖
import { Provider } from 'jotai';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import { routes } from './configs/routes';
import { PolarisLink } from './utils/polarisLink';

const router = createBrowserRouter(routes)

function App() {
  return (
    <Provider>
      <AppProvider i18n={en} linkComponent={PolarisLink}>
        <RouterProvider router={router} />
      </AppProvider>
    </Provider>
  )
}

export default App
