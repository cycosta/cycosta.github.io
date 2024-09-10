import ReactGA from 'react-ga4';

enum EventName {
  INTRO_PAGE_VIEWED = 'intro_page_viewed',
  NAVIGATION_CLICKED = 'navigation_clicked',
  WORK_ITEM_CLICKED = 'work_item_clicked',
  PROJECT_ITEM_CLICKED = 'project_item_clicked',
  FEATURED_ITEM_CLICKED = 'featured_item_clicked',
  FEATURED_LOAD_MORE_CLICKED = 'featured_load_more_clicked',
  SOCIAL_LINK_CLICKED = 'social_link_clicked',
}

enum EventAction {
  PAGE_VIEWED = 'page_viewed',
  BUTTON_CLICKED = 'button_clicked',
}

const trackEvent = (category: EventName, action: EventAction, label?: string) =>
  ReactGA.event({
    category,
    action,
    label,
  });

export const trackIntroPageViewed = () =>
  trackEvent(EventName.INTRO_PAGE_VIEWED, EventAction.PAGE_VIEWED);

export const trackNavigationClicked = (item: string) =>
  trackEvent(EventName.NAVIGATION_CLICKED, EventAction.BUTTON_CLICKED, item);

export const trackWorkItemClicked = (item: string) =>
  trackEvent(EventName.WORK_ITEM_CLICKED, EventAction.BUTTON_CLICKED, item);

export const trackProjectItemClicked = (item: string) =>
  trackEvent(EventName.PROJECT_ITEM_CLICKED, EventAction.BUTTON_CLICKED, item);

export const trackFeaturedItemClicked = (item: string) =>
  trackEvent(EventName.FEATURED_ITEM_CLICKED, EventAction.BUTTON_CLICKED, item);

export const trackLoadMoreButtonClicked = () =>
  trackEvent(EventName.FEATURED_LOAD_MORE_CLICKED, EventAction.BUTTON_CLICKED);

export const trackSocialLinkClicked = (item: string) =>
  trackEvent(EventName.SOCIAL_LINK_CLICKED, EventAction.BUTTON_CLICKED, item);
