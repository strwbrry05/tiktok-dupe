const goForward = document.querySelector('.goForward');
const goBack = document.querySelector('.goBack');
const videoPlayback = document.querySelector('.videoPlayback');

goForward.addEventListener('click', nextVideo);
goBack.addEventListener('click', previousVideo);

let videoNum = 1;
const maxNum = 5;

function nextVideo() {
    videoNum++;
    if (videoNum === maxNum) {
        videoNum = 1;
    }
    videoPlayback.innerHTML = `<video width="320px" src="media/${videoNum}.mp4"  
        autoplay 
        loop
        playsinline
    ></video>`
}

function previousVideo() {
    videoNum--;
    if (videoNum === 0) {
        videoNum = maxNum-1;
    }
    videoPlayback.innerHTML = `<video width="320px" src="media/${videoNum}.mp4" 
        controls
        autoplay 
        playsinline 
        loop
    ></video>`

}