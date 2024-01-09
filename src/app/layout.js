"use client"
import React, { useState } from 'react';

import Header from '../components/Header';
// import VolumeContextProvider from '../components/VolumeEnabled/VolumeEnabled';
import VolumeContext from '../components/VolumeEnabled/VolumeContext';

import './styles.css';

function RootLayout({ children }) {
  // const volumeState = useContext(VolumeContextProvider);
  // console.log(volumeState);
  const [volumeState] = useState({volumeEnabled: true});

    return (
    <html lang="en">
      <body>
        <VolumeContext.Provider value={{volumeState}}>
          <Header />
          {children}
        </VolumeContext.Provider>
        <footer>
          <img src="/ie-badge.gif" width={100} />
          <span>Thanks for visiting!</span>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
