import { EB_Garamond } from 'next/font/google';
import Link from 'next/link';

const addFont = EB_Garamond({subsets: ['latin']});

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
