export const projects = [
  {
    name: 'BioData Catalyst Marketing Site',
    id: 'bdc',
    images: {
      fullSize: '/images/bdc.png',
      thumbnail: '/images/bdc-thumbnail.png',
    },
    url: 'https://biodatacatalyst.nhlbi.nih.gov/',
    tags: ['React', 'Gatsby', 'AWS', 'Data Visualization', 'HTML', 'CSS', 'JavaScript'],
    description: `This is a marketing website for NHLBI BioData Catalyst, which is a
      cloud-based platform providing tools, applications, and workflows in secure workspaces.
      This site is essentially a static site with a few enhancements allowing communication
      with remote services at runtime.`,
  },
  {
    name: 'CTMD',
    id: 'ctmd',
    images: {
      fullSize: '/images/ctmd.png',
      thumbnail: '/images/ctmd-thumbnail.png',
    },
    url: 'https://ctmd.renci.org/',
    tags: ['React', 'Node', 'Express', 'Docker', 'PostgreSQL', 'Data Visualization', 'HTML', 'CSS', 'JavaScript'],
    description: `The Clinical Trial Managemement Dashboard is an application to help Duke University Trial Innovation Network
      keep tabs on research grants as they move through their life-cycle. This dashboard provides users with such power,
      but it also empowers users with data visualizations to assist in discovering patterns and gleaning new understandings.
      This is a multi-container application orchestrated with Docker Compose.`,
  },
  {
    name: 'RENCI\'S COVID-19 Response',
    id: 'covid',
    images: {
      fullSize: '/images/covid.png',
      thumbnail: '/images/covid-thumbnail.png',
    },
    url: 'https://covid-19.renci.org/',
    tags: ['React', 'Gatsby', 'M↓', 'HTML', 'CSS', 'JavaScript'],
    description: `This is a static site built with Gatsby. Gatsby was a useful framework for this project,
      specifically because it allows for quick development turnaround, and we built this site as a quick
      response to the COVID-19 pandemic in 2020.`,
  },
  {
    name: 'Create RENCI App',
    id: 'cra',
    images: {
      fullSize: '/images/cra.png',
      thumbnail: '/images/cra-thumbnail.png',
    },
    url: 'https://www.npmjs.com/package/@renci/create-renci-app',
    tags: ['React', 'Webpack', 'Babel', 'HTML', 'CSS', 'SCSS', 'PostCSS', 'JavaScript'],
    description: `This project is purely to speed up the development timeline for our developers.
      This was a hobby project of mine for a while that I was recently able to formalize and release for general use.
      In its current state, it gets a bootstrapped React application complete with RENCI and UNC branding assets.`,
  },
  {
    name: 'FABRIC Testbed Marketing Site',
    id: 'fabric',
    images: {
      fullSize: '/images/fabric.png',
      thumbnail: '/images/fabric-thumbnail.png',
    },
    url: 'https://fabric-testbed.net/',
    tags: ['React', 'Gatsby', 'M↓', 'YAML', 'HTML', 'CSS', 'JavaScript'],
    description: `This is the marketing website for FABRIC, which is a novel research infrastructure
      that enables research at-scale in networking, cybersecurity, distributed computing and storage systems,
      machine learning, and science applications. This site was one requiring a quick turnaround,
      and this is the first project for which Gatsby was used at RENCI.`,
  },
  {
    name: 'HeLx UI',
    id: 'helx',
    images: {
      fullSize: '/images/helx.png',
      thumbnail: '/images/helx-thumbnail.png',
    },
    url: 'https://heal-dev.blackbalsam-cluster.edc.renci.org/helx/',
    tags: ['React', 'Django', 'HTML', 'CSS', 'JavaScript'],
    description: `This is a highly collaborative effort to revamp the user interface for one of RENCI's flagship projects, HeLx.
      This project has more moving parts than I could detail here, so I will stick to the front-end. One of my talented
      colleagues and I are implementing two main features provided by the HeLx application stack: (1) a semantic search
      interface and (2) a workspaces management interface, allowing users to launch and manage data science applications
      in a secure cloud-based environment.`,
  },
  {
    name: 'Hey, OK! Pictures',
    id: 'heyok',
    images: {
      fullSize: '/images/hey-ok.png',
      thumbnail: '/images/hey-ok-thumbnail.png',
    },
    url: 'https://heyokpictures.com/',
    tags: ['SquareSpace', 'CSS', 'JavaScript'],
    description: `This is a website overhaul for a friend's video production company, Hey, OK! Pictures, in Raleigh, NC.
      The clients wanted a static site that was simple to maintain, update, and enhance. Since the content is mostly static text and links to videos,
      I selected to build their site on SquareSpace. It uses a simple theme provided by SquareSpace, which I then enhanced with custom JavaScript and CSS
      to meet the aesthetic needs`,
  },
  {
    name: 'First Mile to Health',
    id: 'first-mile',
    images: {
      fullSize: '/images/first-mile.png',
      thumbnail: '/images/first-mile-thumbnail.png',
    },
    url: null,
    tags: ['D3' ,'CSS', 'JavaScript'],
    description: `Under the guidance of RENCI's senior visualization specialist, this was the first data visualization project at RENCI
      for which I solely completed the development. The task was to develop a visualization for a grant proposal that illustrates
      NICU occupancy as compared to living distance from the NICU in North Carolina. For this, I used D3 and d3-hexbin`,
  },
  {
    name: 'Michelle Scaraglino',
    id: 'ms',
    images: {
      fullSize: '/images/ms.png',
      thumbnail: '/images/ms-thumbnail.png',
    },
    url: 'https://michellescaraglino.com',
    tags: ['React', 'Gatsby', 'HTML', 'CSS', 'M↓', 'JavaScript'],
    description: `This is the website for my wife's hair styling business. As far as content and functionality complexity,
    this site is about as simple as it gets. This project relies more on conveying information through style and design
    than my usual projects, which is a fun, creative space in which to play.`,
  },
  {
    name: 'Roadway Hazard Finder',
    id: 'rhf',
    images: {
      fullSize: '/images/rhf.png',
      thumbnail: '/images/rhf-thumbnail.png',
    },
    url: 'https://dotdsi.renci.org/',
    tags: ['React', 'HTML', 'CSS', 'Data Visualization', 'JavaScript'],
    description: `Through work with the North Carolin DOT, this exciting project is tasked with helping find hazards
      on North Carolina roadways through image analysis. My role on this project is to assist in build (1) an active
      learning interface for training machine learning models to find these hazards and (2) a diagnostic interface
      to analyze predictions and user annotations.`,
  },
  {
    name: 'RENCI\'s SC20 Virtual Booth',
    id: 'sc20',
    images: {
      fullSize: '/images/sc20.png',
      thumbnail: '/images/sc20-thumbnail.png',
    },
    url: 'https://sc.renci.org/',
    tags: ['React', 'Gatsby', 'M↓', 'HTML', 'CSS', 'JavaScript'],
    description: `Due to the COVID-19 pandemic last year, the Supercomputing 2020 conference was virtual.
      Thus organizations were tasked with building their own virtual booths as they saw appropriate. We made a website.`,
  },
]
