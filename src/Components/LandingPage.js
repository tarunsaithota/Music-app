import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './Body';
import Login from './Login';

const LandingPage = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Body />
        }
    ])

  return (
    <>
        <RouterProvider router={appRouter} />
    </>
  )
}

export default React.memo(LandingPage);