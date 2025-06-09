import type { IConfig } from "next-sitemap";

const config: IConfig = {
  siteUrl: "https://nxtsoftwares.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
};

export default config;
