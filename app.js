const goForward = document.querySelector('.goForward');
const goBack = document.querySelector('.goBack');
const videoPlayback = document.querySelector('.videoPlayback');

goForward.addEventListener('click', nextVideo);
goBack.addEventListener('click', previousVideo);

let videoNum = 1;

function nextVideo() {
    videoNum++;
    if (videoNum === 4) {
        videoNum = 1;
    }
    videoPlayback.innerHTML = `<video width="320px" src="media/${videoNum}.mp4"  
        autoplay 
        loop
    ></video>`
}

function previousVideo() {
    videoNum--;
    if (videoNum === 0) {
        videoNum = 3;
    }
    videoPlayback.innerHTML = `<video width="320px" src="media/${videoNum}.mp4" 
        controls
        autoplay 
        webkit-playsinline 
        playsinline 
        loop
    ></video>`

}