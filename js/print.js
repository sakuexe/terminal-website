import { commands } from "./commands.js"
import { addToHistory } from "./history.js"

const termOutput = document.querySelector('output#stdout')

export async function printOutput(lines = [], cmd = null) {
  if (cmd) addToHistory(cmd)
  if (lines.length <= 0) {
    // sanitize the cmd from code injection or xss
    const sanitizedCmd = document.createElement("div")
    sanitizedCmd.innerText = cmd
    lines.push(`Command for <span class="command">${sanitizedCmd.innerHTML}</span> not found`)
    lines.push('Try typing <span class="command">help</span> to see available commands')
  }
  if (cmd) {
    termOutput.innerHTML += `<span class="text-mutedPurple">user@dev.sakukarttunen.com$~</span> <span class="command">${cmd}</span><br>`
  }
  for (let line of lines) {
    // scrolls the window to bottom of page
    window.scrollBy(0, window.innerHeight)

    let newLine = document.createElement('p')
    newLine.innerHTML = line
    if (lines === commands.banner) newLine.classList.add('text-mutedPurple')
    termOutput.appendChild(newLine)
    await delay(100)
  }
}

export function playSound(sound, volume = 0.5) {
  /* 
      plays sound that is passed as argument.
      e.g. playSound('./.sound/sound.mp3')
      volume is an optional parameter, default is 0.5
  */
  let audio = new Audio(sound)
  audio.volume = volume
  audio.play()
}

const delay = (ms) => {
  // ms is a number value of how many milliseconds the delay will last
  return new Promise(resolve => setTimeout(resolve, ms))
}
