import Logo from '@/components/logo/logo';
import Socials from '@/components/social/social';
import MenuLinks from '@/components/menu-links/menu-links';

const Header = () => {
  return (
    <header className='fixed top-0 w-full max-w-7xl px-4 py-2'>
      <ul className='grid grid-cols-8 grid-rows-header items-end'>
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
    </header>
  );
};

export default Header;
