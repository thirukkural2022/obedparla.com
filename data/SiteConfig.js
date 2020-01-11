const config = {
  siteTitle: 'Obed Parlapiano - JavaScript Engineer & Writer', // Site title.
  siteTitleShort: 'Obed Parlapiano', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Obed M' Parlapiano's Blog", // Alternative site title for SEO.
  siteLogo: '/logos/logo-512.png', // Logo used for SEO and manifest.
  siteUrl: 'https://obedparla.com', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    "Personal blog by Obed M' Parlapiano. Books, philosophy and Code", // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-131360286-1', // GA tracking ID.
  disqusShortname: '', // Disqus shortname.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFancyFormat: 'MMMM Do, YYYY', // Date format used to stylize
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  userEmail: 'obedparla@gmail.com', // Email used for RSS feed's author segment
  userTwitter: 'obedparla', // Optionally renders "Follow Me" in the UserInfo segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  themeColor: '#fff', // Used for setting manifest and progress theme colors.
  backgroundColor: '#fff', // Used for setting manifest background color.
  repo: 'https://github.com/obedparla/obedparla.com',
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
