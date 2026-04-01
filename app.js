// elements

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop")
const speakBtn = document.querySelector("#speak")

// speech recognition

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

// sr start
recognition.onstart = function () {
    console.log("vr active");
};

// sr result
recognition.onresult = function (event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    // console.log(transcript);
    readOut(transcript);
};

//sr stop
recognition.onend = function (event) {

    console.log("vr dective");
};

// sr contunious
// recognition.continuous = true;

startBtn.addEventListener("click", () => {
    recognition.start();
});

stopBtn.addEventListener("click", () => {
    recognition.stop();
});

// friday speech
function readOut(message){
    const speech = new SpeechSynthesisUtterance()
// different voices
    // const voices = window.speechSynthesis.getVoices();
    speech.text = message;
    // speech.voice = voices[15];
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
    console.log('speaking out');
}

// example

speakBtn.addEventListener("click", () => {
    readOut("Hello");
})

