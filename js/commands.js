const instagram = 'https://www.instagram.com/saku.karttunen/'
const facebook = 'https://www.facebook.com/saku.karttunen.1'
const linkedIn = 'https://www.linkedin.com/in/sakukarttunen/'
const gitHub = 'https://github.com/sakuexe'
const website = 'https://sakukarttunen.com'
const currentYear = new Date().getFullYear()

export const commands = {
  banner: {
    description: 'Prints the banner again',
    lines: [
      "          ___   ____",
      "        /' --;^/ ,-_\\     \\ | /",
      "       / / --o\\ o-\\ \\\\   --(_)--",
      "      /-/-/|o|-|\\-\\\\|\\\\   / | \\ ",
      "       '`  ` |-| '  ``",
      "             |-|'",
      "             |-|O                         ___       _        _  __",
      "             |-(\\,__                     / __| __ _| |___  _| |/ / ",
      "          ...|-|\\--,\\_....'              \\__ \\/ _` | / / || | ' <   &copy; 2022",
      `      ,;;;;;;;;;;;;;;;;;;;;;;;;,.'       |___/\\__,_|_\\_\\\\_,_|_|\\_\\  - ${currentYear}`,
      '~~,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
      '<span class="text-mutedOrange">Welcome to my interactive terminal.</span>',
      '<span class="text-mutedOrange">For a list of available commands, type <span class="command">"help"</span></span>',
      '<br>',
    ],
  },

  help: {
    description: 'List all available commands',
    lines: [
      '<br>',
      '<span class="command">whois</span>          Who is Saku?',
      '<span class="command">portfolio</span>      View portfolio',
      '<span class="command">experience</span>     Short list of work experience',
      '<span class="command">projects</span>       View coding projects',
      '<span class="command">social</span>         Check out my socials',
      '<span class="command">ls</span>             File directory',
      '<span class="command">reboot</span>         Refresh terminal',
      '<span class="command">history</span>        Print command history',
      '<span class="command">banner</span>         Print banner again',
      '<span class="command">clear</span>          Clear terminal',
      '<span class="command">help</span>           You figured it out, right?',
      '<br>',
    ],
  },
  
  whois: {
    description: 'Who is Saku?',
    lines: [
      '<br>',
      'I am Saku Karttunen the developer and designer for this website as well as',
      'other cool things. I came up with the idea for this website when I was',
      'learning about Linux and the terminal. (Try some commands)',
      'From here you can find information about my professional career',
      'experiences, skills and prior works. I hope you enjoy your stay here!',
      '<br>',
      'I am currently studying at the Häme University of Applied Sciences (HAMK)',
      'My dream job is to work as a fullstack software developer and creating cool things.',
      'I am creative, calm and I enjoy creating things that are both visually appealing',
      'and functional. I am always looking for new opportunities to learn and grow.',
      '<br>',
      'Fun facts about me:',
      `- I am ${currentYear - 2001} years old and I am currently living in Riihimäki, Finland`,
      '- I enjoy programming, playing video games and motorsports.',
      '- My favorites:',
      '   * Color: <span class="text-mutedPurple">Purple</span>',
      '   * Programming languages: Typescript, C# and Golang',
      '   * Editor: Neovim (btw)',
      '<br>',
    ],
  },

  portfolio: {
    description: 'View portfolio',
    lines: [
      '<br>',
      'Want to check out my portfolio from my traditional website?',
      `<a href="${website}" target="_blank">${website}</a>`,
      '<span class="opacity-75">This will open the website on another tab.</span>',
      '<span class="command">(y)</span>es or <span class="command">(n)</span>o?',
      '<br>',
    ],
  },

  works: {
    description: 'Short list of work experience',
    lines: [
      '<br>',
      'Here are some of my prior work experiences:',
      '<br>',
      'Freelance Web Developer & Designer',
      '<span class="italic opacity-75">2019 - current</span>',
      '   - I started my own freelance business to help out small businesses on growing',
      '   their branding and values through visual style of their logos and graphics',
      '   and bringing their content and services to potential clients via websites',
      '   and social media content',
      '<br>',
      'Helmiälä Puoti Website Development',
      '<span class="italic opacity-75">2.2024 - 3.2024</span>',
      '   - I was hired to develop a website for a small local cafe in Hämeenlinna.',
      '   The website was built with Django using TailwindCSS and SQLite.',
      '   The customers were very happy with the result and I was happy to help them.',
      '   The project was dockerized and deployed to a VPS server. Cloudflare was used',
      '   for caching, DDOS protection and the SSL certificates.',
      '<br>',
      'Kantolan KunnonSali Web Developer',
      '<span class="italic opacity-75">6.2022 - 7.2022</span>',
      '   - Rebuilt a website for a local gym in Hämeenlinna. This was a part of the cSchool',
      '   project from HAMK for the summer. I worked with my friend Wais on this project',
      '   We were tasked to redesign and develop the website for Kantolan KunnonSali, because',
      '   the previous website was not responsive and honestly looked like it was made in 2005.',
      '   We used Bootstrap 5 and vanilla JavaScript to create the website.',
      '<br>',
      'Video and Photographer, Editor',
      '<span class="italic opacity-75">5.2020 - 7.2020</span>',
      '   - I worked as a video and photographer, as well as an editor for',
      '   Geego Kids Oy\'s mobile application and social media. From February',
      '   to the June of 2020. First as a part of my meidia studies job-experience',
      '   And then as a full-time job. I worked there for the rest of the summer',
      '   after graduation and before starting my mandatory military service.',
      '<br>',
      'Check out <span class="command">socials</span> for my linkedin profile for more information.',
      '<br>',
    ],
  },

  projects: {
    description: 'View coding projects',
    lines: [
      '<br>',
      'My programming projects can be found most easily from my Github page.',
      'So I will be redirecting you over there for now:',
      `<a href="${gitHub}" target="_blank">github.com/sakuexe</a>`,
      'These projects include things such as:',
      '- Fullstack Web Applications (Django, Dotnet, Node.js)',
      '- Configuration Files (Dotfiles)',
      '- Customer Websites',
      '- School Projects',
      '<br>'
    ],
  },

  socials: {
    description: 'Check out my socials',
    lines: [
      '<br>',
      `Instagram:      <a href="${instagram}" target="_blank">instagram.com/saku.karttunen</a>`,
      `Facebook:       <a href="${facebook}" target="_blank">facebook.com/saku.karttunen.1</a>`,
      `LinkedIn:       <a href="${linkedIn}" target="_blank">linkedin.com/in/sakukarttunen</a>`,
      `GitHub:         <a href="${gitHub}" target="_blank">github.com/sakuexe</a>`,
      '<br>',
    ],
  },

  ls: {
    description: 'List files in the current directory',
    lines: [
      '<br>',
      'drw-rw-r-- 1   sakuk   38      css/',
      '-rw-r--r-- 1   sakuk   7,0K    favicon.ico',
      'drw-rw-r-- 1   sakuk   22      images/',
      '-rw-r--r-- 1   sakuk   986     index.html',
      'drw-rw-r-- 1   sakuk   84      js/',
      'drw-rw-r-- 1   sakuk   2,0K    node_modules/',
      '-rw-r--r-- 1   sakuk   400     tailwind.config.js',
      '<br>',
    ],
  },
}
