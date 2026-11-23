import { useState, useEffect } from 'react';

export const useInViewport = (
  ref: React.RefObject<HTMLElement>,
  options?: IntersectionObserverInit,
) => {
  const [inViewport, setInViewport] = useState(false);

  // Depend on primitive values so callers can pass an inline options object
  // without recreating the observer on every render.
  const root = options?.root;
  const rootMargin = options?.rootMargin;
  // Arrays are compared by value via a string key, then rebuilt below.
  const thresholdKey = [options?.threshold ?? []].flat().join(',');

  useEffect(() => {
    const currentRef = ref.current;

    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInViewport(entry.isIntersecting);
      },
      {
        root,
        rootMargin,
        threshold: thresholdKey ? thresholdKey.split(',').map(Number) : 0,
      },
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [ref, root, rootMargin, thresholdKey]);

  return inViewport;
};
