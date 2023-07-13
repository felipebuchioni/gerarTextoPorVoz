window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.continuous = true
recognition.lang = 'pt-br'

const playBtn = document.getElementById('play') 
const stopBtn = document.getElementById('stop')
const abortBtn = document.getElementById('abort')
const removeBtn = document.getElementById('remove')
const body = document.body

playBtn.addEventListener('click', () => {
  playBtn.disabled = true
  playBtn.classList.add('disabled')
  stopBtn.disabled = false
  stopBtn.classList.remove('disabled')
  stopBtn.classList.add('active')
  abortBtn.disabled = false
  abortBtn.classList.remove('disabled')
  abortBtn.classList.add('stop')

  recognition.start()

  const textArea = document.createElement('div')
  textArea.classList.add('text')

  recognition.onresult = (event) => {
    let index = event.resultIndex
    const fala = event.results[index][0].transcript
    textArea.innerHTML += fala  
  }

  body.appendChild(textArea)
})

stopBtn.addEventListener('click', () => {
  playBtn.disabled = false
  playBtn.classList.remove('disabled')
  stopBtn.disabled = true
  stopBtn.classList.add('disabled')
  stopBtn.classList.remove('active')
  abortBtn.disabled = true
  abortBtn.classList.remove('stop')
  abortBtn.classList.add('disabled')

  recognition.stop()
})

abortBtn.addEventListener('click', () => {
  recognition.abort()
  playBtn.disabled = false
  playBtn.classList.remove('disabled')
  stopBtn.disabled = true
  stopBtn.classList.add('disabled')
  stopBtn.classList.remove('active')
  abortBtn.disabled = true
  abortBtn.classList.remove('stop')
  abortBtn.classList.add('disabled')
})

removeBtn.addEventListener('click', () => {
  const textosClass = document.getElementsByClassName('text')
  console.log(textosClass.length)

  for(i = 0; i < textosClass.length; i++) {
    body.removeChild(textosClass[i])
  }
})





