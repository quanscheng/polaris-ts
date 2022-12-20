import { Main } from '@/layouts/Main'
import { ErrorPage } from '@/pages/error/ErrorPage'
import { Page404 } from '@/pages/error/Page404'
import { HomePage } from '@/pages/home/HomePage'

export const routes = [
  {
    path: '/',
    element: <Main />,
    errorElement: <Page404 />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          // {
          //   path: '/media-outlets',
          //   element: <Outlets />,
          // },
        ],
      },
    ],
  },
  // {
  //   path: '/signin',
  //   element: <SignIn />,
  // },
  // {
  //   path: '/redirect',
  //   element: <Redirect />,
  // },
]
