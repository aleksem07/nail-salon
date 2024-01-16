import { SOCIALS } from '@/common/socials';
import Link from 'next/link';

const Socials = () => {
  return (
    <ul className='flex justify-end gap-1'>
      {SOCIALS.map(({ Name, href }) => {
        return (
          <li key={href}>
            <Link rel='stylesheet' href=''>
              <Name sx={{ color: '#000000' }} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
