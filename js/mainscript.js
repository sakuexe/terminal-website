
const termInput = document.querySelector('#terminal-input')
const termOutput = document.querySelector('output')

const delay = (ms) => {
    // ms is a number value of how many milliseconds the delay will last
    return new Promise( resolve => setTimeout(resolve, ms))
}

async function keepFocus(element) {
    // function for keeping the text input in focus at all times
    await delay(500)
    element.focus({focusVisible: true})
}

function enterCommand(keypress) {
    let cmd = termInput.value
    if (keypress.key !== 'Enter') return

    termOutput.innerHTML += `<span class="text-mutedPurple">user@dev.sakukarttunen.com$~</span> <span class="command">${cmd}</span><br>`

    switch (cmd.toLowerCase()) {

        case 'help':
            printOut(help)
            break

        case 'whois':
        case 'sakuk':
        case 'saku':
            printOut(whois)
            break

        case 'whoami':
            printOut(whoami)
            break

        case 'portfolio':
            printOut(portfolio)
            break

        case 'exp':
        case 'experience':
            printOut(experience)
            break

        case 'projects':
            printOut(projects)
            break

        case 'social':
        case 'socials':
            printOut(socials)
            break

        case 'ls':
            printOut(directory)
            break

        case 'reboot':
        case 'reload':
        case 'refresh':
            location.reload()
            break

        case 'history':
            printOut(history)
            break

        case 'banner':
        case 'ascii':
            printOut(banner)
            break

        case 'clear':
            termOutput.innerHTML = ''
            break

        case 'yes':
        case 'ye':
        case 'y':
            // check if the last command was 'portfolio'
            if (history.at(-1) !== 'portfolio'){
                printOut(error(cmd))
                break
            }
            // this part of the code will only run if the prompt
            // of the portfolio was thrown before
            window.open('https://sakukarttunen.com/portfolio.html', '_blank')
            break

        // * Easter eggs
        case 'sus':
            playSound('./sounds/sus-sound.mp3')
            printOut(sus)
            break

        case 'sudo':
            playSound('./sounds/chest-open.mp3', 1)
            window.open('https://i.kym-cdn.com/photos/images/newsfeed/002/486/154/c06.gif', '_blank')
            break

        // empty command
        case '':
            termOutput.innerHTML += ''
            break

        default:
            printOut(error(cmd))
    }

    termInput.value = ''
    history.push(cmd)
}

printOut(banner)