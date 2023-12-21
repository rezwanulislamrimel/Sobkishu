import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='flex'>
            <div className='w-[20%] bg-slate-200'>
            <ul>
                <li>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li>
                    <Link to='/dashboard/profile'>Profile</Link>
                </li>
                <li>
                    <Link to='/dashboard/editProfile'>EditProfile</Link>
                </li>
           </ul>
            </div> 
          
            <div className='w-[80%] font-bold text-lg uppercase flex justify-center items-center text-purple-950'>
            <Outlet></Outlet>
              </div>
        
        </div>
    );
};

export default DashboardLayout;