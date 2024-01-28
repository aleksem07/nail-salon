import Logo from '@/components/logo/logo';
import Socials from '@/components/social/social';
import MenuLinks from '@/components/menu-links/menu-links';
import styles from '@/UI/sass/container.module.scss';
import Scroll from './scroll';

const Header = () => {
  console.log('Scroll');

  return (
    <Scroll className='fixed top-0 z-50 w-full'>
      <ul
        className={`grid grid-cols-8 grid-rows-header items-end ${styles.container}`}
      >
        <li className='col-start-1 col-end-7 row-start-3 row-end-4 text-center'>
          <MenuLinks />
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
