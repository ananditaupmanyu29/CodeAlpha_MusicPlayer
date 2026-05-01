let audio = document.getElementById("audio");
function playSong(){
    if(audio) audio.play();
}

function nextSong(){
}

function prevSong(){
}

function setVolume(){
    let volumeBar = document.getElementById("volumeBar");
    if(audio && volumeBar){
        audio.volume = volumeBar.value / 100;
    }
}

function setProgress(){
    let progressBar = document.getElementById("progressBar");
    if(audio && progressBar){
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    }
}

if(audio){
    audio.addEventListener("timeupdate", () => {
        let progressBar = document.getElementById("progressBar");
        if(progressBar && audio.duration){
            progressBar.value = (audio.currentTime / audio.duration) * 100;
        }
    });
}

//DARK MODE
function toggleDarkMode(){
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
    } else {
        localStorage.setItem("theme","light");
    }
}

window.addEventListener("load", function(){

    if(localStorage.getItem("theme") === "dark"){
        document.body.classList.add("dark-mode");
    }

    let toggle = document.getElementById("darkToggle");
    if(toggle){
        toggle.checked = (localStorage.getItem("theme") === "dark");
    }

});
