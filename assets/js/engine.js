const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input")
const keysCheck = document.querySelector(".checkbox");


let mapedKeys = [];
let audio = new Audio("/assets/tunes/a.wav");

const playTune = (key) => {
    audio.src = `/assets/tunes/${key}.wav`; 
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};



pianoKeys.forEach((key)=>{
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (ev) => {
    if(mapedKeys.includes(ev.key)){
        playTune(ev.key);
    }
});

const showHideKeys = () =>{
    pianoKeys.forEach((key) => key.classList.toggle("hide"));
}

const handleVolume = (ev) =>{
    audio.volume = ev.target.value
};

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys);