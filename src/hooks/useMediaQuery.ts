import { useCallback, useSyncExternalStore } from 'react';

const getMediaQueryList = (query: string) =>
  typeof window !== 'undefined' && 'matchMedia' in window
    ? window.matchMedia(query)
    : undefined;

/** Whether a CSS media query currently matches; updates when it changes. */
export const useMediaQuery = (query: string) => {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mql = getMediaQueryList(query);
      mql?.addEventListener('change', onChange);

      return () => mql?.removeEventListener('change', onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => getMediaQueryList(query)?.matches ?? false,
  );
};
