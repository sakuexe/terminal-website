async function printOut(lines) {

    for(let line of lines) {
        // scrolls the window to bottom of page
        window.scrollBy(0, window.innerHeight)

        let newLine = document.createElement('p')
        newLine.innerHTML = line
        if(lines === banner) newLine.classList.add('text-mutedPurple')
        termOutput.appendChild(newLine)
        await delay(100)
    }
}

let historyIndex = 0
let historyLength = history.length

function historyCheck(event) {
    // if history's length has increased, index and length counter will be reset
    if (historyLength < history.length) historyLength = history.length, historyIndex = 1

    if(event.key === 'ArrowUp' && history.length > 0) {
        if (historyIndex > historyLength) return

        historyIndex += 1
        termInput.value = history[history.length - (historyIndex- 1)]
    }

    if(event.key === 'ArrowDown') {
        // if already at latest command, make input field empty
        if(historyIndex <= 1) return termInput.value = ''

        historyIndex -= 1
        termInput.value = history[history.length - historyIndex]
    }
}