
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
    '<span class="command">whois</span>          Who is Saku Karttunen?',
    '<span class="command">portfolio</span>      View portfolio',
    '<span class="command">projects</span>       View coding projects',
    '<span class="command">social</span>         Check out my socials',
    '<span class="command">help</span>           You figured it out',
    '<span class="command">ls</span>             File directory',
    '<span class="command">reboot</span>         Refresh terminal',
    '<span class="command">history</span>        Print command history',
    '<span class="command">banner</span>         Print banner again',
    '<br>',
]

const whois = [
    // TODO: update this text
    '<br>',
    'I am Saku Karttunen and this is my updated website.',
    'From here you can find information about my professional career',
    'experiences, skills and prior works. I am a motivated towards',
    'becoming a developer in the field of programming.',
    '<br>',
]

const portfolio = [
    '<br>',
    'Check out images of my previous works from my more traditional website:',
    `<a href="${website + '/portfolio.html'}" target="_blank">From this link</a>`,
    '<br>',
]

const projects = [
    '<br>',
    'My programming projects can be found most easily from my Github page.',
    'So I will be redirecting you over there for now:',
    `<a href="${gitHub}" target="_blank">github.com/sakuexe</a>`,
    'These projects include things such as:',
    '- Python Scripting',
    '- Web development',
    '- Prior School Projects',
    '- And some other sideprojects of mine',
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
    `Command for <span class="command">'${cmd}'</span> not found`,
    `Try typing <span class="command">'help'</span> to see available commands`,
    ]
}

let history = [

]