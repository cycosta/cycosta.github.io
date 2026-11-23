import { useSyncExternalStore } from 'react';

import { sizes } from '../tokens/breakpoints';

// Same boundaries as before: mobile ≤ sm, tablet ≤ md, large desktop > lg.
const queries = {
  isMobile: `(max-width: ${sizes.sm}px)`,
  isTablet: `(min-width: ${sizes.sm + 1}px) and (max-width: ${sizes.md}px)`,
  isDesktop: `(min-width: ${sizes.md + 1}px)`,
  isLargeDesktop: `(min-width: ${sizes.lg + 1}px)`,
};

type Device = Record<keyof typeof queries, boolean>;

const mediaQueryLists = Object.entries(queries).map(
  ([key, query]) => [key, window.matchMedia(query)] as const,
);

let snapshot: Device | undefined;

const getSnapshot = (): Device => {
  const next = Object.fromEntries(
    mediaQueryLists.map(([key, mql]) => [key, mql.matches]),
  ) as Device;

  // Return a stable object while nothing changed so React can bail out.
  if (
    !snapshot ||
    (Object.keys(next) as (keyof Device)[]).some(
      (key) => next[key] !== snapshot?.[key],
    )
  ) {
    snapshot = next;
  }

  return snapshot;
};

const subscribe = (onChange: () => void) => {
  mediaQueryLists.forEach(([, mql]) =>
    mql.addEventListener('change', onChange),
  );

  return () =>
    mediaQueryLists.forEach(([, mql]) =>
      mql.removeEventListener('change', onChange),
    );
};

/**
 * Reports the current breakpoint. Backed by matchMedia, so components only
 * re-render when a breakpoint is crossed, not on every resize event.
 */
export const useDevice = () => useSyncExternalStore(subscribe, getSnapshot);
