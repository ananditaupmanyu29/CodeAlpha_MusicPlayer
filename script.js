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
