import allVideos from './videos.js'

function updateVideoImage(videoID, videoUrl) {
        
        let element = document.getElementById(videoID);
        element.style.backgroundImage = 'url("' + videoUrl + '")';

}

function updateData(videoID) {

}

function handleClick(videoID, videoUrl) {
    let element = document.getElementById(videoID);
    element.addEventListener('click', function() {
        
        updateVideoImage(videoID, videoUrl);
    });
}

handleClick('vid2', "/static/images/news/LIVE NBC News NOW.jpg");

console.log(allVideos[1].url);