document.addEventListener("DOMContentLoaded", function() {
    
    console.log("Loaded!");
    
    // Get elements
    const vid = document.querySelector('video');
    console.log(vid);
    
    const play = document.querySelector('button[title="Toggle Play"]');
    console.log(play);
    
    const volume = document.querySelector('input[name="volume"]');
    console.log(volume);
    
    const speed = document.querySelector('input[name="playbackRate"]');
    console.log(speed);
    
    const back10 = document.querySelector('button[data-skip="-10"]');
    console.log(back10);
    
    const forward25 = document.querySelector('button[data-skip="25"]');
    console.log(forward25);
    
    // Handling functions
    function togglePlay() {
        if(vid.paused) { 
            vid.play(); 
        }
        else { 
            vid.pause(); 
        }
    }
    
    // Hook up event listeners
    play.addEventListener("click", togglePlay);
    
});