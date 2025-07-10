// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'arifszn', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      mode: 'manual', // Mode can be: 'automatic' or 'manual'     
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Ariful Alam', description: '', imageURL: '' },
  social: {
    linkedin: 'ariful-alam',
    x: 'arif_szn',
    mastodon: 'arifszn@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'arifszn',
    dev: 'arifszn',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://www.arifszn.com',
    phone: '',
    email: 'arifulalamszn@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Spring Boot', 
    'Agile' , 
    'Django Web Application' ,
    'Maven',
    'MySQL',
    'PostgreSQL',
    'Git',
    'CSS',
    'HTML'
  ],
  experiences: [
    {
      company: 'Verizon Communication',
      position: 'Software Engineer',
      from: 'June 2023',
      to: 'March 2024',
      companyLink: 'https://www.verizon.com/',
    },
    {
      company: 'Cognizant',
      position: 'Software Engineer',
      from: 'July 2020',
      to: 'June 2023',
      companyLink: 'https://www.cognizant.com/us/en',
    },
    {
      company: 'Rubicon X Red',
      position: 'Product Engineer',
      from: 'May 2016',
      to: 'april 2020',
      companyLink: 'https://www.greatplacetowork.in/great/company/rubicon-red-software-india-private-limited',
    },
  ],
  certifications: [
    {
      name: 'Django Web Application',
      body: 'Djnago',
      year: 'Febuary 2024',
      link: 'https://www.coursera.org/account/accomplishments/verify/4NLMO3D3QBGM',
    },
     {
      name: 'Safe 6 scrum master ',
      body: 'Scaled agile framework',
      year: 'November 2023',
      link: 'https://scaledagile.com/certification/',
    },
  ],
  educations: [
    {
      institution: 'Aurora technology and Research Institution',
      degree: 'Bachelor Degree',
      from: '2011',
      to: '2015',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
 
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
