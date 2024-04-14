import allVideos from './videos.js'

function updateVideoImage(videoID, videoUrl) {
        
        let element = document.getElementById(videoID);
        element.style.backgroundImage = 'url("' + videoUrl + '")';

}

function updateData(videoID) {

}

function handleClick(videoID, videoUrl) {
    let vidNum = 'vid' + videoID.slice(5); //gets id of thumbnail
     
    console.log(vidNum); // Output: "vid2 for video2" 


    let element = document.getElementById(videoID);
    element.addEventListener('click', function() {
        
        updateVideoImage(vidNum, videoUrl);
    });
}

handleClick('video1', "/static/images/news/LIVE NBC News NOW.jpg");
handleClick('video2', "/static/images/news/LIVE NBC News NOW.jpg");
handleClick('video3', "/static/images/news/LIVE NBC News NOW.jpg");
handleClick('video4', "/static/images/news/LIVE NBC News NOW.jpg");


