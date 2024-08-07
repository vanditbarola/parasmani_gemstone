"use client";

import React from 'react';
import Navbar from '@/components/frontend/Navbar';
import Footer from '@/components/frontend/Footer';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <Navbar />
      {children}
      <Footer />
    </Provider>
  );
};

export default App;
