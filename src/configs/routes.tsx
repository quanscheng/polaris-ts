import { Main } from '../layouts/Main'
import { ErrorPage } from '../pages/error/ErrorPage'
import { HomePage } from '../pages/home/HomePage'

export const routes = [
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
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
