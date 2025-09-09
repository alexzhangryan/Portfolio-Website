import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import{
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import NotFoundPage from './NotFound.tsx';
import Projects from './Projects.tsx';
import Skills from './Skills.tsx'
import Experience from './Experience.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/projects',
    element: <Projects />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/skills',
    element: <Skills />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/experience',
    element: <Experience />,
    errorElement: <NotFoundPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);