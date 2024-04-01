import { history } from "./history.js";
import { printOutput } from "./print.js";
import { getSanitizedInput, playSound } from "./utils.js";

const sus = ['<br>',
  '<span class="text-neutral-600">*    .    ¨    o </span>',
  '<span class="text-neutral-600">  .    <span class="text-red-600">ඞ</span>    .  ¨ </span',
  '<span class="text-neutral-600"> ¨    ,       *</span>',
  '<br>',
]

// special functions or easter eggs if you may
export default async function handleSpecials(stdin) {
  switch (stdin.split(' ')[0]) {
    case "sudo":
      printOutput(["User is not in the sudoers file... Sorry :/"], stdin)
      break;

    case "nvim":
    case "vim":
    case "vi":
      printOutput(["Good choice! You clearly have great taste."], stdin)
      break;

    case "emacs":
      printOutput(["Command not found: emacs", "Did you mean: 'vim'?"], stdin)
      break;

    case "echo":
      const echoOutput = getSanitizedInput(stdin.split(' ').slice(1).join(' '))
      printOutput([echoOutput], stdin)
      break;

    case "history":
      printOutput(history, stdin)
      break;

    case "sus":
      printOutput(sus, stdin)
      playSound('sounds/sus-sound.mp3')
      break;

    case "whoami":
      printOutput(['<br/>', 'Who are you? Kind of a deep question to ask a terminal...', '<br/>'], stdin)
      break;

    case "reload":
    case "refresh":
    case "reboot":
      window.location.reload()
      break;

    case "clear":
      // clear the terminal
      document.querySelector('output#stdout').innerHTML = ''
      break;

    default:
      printOutput(undefined, stdin)
      break;
  }
}
