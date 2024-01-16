import { MENU_LINKS } from '@/common/menu-links';
import Link from 'next/link';

const MenuLinks = () => {
  return (
    <ul className='flex gap-2'>
      {MENU_LINKS.map(({ name, href }) => {
        return (
          <li key={href}>
            <Link href={href}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuLinks;
