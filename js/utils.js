export function getSanitizedInput(input) {
  // sanitize the input from code injection or xss
  // return sanitized input
  const sanitizedInput = document.createElement('div')
  sanitizedInput.innerText = input
  return sanitizedInput.innerHTML
}
export function delay(ms) {
  // ms is a number value of how many milliseconds the delay will last
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function keepFocus(element) {
  // function for keeping the text input in focus at all times
  await delay(500)
  element.focus({ focusVisible: true })
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
