import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className='pt-5 min-h-screen bg-base-200'>
      <header className='mx-auto w-11/12'>
        <Navbar></Navbar>
      </header>

      <div className='flex flex-col justify-center min-h-screen'> {/*//* This div is used only to center the form  */}
        <main className='mx-auto w-11/12'> 
        <Outlet></Outlet>
      </main>
      </div>
    </div>
  );
};

export default AuthLayout;