// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'samsanisatyasridevi', // Your GitHub org/user name. (This is the only required config)
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
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'     
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Service Co (Phase I and Phase II) ',
          description: 'Service Co is intended for the container exchange scheme precisely for the Australian government.',
        },
        {
          title: 'MyST Product',
          description:  'MyST Product – MyST (My Simple Tool) is a product for automation of middleware technologies installation and configuration process.',        
        },
        {
          title: 'Version Fiber Services',
          description:  'Location management domain which works to get the demand points locations on Goggle maps where Verizon can provide their services based on requirement',        
        },
         {
          title: 'CGG Project',
          description: 'CGG Earth Library is a centralized web-based way of finding and accessing CGG data. It will integrate with multiple business lines to bring in 4 different data types for the user to interact with.',
        },
        {
          title : 'Fiber Management System',
          description: '(FMS) manages optical fiber connections from outside of fiber rack to the fiber routers. Fiber-optic cable duct containing many fibers comes from far sites and terminates on the FMS using splicing technology',
        }
      ],
    }, 
  },




  seo: { title: 'Portfolio of sridevi ', description: '', imageURL: '' },
  social: {
    linkedin: 'https://www.linkedin.com/in/satya-sridevi-715947108/',
    telegram: '스리데비',
    phone: '+821098506552',
    email: 'satyasridevi60@gmail.com',
  },
  resume: {
    fileUrl:
      //'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
      ''
  },
  skills: [
    'Java',
    'Spring Boot', 
    'Agile' ,
     'Python', 
     'Django Web Application' ,
    'Maven',
    'MySQL', 'SQL',
    'PostgreSQL',
    'Git',
    'CSS',
    'HTML',
    'Hibernate', 'JPA' , 'ORM tool' 
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
      class="text-primary" href="https://github.com/samsanisatyasridevi/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
