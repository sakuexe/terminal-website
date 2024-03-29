
const instagram = 'https://www.instagram.com/16bitmustache/'
const facebook = 'https://www.facebook.com/saku.karttunen.1'
const linkedIn = 'https://www.linkedin.com/in/saku-karttunen-a5b00120b/'
const gitHub = 'https://github.com/sakuexe'
const website = 'https://sakukarttunen.com'

const banner = [
"          ___   ____",
"        /' --;^/ ,-_\\     \\ | /"                                             ,
"       / / --o\\ o-\\ \\\\   --(_)--"                                          ,
"      /-/-/|o|-|\\-\\\\|\\\\   / | \\ "                                        ,
"       '`  ` |-| '  ``",
"             |-|'", 
"             |-|O                         ___       _        _  __         ",
"             |-(\\,__                     / __| __ _| |___  _| |/ / ",      
"          ...|-|\\--,\\_....'              \\__ \\/ _` | / / || | ' < ",
"      ,;;;;;;;;;;;;;;;;;;;;;;;;,.'       |___/\\__,_|_\\_\\\\_,_|_|\\_\\ &copy;2022",
'~~,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
'<span class="text-mutedOrange">Welcome to my interactive terminal.</span>',
'<span class="text-mutedOrange">For a list of available commands, type <span class="command">"help"</span></span>',
'<br>',
]

const help = [
    '<br>',
    '<span class="command">whois</span>          Who is SakuK?',
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
]

const whois = [
    '<br>',
    'I am Saku Karttunen and this is my terminal website.',
    'This website was designed to be a more dev-centered way of',
    'presenting my skills and portfolio.',
    'From here you can find information about my professional career',
    'experiences, skills and prior works. I am a motivated towards',
    'becoming a developer in the field of programming.',
    '<br>',
    'I am currently studying at the Häme University of Applied Sciences (HAMK)',
    '<br>',
    'about me:',
    '- I was born in 2001 and I am currently living in Riihimäki, Finland',
    '- I enjoy watching Formula 1, playing video games and drawing <span class="text-xs opacity-75">from time to time</span>',
    '- My favorites:',
    '   * Color: <span class="text-purple-800">Purple</span>',
    '   * Programming language === JavaScript',
    '   * IDE: Visual Studio Code (With the VIM plugin)',
    '   * Games: Super Smash Brothers, Breath of the Wild and Persona 5 Royal',
    '<br>',
]

const whoami = [
    '<br>',
    'Who are you? Wouldn\'t that be a question for yourself?',
    'In any case, I do appreciate you for visiting my website.',
    '<br>',
]

const portfolio = [
    '<br>',
    'Want to check out my portfolio from my traditional website?',
    // `<a href="${website + '/portfolio.html'}" target="_blank">${website}</a>`,
    '<span class="opacity-75">This will open the website on another tab.</span>',
    '<span class="command">(y)</span>es or <span class="command">(n)</span>o?',
    '<br>',
]

const experience = [
    '<br>',
    'Here are some of my prior work experiences:',
    '<br>',
    'Freelance Graphic Designer and Web Developer',
    '<span class="italic opacity-75">2019 - current</span>',
    '   - I started my own freelance business to help out small businesses on growing',
    '   their branding and values through visual style of their logos and graphics',
    '   and bringing their content and services to potential clients via websites',
    '   and social media content',
    '<br>',
    'Kantolan KunnonSali Web Developer',
    '<span class="italic opacity-75">6.2022 - 7.2022</span>',
    '   - Rebuilt a website for a local gym in Hämeenlinna. This was a part of the cSchool',
    '   project from HAMK for the summer. I worked with my friend Wais on this project',
    '   We were tasked to redesign and develop the website for Kantolan KunnonSali, because',
    '   the previous website was not responsive and honestly looked like it was made in 2005.',
    '   We used Bootstrap 5 and vanilla JavaScript to create the website.',
    '<br>',
    'Logistics Personnel',
    '<span class="italic opacity-75">6.2021 - 8.2021</span>',
    '   - I worked for a small family owned business as a logistics personnel',
    '   in Riihimäki. I was responsible for driving and delivering the products',
    '   to the town squares of Hyvinkää, Riihimäki and Hämeenlinna. The business',
    '   sold mainly fresh berries, vegetables and flowers during summertime.',
    '   I worked there for the rest of the summer after finishing my mandatory military service.',
    '<br>',
    'Video and Photographer, Editor',
    '<span class="italic opacity-75">5.2020 - 7.2020</span>',
    '   - I worked as a video and photographer, as well as an editor for',
    '   Geego Kids Oy\'s mobile application and social media. From February',
    '   to the June of 2020. First as a part of my meidia studies job-experience',
    '   And then as a full-time job. I worked there for the rest of the summer',
    '   after graduation and before starting my mandatory military service.',
    '<br>',
]

const projects = [
    '<br>',
    'My programming projects can be found most easily from my Github page.',
    'So I will be redirecting you over there for now:',
    `<a href="${gitHub}" target="_blank">github.com/sakuexe</a>`,
    'These projects include things such as:',
    '- Youtube video downloader, with Python3',
    '- Personal Websites',
    '- Some prior school course projects',
    '- Others',
    '<br>'
]

const socials = [
    '<br>',
    `Instagram:      <a href="${instagram}" target="_blank">instagram.com/16bitmustache</a>`,
    `Facebook:       <a href="${facebook}" target="_blank">facebook.com/saku.karttunen.1</a>`,
    `LinkedIn:       <a href="${linkedIn}" target="_blank">linkedin.com/in/saku-karttunen-a5b00120b</a>`,
    `GitHub:         <a href="${gitHub}" target="_blank">github.com/sakuexe</a>`,
    '<br>',
]

const directory = [
    '<br>',
    'drw-rw-r-- 1   sakuk   512     css/',
    'drw-rw-r-- 1   sakuk   512     js/',
    'drw-rwxr-- 1   sakuk   512     tailwind/',
    '-rw-rw-r-- 1   sakuk   1028    index.html',
    '<br>',
]

const error = (cmd) => {
    return [
    `Command for <span class="command">${cmd}</span> not found`,
    `Try typing <span class="command">help</span> to see available commands`,
    ]
}

const sus = [
    '<br>',
    '<span class="text-neutral-600">*    .    ¨    o </span>',
    '<span class="text-neutral-600">  .    <span class="text-red-600">ඞ</span>    .  ¨ </span',
    '<span class="text-neutral-600"> ¨    ,       *</span>',
    '<br>',
]

let history = [

]