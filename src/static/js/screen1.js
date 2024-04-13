

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

handleUpdate('vid2', 'static/images/news/ABC World News Tonight with David Muir-resized.jpg')