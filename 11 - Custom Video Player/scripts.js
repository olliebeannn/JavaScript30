document.addEventListener("DOMContentLoaded", function() {
    
    console.log("Loaded!");
    
    // Get elements
    const vid = document.querySelector('video');
    console.log(vid);
    
    const play = document.querySelector('button[title="Toggle Play"]');
    console.log(play);
    
    const progressContainer = document.querySelector('.progress');
    console.log(progressContainer);
    
    const progress = document.querySelector('.progress__filled');
    console.log(progress);
    
    const volume = document.querySelector('input[name="volume"]');
    console.log(volume);
    
    const speed = document.querySelector('input[name="playbackRate"]');
    console.log(speed);
    
    const back10 = document.querySelector('button[data-skip="-10"]');
    console.log(back10);
    
    const forward25 = document.querySelector('button[data-skip="25"]');
    console.log(forward25);
    
    // Handling functions
    function setProgress() {
        let percentage = vid.currentTime / vid.duration * 100;
        
        progress.style.flexBasis = `${percentage}%`;
    }
    
    function seek(e) {
        // Calculate click position relative to duration, convert to time
        let position = e.clientX - progressContainer.getBoundingClientRect().x;
        // console.log(`clientX: ${e.clientX}, bounding: ${e.target.getBoundingClientRect().x}`);
        // console.log(e.target);
        
        // Convert relative position to time
        let newTime = parseInt(position / progressContainer.offsetWidth * vid.duration);
        
        console.log(`position: ${position}, new time: ${newTime}`);
        
        // Update time of video
        vid.currentTime = newTime;
        
        // setProgress()? or not necessary with other event listener?
    }
    
    function togglePlay() {
        if(vid.paused) { 
            vid.play(); 
        }
        else { 
            vid.pause(); 
        }
    }
    
    function setVolume() {
        vid.volume = this.value;
    }
    
    function setPlaybackSpeed() {
        vid.playbackRate = this.value;
    }
    
    function skip() {
        if(this === back10) {
            vid.currentTime -= 10;
        } 
        else if (this === forward25) {
            vid.currentTime += 25;
        }
        else {
            console.log("Error!");
        }
    }
    
    // Hook up event listeners
    play.addEventListener("click", togglePlay);
    
    volume.addEventListener("input", setVolume);
    
    speed.addEventListener("input", setPlaybackSpeed);
    
    back10.addEventListener("click", skip);
    
    forward25.addEventListener("click", skip);
    
    vid.addEventListener("timeupdate", setProgress);
    
    progressContainer.addEventListener("click", seek);
});