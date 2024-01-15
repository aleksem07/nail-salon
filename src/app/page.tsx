import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Image
        src='/images/next.svg'
        alt='Next.js Logo'
        width={180}
        height={37}
        priority
      />
    </>
  );
}
