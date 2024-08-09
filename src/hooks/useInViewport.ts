import { useState, useEffect } from 'react';

export const useInViewport = (
  ref: React.RefObject<HTMLElement>,
  options?: IntersectionObserverInit,
) => {
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInViewport(entry.isIntersecting);
    }, options);

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options, ref, inViewport]);

  return inViewport;
};
