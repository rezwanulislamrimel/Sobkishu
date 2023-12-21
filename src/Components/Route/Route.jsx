import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../DashboardLayowt/DashboardLayout';
import EditProfile from '../EditProfile/EditProfile';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Product from '../Product/Product';
import Products from '../Products/Products';
import Profile from '../Profile/Profile';
import Dashboard from './../Dashboard/Dashboard';

const myCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <Header></Header>,
       
        children: [
            {
                path: '/',
                element: <Home></Home>,
              
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader :()=>fetch(`https://dummyjson.com/products`)
                
            },
            {
                path: '/products/:id',
                element: <Product></Product>
            },
            {
                path: '/dashboard',
                element: <DashboardLayout></DashboardLayout>,
                children: [
                    {
                        path: '/dashboard',
                        element:<Dashboard></Dashboard>
                    },
                    {
                        path: '/dashboard/profile',
                        element: <Profile></Profile>
                    },
                    {
                        path: '/dashboard/editProfile',
                        element: <EditProfile></EditProfile>
                    }
                ]
            }
        ]
    }
])

export default myCreateRoute;