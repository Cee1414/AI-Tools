import allVideos from './videos.js'

let video1 = allVideos[randomVideoNum()];
let video2 = allVideos[randomVideoNum()];
let video3 = allVideos[randomVideoNum()];
let video4 = allVideos[randomVideoNum()];

function updateVideoImage(videoID, videoUrl) {
        
        let element = document.getElementById(videoID);
        element.style.backgroundImage = 'url("' + videoUrl + '")';

}

function updateData(videoID) {

}


// function handleClick(videoID, videoUrl) {
//     let vidNum = 'vid' + videoID.slice(5); //gets id of thumbnail

    
//     let elementToPress = document.getElementById(videoID);
//     elementToPress.addEventListener('click', function() {
//     updateVideoImage(vidNum, videoUrl);
//     });


// }
// WORKS FOR ONE VIDEO

function handleClick(videoID) {
    let vidNum = 'vid' + videoID.slice(5); //gets id of thumbnail

    
    let elementToPress = document.getElementById(videoID);
    elementToPress.addEventListener('click', function() {
        updateAllVideos();
    });


}

function randomVideoNum() {
    let randomNum = Math.floor(Math.random() * (allVideos.length)); // Generates random integers from 0 to arr length-1
    return randomNum;
}


function updateAllVideos() {
    randomizeVideoObjects();

    updateVideoImage('vid1', video1.url);
    updateVideoImage('vid2', video2.url);
    updateVideoImage('vid3', video3.url);
    updateVideoImage('vid4', video4.url);

}

function randomizeVideoObjects() {
    //todo check if attribute is already taken or if same as prev video

    //todo refactor while loop
    let prevUrl = video1.url
    video1 = allVideos[randomVideoNum()];
    while (video1.url == prevUrl || (video1.url == video2.url) || (video1.url == video3.url) || (video1.url == video4.url)){
        video1 = allVideos[randomVideoNum()];
    }
    prevUrl = video2.url
    while (video2.url == prevUrl || (video2.url == video1.url) || (video2.url == video3.url) || (video2.url == video4.url)){
    video2 = allVideos[randomVideoNum()];
    }
    prevUrl = video3.url
    while (video3.url == prevUrl || (video3.url == video1.url) || (video3.url == video2.url) || (video3.url == video4.url)){
    video3 = allVideos[randomVideoNum()];
    }
    prevUrl = video4.url
    while (video4.url == prevUrl || (video4.url == video1.url) || (video4.url == video3.url) || (video4.url == video2.url)){
    video4 = allVideos[randomVideoNum()];
    }
}


//initialize videos

while ((video2.url == video1.url) || (video2.url == video3.url) || (video2.url == video4.url)){
    video2 = allVideos[randomVideoNum()];
    }

while ((video3.url == video1.url) || (video3.url == video2.url) || (video3.url == video4.url)){
    video3 = allVideos[randomVideoNum()];
}

while ((video3.url == video1.url) || (video3.url == video2.url) || (video3.url == video4.url)){
    video3 = allVideos[randomVideoNum()];
}    



updateVideoImage('vid1', video1.url);
updateVideoImage('vid2', video2.url);
updateVideoImage('vid3', video3.url);
updateVideoImage('vid4', video4.url);




handleClick('video1', video1.url);
handleClick('video2', video2.url);
handleClick('video3', video3.url);
handleClick('video4', video4.url);




