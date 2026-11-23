const GA_MEASUREMENT_ID = 'G-DWTP6J7WXM';

/**
 * Loads Google Analytics once the page has finished loading and the browser
 * is idle, so the GA library and gtag.js never compete with first render.
 */
export const loadAnalytics = () => {
  const init = () =>
    import('react-ga4').then(({ default: ReactGA }) =>
      ReactGA.initialize(GA_MEASUREMENT_ID),
    );

  const whenIdle = () =>
    'requestIdleCallback' in window
      ? window.requestIdleCallback(init, { timeout: 5000 })
      : setTimeout(init, 2000);

  if (document.readyState === 'complete') {
    whenIdle();
  } else {
    window.addEventListener('load', whenIdle, { once: true });
  }
};
