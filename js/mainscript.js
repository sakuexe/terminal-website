import { commands } from './commands.js'
import { printOutput, printHelp } from './print.js'
import { getFromHistory } from './history.js'
import handleSpecials from './specials.js'
import { getSanitizedInput, keepFocus } from './utils.js'

const termInput = document.querySelector('#terminal-input')
const termOutput = document.querySelector('#stdout')

function enterCommand() {
  const stdin = termInput.value.toLowerCase().trim()
  const command = commands[stdin]

  const cmd = getSanitizedInput(stdin)
  termOutput.innerHTML += `<span class="text-mutedPurple">guest@dev.sakukarttunen.com$~</span> <span class="command">${cmd}</span><br>`
  termInput.value = ''

  if (command === commands.help || stdin === 'man') {
    printHelp()
    return
  }
  if (command) {
    printOutput(command.lines, stdin)
    return
  }

  // if command is not found, check for special cases and for unknown command
  handleSpecials(stdin)
}

termInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    enterCommand()
    return
  }
  const previousCommand = getFromHistory(event.key)
  if (previousCommand) termInput.value = previousCommand
})

termInput.addEventListener('blur', () => keepFocus(event.target))

printOutput(commands.banner.lines)
