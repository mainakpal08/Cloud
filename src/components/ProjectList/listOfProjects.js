const projectList = [
 {
    name: 'Scikit-learn',
    imageSrc: 'https://avatars0.githubusercontent.com/u/365630?v=3&s=100',
    githubLink:
      'https://github.com/scikit-learn/scikit-learn/issues?q=is%3Aopen+is%3Aissue+label%3AEasy',
    description: 'Machine learning in Python!',
    tags: ['Python', 'Machine Learning', 'Math'],
  }, {
    name: 'Numpy',
    imageSrc:
      'https://camo.githubusercontent.com/b310fd3c9c5f7da5de0911b77d201408b76b8a58/68747470733a2f2f696d616765732e706c6f742e6c792f706c6f746c792d646f63756d656e746174696f6e2f7468756d626e61696c2f6e756d70792d6c6f676f2e6a7067',
    githubLink:
      'https://github.com/numpy/numpy/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3A%22difficulty%3A+Easy%22',
    description: 'Scientific computing with Python!',
    tags: ['Python', 'Math', 'Module', 'Docs'],
  }, {
    name: 'Node.js',
    imageSrc: 'https://avatars1.githubusercontent.com/u/9950313?v=3&s=100',
    githubLink:
      'https://github.com/nodejs/node/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22',
    description: 'Node.js JavaScript runtime.',
    tags: ['JavaScript', 'HTML', 'CSS'],
  }, {
    name: 'Neovim',
    imageSrc: 'https://avatars0.githubusercontent.com/u/6471485?v=3&s=100',
    githubLink:
      'https://github.com/neovim/neovim/issues?q=is%3Aopen+is%3Aissue+label%3Acomplexity%3Alow',
    description: 'Vim-fork focused on extensibility and usability.',
    tags: ['Editor', 'API', 'Cross-Platform', 'Vim'],
  }, {
    name: 'Hoodie',
    imageSrc: 'https://avatars1.githubusercontent.com/u/1888826?v=3&s=100',
    githubLink:
      'https://github.com/hoodiehq/hoodie/issues?q=is%3Aopen+is%3Aissue+label%3Afirst-timers-only',
    description: 'The Offline First JavaScript Backend.',
    tags: ['JavaScript','Node.js'],
  }, {
    name: 'freeCodeCamp',
    imageSrc: 'https://avatars0.githubusercontent.com/u/9892522?v=3&s=100',
    githubLink:
      'https://github.com/freeCodeCamp/freeCodeCamp/issues?q=is%3Aopen+is%3Aissue+label%3Afirst-timers-only',
    description: 'Open Source codebase and curriculum.',
    tags: ['Learn', 'Education', 'Non-Profit', 'Certification'],
  }, {
    name: 'Semantic-UI-React',
    imageSrc:
      'https://avatars1.githubusercontent.com/u/5796209?s=200&v=4',
    githubLink:
      'https://github.com/Semantic-Org/Semantic-UI-React/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22',
    description: 'The official Semantic-UI-React integration.',
    tags: ['React', 'Library', 'Component', 'Front-End'],
  }, {
    name: 'Contribute to Open Source',
    imageSrc: 'https://image.ibb.co/fUM5oG/profile_first_pr.png',
    githubLink: 'https://github.com/danthareja/contribute-to-open-source/issues',
    description: 'Learn GitHub\'s pull request process by contributing code in a fun simulation project.',
    tags: ['GitHub', 'Tutorial'],
  }, {
    name: 'Exercism',
    imageSrc: 'https://avatars2.githubusercontent.com/u/5624255?v=3&s=100',
    githubLink:
      'https://github.com/exercism/exercism.io/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+patch%22',
    description: 'Quickly ramp up in new programming languages!',
    tags: ['Ruby', 'Exercises', 'CLI', 'Web App'],
  }, {
    name: 'Fun Retros',
    imageSrc: 'https://avatars3.githubusercontent.com/u/15913975?v=3&s=100',
    githubLink:
      'https://github.com/funretro/distributed/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3A%22beginner+friendly%22',
    description: 'Easy to use and beautiful restrospective tool!',
    tags: ['JavaScript', 'Web App', 'AngularJS', 'Firebase'],
  }, {
    name: 'Habitat',
    imageSrc: 'https://avatars1.githubusercontent.com/u/18171698?v=3&s=100',
    githubLink:
      'https://github.com/habitat-sh/habitat/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3AE-Easy',
    description: 'Modern applications with built-in automation.',
    tags: ['Docs','Front-End','Rust','MultiOS'],
  },  {
    name: 'React',
    imageSrc: 'https://camo.githubusercontent.com/22045498095171997ccf6a9554672519b9f67898/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f72656163742e737667',
    githubLink: 'https://github.com/facebook/react/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22',
    description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
    tags: ['JavaScript', 'UI', 'Web App'],
  },  {
    name: 'AVA',
    imageSrc: 'https://avatars0.githubusercontent.com/u/8527916?v=3&s=100',
    githubLink:
      'https://github.com/avajs/ava/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+for+beginner%22',
    description: 'The Futuristic JavaScript test runner!',
    tags: ['JavaScript','Tests', 'Docs', 'Babel'],
  }, {
    name: 'Elasticsearch',
    imageSrc: 'https://avatars2.githubusercontent.com/u/6764390?v=3&s=100',
    githubLink:
      'https://github.com/elastic/elasticsearch/issues?q=is%3Aopen+is%3Aissue+label%3A%22low+hanging+fruit%22',
    description: 'Open Source, Distributed, RESTful Search Engine.',
    tags: ['REST', 'Docs', 'Java', 'Lucene'],
  }, {
    name: 'Homebrew',
    imageSrc: 'https://avatars2.githubusercontent.com/u/1503512?v=3&s=100',
    githubLink:
      'https://github.com/Homebrew/brew/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22',
    description: 'The missing package manager for macOS.',
    tags: ['MacOS', 'Ruby', 'C++'],
  }, {
    name: 'Rust',
    imageSrc: 'https://avatars1.githubusercontent.com/u/5430905?v=3&s=100',
    githubLink:
      'https://github.com/rust-lang/rust/issues?q=is%3Aopen+is%3Aissue+label%3AE-easy',
    description: 'A safe, concurrent, practical language!',
    tags: ['Rust', 'Compiler', 'Mentored', 'Parser'],
  }, {
    name: 'Vuejs',
    imageSrc: 'https://avatars1.githubusercontent.com/u/6128107?v=3&s=100',
    githubLink: 'https://github.com/vuejs/vue/issues?q=is%3Aopen+is%3Aissue+label%3A%22contribution+welcome%22',
    description: 'A progressive, incrementally-adoptable JavaScript framework for building UI on the web.',
    tags: ['JavaScript', 'UI', 'Front-End'],
  }, {
    name: 'Suave',
    imageSrc: 'https://avatars2.githubusercontent.com/u/5822862?v=3&s=100',
    githubLink: 'https://github.com/SuaveIO/suave/issues?q=is%3Aopen+is%3Aissue+label%3Ahardness-easy',
    description: 'Simple web development F# library to manipulate route flow and task composition.',
    tags: ['F#', 'WebDev', 'Library'],
  }, {
    name: 'OpenRA',
    imageSrc: 'https://avatars3.githubusercontent.com/u/409046?v=3&s=100',
    githubLink: 'https://github.com/OpenRA/OpenRA/issues?q=is%3Aopen+is%3Aissue+label%3AEasy',
    description: 'Open Source real-time strategy game engine for early Westwood games.',
    tags: ['AI', 'C#', 'SDL', 'OpenGL'],
  }, {
    name: 'Coala',
    imageSrc: 'https://avatars2.githubusercontent.com/u/10620750?v=3&s=100',
    githubLink: 'https://github.com/coala/coala/issues?q=is%3Aopen+is%3Aissue+label%3Adifficulty%2Flow+label%3Adifficulty%2Fnewcomer',
    description: 'Unified command-line interface for linting and fixing all your code.',
    tags: ['UX', 'Linter', 'Python'],
  }, {
    name: 'Moment',
    imageSrc: 'https://avatars2.githubusercontent.com/u/4129662?v=3&s=100',
    githubLink:
      'https://github.com/moment/moment/issues?q=is%3Aopen+is%3Aissue+label%3AUp-For-Grabs',
    description: 'Parse, validate, manipulate, and display dates in JavaScript.',
    tags: ['JavaScript', 'Front-End', 'Meta'],
  }, {
    name: 'Leiningen',
    imageSrc:
      'https://camo.githubusercontent.com/0f302c808c8457f6460913e33aed3478124612c2/687474703a2f2f6c65696e696e67656e2e6f72672f696d672f6c65696e696e67656e2e6a7067',
    githubLink:
      'https://github.com/technomancy/leiningen/issues?q=is%3Aopen+is%3Aissue+label%3ANewbie',
    description: 'Automate Clojure projects without setting your hair on fire.',
    tags: ['Clojure', 'Automation'],
  }, {
    name: 'Brackets',
    imageSrc: 'https://github.com/adobe/brackets/raw/gh-pages/images/brackets_128.png?raw=true',
    githubLink: 'https://github.com/adobe/brackets/issues?q=is%3Aopen+is%3Aissue+label%3A%22Starter+bug%22',
    description: 'An open source code editor for the web, written in JavaScript, HTML and CSS.',
    tags: ['Editor', 'Windows', 'Linux', 'MacOS'],
  }, {
    name: 'Webpack',
    imageSrc: 'https://avatars3.githubusercontent.com/u/2105791?v=3&s=100',
    githubLink: 'https://github.com/webpack/webpack/issues?q=is%3Aopen+is%3Aissue+label%3A%22D1%3A+Easy+%28Contrib.+Difficulty%29%22',
    description: 'A bundler for JavaScript and friends. Packs many modules into a few bundled assets.',
    tags: ['Bundler', 'JavaScript', 'Compiler', 'Loader'],
  }, {
    name: 'Babel',
    imageSrc: 'https://avatars2.githubusercontent.com/u/9637642?v=3&s=100',
    githubLink:
      'https://github.com/babel/babel/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22',
    description: 'Babel is a compiler for writing next generation JavaScript.',
    tags: ['es2015', 'JavaScript', 'Compiler'],
  }, {
    name: 'Pouchdb',
    imageSrc: 'https://avatars3.githubusercontent.com/u/3406112?v=3&s=100',
    githubLink:
      'https://github.com/pouchdb/pouchdb/issues?q=is%3Aopen+is%3Aissue+label%3A%22first+timers+only%22',
    description: 'A pocket-sized database.',
    tags: ['JavaScript','Node.js','CouchDB'],
  }, {
    name: 'RubyGems ecosystem',
    imageSrc: 'https://avatars.githubusercontent.com/u/17981340',
    githubLink: 'https://github.com/rubygems/contribute',
    description: 'One site to show all related RubyGems ecosystem projects and help developers get involved.',
    tags: ['Ruby', 'Rubygems'],
  }, {
    name: 'Mail For Good',
    imageSrc: 'https://avatars0.githubusercontent.com/u/9892522?v=3&s=100',
    githubLink: 'https://github.com/freeCodeCamp/mail-for-good/issues',
    description: 'An open source email campaign management tool.',
    tags: ['Nodejs', 'JavaScript', 'Email-Campaigns'],
  },
  {
    name: 'Visual Studio Code',
    imageSrc: 'https://i.warosu.org/data/g/img/0514/15/1447907357729.png',
    githubLink: 'https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue',
    description: 'VS Code is a new type of tool that combines the simplicity of a code editor with what developers need for their core edit-build-debug cycle.',
    tags: ['TypeScript', 'Text-Editor', 'Electron'],
  },


  {
    name:'Movie-Stream',
    imageSrc:'https://image.ibb.co/faTroc/movie_stream.png',
    githubLink:'https://github.com/hrishi7/streamIt',
    description:'Provides Online free movie streaming service with adfree. flexible for mobile also',
    tags:['Web development','HTML','Javascript','API','CSS','Bootstrap']
  },
  {
    name: 'ethereum',
    imageSrc: 'https://avatars1.githubusercontent.com/u/6250754?s=200&v=4',
    githubLink: 'https://github.com/ethereum/',
    description: 'Ethereum is a decentralized platform that runs smart contracts applications.',
    tags: ['Go', 'C++', 'Solidity','Python', 'Shell', 'Java'
    ]
  },
  
  

];
export default projectList;
