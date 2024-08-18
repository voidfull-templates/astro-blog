import type { AstroUserConfig } from "astro/config";

import type { OnlyRequired } from "./src/env";

interface Config extends OnlyRequired<AstroUserConfig, 'site'> {
  title: string
  description: string
  twitterUsername?: string
  openGraphSiteName?: string
}

const config: Config = {
  // Site title
  // Used in meta tags and RSS configuration
  title: "My site",
  // Site description
  // Used in meta tags and RSS configuration
  description: "My blogging site built with Astro using Voidfull.",
  site: 'https://voidfull.com',
  twitterUsername: "@GetVoidfull",
  openGraphSiteName: "Voidfull"
}

export { config }
