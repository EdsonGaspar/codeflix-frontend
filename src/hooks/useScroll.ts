import { useEffect, useState } from 'react';

export const UseScroll = () => {
  const [isScroled, setIsScroled] = useState(false);

  useEffect(() => {
    const handScrolell = () => {
      setIsScroled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handScrolell);
    return () => window.removeEventListener('scroll', handScrolell);
  });
  return isScroled;
};
