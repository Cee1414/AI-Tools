import allVideos from './videos.js'

let video1 = allVideos[0];
let video2 = allVideos[1];
let video3 = allVideos[2];
let video4 = allVideos[3];

function updateVideoImage(videoID, videoUrl) {
        
        let element = document.getElementById(videoID);
        element.style.backgroundImage = 'url("' + videoUrl + '")';

}

function updateData(videoID) {

}


function handleClick(videoID, videoUrl) {
    let vidNum = 'vid' + videoID.slice(5); //gets id of thumbnail
    let element = document.getElementById(videoID);
    element.addEventListener('click', function() {
    updateVideoImage(vidNum, videoUrl);
    });
}


updateVideoImage('vid1', video1.url);
updateVideoImage('vid2', video2.url);
updateVideoImage('vid3', video3.url);
updateVideoImage('vid4', video4.url);

handleClick('video1', video1.url);
handleClick('video2', video2.url);
handleClick('video3', video3.url);
handleClick('video4', video4.url);


