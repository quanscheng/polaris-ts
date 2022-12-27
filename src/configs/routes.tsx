import { Main } from '@/layouts/Main'
import { ErrorPage } from '@/pages/error/ErrorPage'
import { RootErrorPage } from '@/pages/error/RootErrorPage'
import { Example } from '@/pages/example/Example'
import { HomePage } from '@/pages/home/HomePage'
import { RedirectPage } from '@/pages/redirect/RedirectPage'

export const routes = [
  {
    path: '/',
    element: <Main />,
    errorElement: <RootErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: '/example',
            element: <Example />,
          },
        ],
      },
    ],
  },
  // {
  //   path: '/signin',
  //   element: <SignIn />,
  // },
  {
    path: '/redirect',
    element: <RedirectPage />,
  },
]
