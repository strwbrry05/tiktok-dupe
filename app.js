const goForward = document.querySelector('.goForward');
const goBack = document.querySelector('.goBack');
const videoPlayback = document.querySelector('.videoPlayback');
const tally = document.querySelector('.video-tally');

goForward.addEventListener('click', nextVideo);
goBack.addEventListener('click', previousVideo);

let videoNum = 1;
const maxNum = 11; // change to +1 of max videos

let isChecked = false;
console.log(isChecked);

function nextVideo() {
    videoNum++;
    if (videoNum === maxNum) {
        videoNum = 1;
    }

    if (isChecked) {
        videoPlayback.innerHTML = `<video width="320px" src="stsg/${videoNum}.mp4"  
        autoplay 
        loop
        playsinline
    ></video>`;
    } else {
        videoPlayback.innerHTML = `<video width="320px" src="media/${videoNum}.mp4"  
        autoplay 
        loop
        playsinline
    ></video>`;
    }
    
    
}

function previousVideo() {
    videoNum--;
    if (videoNum === 0) {
        videoNum = maxNum-1;
    }
    
    if (isChecked) {
        videoPlayback.innerHTML = `<video width="320px" src="stsg/${videoNum}.mp4"  
        autoplay 
        loop
        playsinline
    ></video>`;
    } else {
        videoPlayback.innerHTML = `<video width="320px" src="media/${videoNum}.mp4"  
        autoplay 
        loop
        playsinline
    ></video>`;
    }

}

const stsgBtn = document.querySelector('#stsgBtn');
const stsgLabel = document.querySelector('#stsgLabel');

stsgBtn.addEventListener('change', changeMode);

function changeMode() {
    if (this.checked) {
        isChecked = true;
        console.log(isChecked);
        stsgLabel.textContent = 'enabled';
    } else {
        isChecked = false;
        console.log(isChecked);
        stsgLabel.textContent = 'disabled';
    }
}