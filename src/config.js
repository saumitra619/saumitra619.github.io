module.exports = {
  email: 'saumitra619@gmail.com',
  siteTitle: 'Saumitra Tomar | Software Engineer',
  siteDescription:
    'Saumitra Tomar is a Software Engineer at TCS  who loves learning new things.',
  siteKeywords:
    '',
  siteUrl: 'https://saumitratomar.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-2',
  googleVerification: '',
  name: 'Saumitra Tomar',
  location: 'India',
  email: 'saumitra619@gmail.com',
  github: 'https://github.com/saumitra619',
  twitterHandle: '@xyz',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/saumitra619',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/saumitra-tomar/',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/saumitra619/',
    },
    {
      name: 'Kaggle',
      url: 'https://www.kaggle.com/saumitratomar',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
