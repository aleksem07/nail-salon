'use client';
import { useState, useEffect } from 'react';

const Scroll = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = (): void => {
    setIsScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stickyHeaderStyle: React.CSSProperties = {
    backgroundColor: isScrolled ? '#cc9999' : 'rgba(36, 36, 36, 0.9)',
    transition: 'all 0.3s ease-out',
  };

  return (
    <header style={stickyHeaderStyle} className={className}>
      {children}
    </header>
  );
};

export default Scroll;
