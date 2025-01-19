const goForward = document.querySelector('.goForward');
const goBack = document.querySelector('.goBack');
const videoPlayback = document.querySelector('.videoPlayback');
const tally = document.querySelector('.video-tally');

goForward.addEventListener('click', nextVideo);
goBack.addEventListener('click', previousVideo);

let videoNum = 1;
const maxNum = 6;

function nextVideo() {
    videoNum++;
    if (videoNum === maxNum) {
        videoNum = 1;
    }
    videoPlayback.innerHTML = `<video width="320px" src="media/${videoNum}.mp4"  
        autoplay 
        loop
        playsinline
    ></video>`;
    tally.textContent = `${videoNum}/${maxNum - 1}`;
    
}

function previousVideo() {
    videoNum--;
    if (videoNum === 0) {
        videoNum = maxNum-1;
    }
    videoPlayback.innerHTML = `<video width="320px" src="media/${videoNum}.mp4" 
        autoplay  
        loop
        playsinline
    ></video>`;
    tally.textContent = `${videoNum}/${maxNum - 1}`;

}