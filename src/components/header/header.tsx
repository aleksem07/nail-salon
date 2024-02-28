'use client';
import Logo from '@/components/logo/logo';
import Socials from '@/components/social/social';
import MenuLinks from '@/components/menu-links/menu-links';
import styles from './styles.module.scss';
import Scroll from './scroll';
import BurgerMenu from '@/components/burger/burger';
import { Squash as Hamburger } from 'hamburger-react';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isOpenBurger, setOpenBurger] = useState(false);

  const [isSizeDesktop, setSizeDesktop] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 1024) {
      setSizeDesktop(true);
      setOpenBurger(false);
    } else {
      setSizeDesktop(false);
    }
  };

  const handleScroll = () => {
    setOpenBurger(false);
  };

  useEffect(() => {
    console.log('resize');
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Scroll className='fixed top-0 z-50 w-full'>
      <ul
        className={`grid grid-cols-8 grid-rows-header items-center pb-1 ${styles.container}`}
      >
        <li
          className='col-start-1 col-end-3 row-start-2 row-end-4 self-end text-center laptop:h-9 laptop:w-9
        '
        >
          {isSizeDesktop ? (
            <MenuLinks />
          ) : (
            <>
              <BurgerMenu isOpen={isOpenBurger} />
              <Hamburger
                toggled={isOpenBurger}
                toggle={setOpenBurger}
                size={24}
              />
            </>
          )}
        </li>
        <li className='col-start-1 col-end-9 row-start-1 row-end-2 self-start text-center'>
          <Logo />
        </li>
        <li className='col-start-4 col-end-6 row-start-2 row-end-3 text-center text-xs uppercase'>
          Belgorod
        </li>
        <li className='col-start-7 col-end-9 row-start-3 row-end-4'>
          <Socials />
        </li>
      </ul>
    </Scroll>
  );
};

export default Header;
