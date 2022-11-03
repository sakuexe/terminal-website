const termInput = document.querySelector('#terminal-input')
const termOutput = document.querySelector('output')
termOutput.innerHTML = "<p>hello world<p>"

const delay = (ms) => {
    // ms is a number value of how many milliseconds the delay will last
    return new Promise( resolve => setTimeout(resolve, ms))
}

async function keepFocus(element) {
    // function for keeping the text input in focus at all times
    await delay(100)
    element.focus({focusVisible: true})
}

function enterCommand(keypress) {
    let cmd = termInput.value
    if (keypress.key !== 'Enter') return

    switch (cmd) {
        case 'clear':
            termOutput.innerHTML = ''
            break

        default:
            termOutput.innerHTML += `<p>${termInput.value}<p>`
    }

    termInput.value = ''
}
