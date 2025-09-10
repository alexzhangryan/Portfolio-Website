import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './NotFound';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Message from './Message';
import NavBar from './NavBar';

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <NotFoundPage />,
    },
    {
      path: '/projects',
      element: <Projects />,
      errorElement: <NotFoundPage />,
    },
    {
      path: '/skills',
      element: <Skills />,
      errorElement: <NotFoundPage />,
    },
    {
      path: '/experience',
      element: <Experience />,
      errorElement: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

function App(){
    return(
        <>  
            <div>
                <NavBar />
                <Message />
            </div>
        </>
    );
};

export default AppRouter;