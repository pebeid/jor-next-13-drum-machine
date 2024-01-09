'use client';
import React, { useContext } from 'react';
import { Volume2, VolumeX } from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';
import MaxWidthWrapper from '../MaxWidthWrapper';
import styles from './Header.module.css';
import VolumeContextProvider from '../VolumeEnabled/VolumeEnabled';

function Header() {
  const id = React.useId();

  // TODO: Global state?
  const volumeState = useContext(VolumeContextProvider);
  console.log(volumeState);
  const soundEnabled = volumeState.volumeEnabled;

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper
        className={styles.innerWrapper}
      >
        <a href="/">Kool Website</a>

        <button
          onClick={() => {
            // TODO: flip `soundEnabled`
            // setVolumeState({volumeEnabled: !volumeEnabled});
          }}
        >
          {soundEnabled ? (
            <Volume2 />
          ) : (
            <VolumeX />
          )}
          <VisuallyHidden>
            {soundEnabled
              ? 'Disable sound effects'
              : 'Enable sound effects'}
          </VisuallyHidden>
        </button>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
