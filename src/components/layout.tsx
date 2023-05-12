/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';
import { Fragment, ReactNode, useState } from 'react';
import Sticky from 'react-stickynode';
import { Header } from './header';

export const Layout = ({ children }: { children: ReactNode }) => {
  const [colorMode, setColorMode] = useColorMode();
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const newColorMode = colorMode === 'light' ? 'dark' : 'light';

  const handleStateChange = (status: any) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  const handleColorMode = () => {
    setColorMode(newColorMode);
  };

  return (
    <Fragment>
      <Header
        className={`${isSticky ? 'sticky' : 'unSticky'}`}
        colorMode={colorMode}
        onColorMode={handleColorMode}
      />
      <main
        sx={{
          variant: 'layout.main',
        }}
      >
        {children}
      </main>
    </Fragment>
  );
};
