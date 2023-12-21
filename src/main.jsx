import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider
} from "react-router-dom";
import myCreateRoute from './Components/Route/Route';
import './index.css';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Header></Header>,
  
//     children: [
//       {
//         path: '/',
//         element: <Home></Home>
        
//       },
    
//       {
//         path: '/products',
//         element:<Products></Products>
//       }
//     ]
//   },

// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={myCreateRoute} />
  </React.StrictMode>,
)
