import Voidfull from '@voidfull/js-sdk';

export const Client = new Voidfull({
  siteId: import.meta.env.VOIDFULL_SITE_ID,
  token: import.meta.env.VOIDFULL_CONTENT_TOKEN,
});
