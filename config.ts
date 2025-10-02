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
  title: "Dealo Blog",
  // Site description
  // Used in meta tags and RSS configuration
  description: "The official blog for Dealo - Latest news, updates, and insights.",
  site: 'https://blog.dealo.app',
  twitterUsername: "@dealoapp",
  openGraphSiteName: "Dealo Blog"
}

export { config }
