import { addFont } from '@/app/layout';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className={`uppercase ${addFont.className}`}>
      <Link href={'/'} className='text-2xl'>
        Beauty salon title
      </Link>
    </div>
  );
};

export default Logo;
