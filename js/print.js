async function printOut(lines) {
    for(let line of lines) {
        // scrolls the window to bottom of page
        window.scrollBy(0, window.innerHeight)

        let newLine = document.createElement('p')
        newLine.innerHTML = line
        termOutput.appendChild(newLine)
        await delay(100)
    }
}