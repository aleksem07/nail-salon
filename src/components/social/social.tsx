import { SOCIALS } from '@/common/socials';
import Link from 'next/link';

const Socials = () => {
  return (
    <ul className='flex justify-end gap-1'>
      {SOCIALS.map(({ Name, href }, index) => {
        return (
          <li key={`${href} ${index}`}>
            <Link target='_blank' rel='stylesheet' href={href}>
              <Name sx={{ color: '#fff' }} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
