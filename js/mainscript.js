
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
        case 'clear':
            termOutput.innerHTML = ''
            break

        case 'help':
            printOut(help)
            break

        case 'whois':
            printOut(whois)
            break

        case 'portfolio':
            printOut(portfolio)
            break

        case 'projects':
            printOut(projects)
            break

        case 'social':
            printOut(socials)
            break

        case 'ls':
            printOut(directory)
            break

        case 'refresh':
            location.reload()
            break

        case 'reload':
            location.reload()
            break

        case '':
            termOutput.innerHTML += ''
            break

        case 'banner':
            printOut(banner)
            break

        case 'history':
            printOut(history)
            break

        default:
            printOut(error(cmd))
    }

    termInput.value = ''
    history.push(cmd)
}

printOut(banner)