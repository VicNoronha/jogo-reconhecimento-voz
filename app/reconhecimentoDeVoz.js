const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.webkitSpeechRecognition ||
webkitSpeechRecognition;

const recognition = new SpeechRecognition() ;
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak) // Exibir tudo que eu falo no console
function onSpeak (e) {
    chute= e.results [0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmvalorValido(chute)
}
function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
         <div> Você disse <div/>
         <span class="box"> ${chute} </span>
    `
}
recognition.addEventListener('end', () => recognition.start())