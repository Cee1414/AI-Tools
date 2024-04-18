import allVideos from './videos.js'

function updateVideoImage(videoID, videoUrl) {
        let element = document.getElementById(videoID);
        element.style.backgroundImage = 'url("' + videoUrl + '")';
}

function updateVideoTitle(videoID, newText) {
    let textElement = document.getElementById(videoID + '-text'); // Assuming the text element's ID is videoID followed by '-text'
    textElement.textContent = newText;
}

function extractTitle(filePath) {
    // Remove the file extension (".jpg" in this case)
    const fileNameWithoutExtension = filePath.replace(/\.[^.]+$/, '');
    // Extract the game name from the remaining path
    const title = fileNameWithoutExtension.split('/').pop();
    return title;
}


function updateChoice() {
    axios.post('/update_choice')
        .then(response => {
            console.log(response.data.message); // Log message
            console.log(response.data.full_name); // Log full name
            console.log(response.data.user_name); // Log user name
            console.log(response.data.video_url); // Log video URL
            console.log(response.data.attribute); // Log attribute
        })
        .catch(error => {
            console.error('Error retrieving session variables:', error);
        });
    
}


async function handleClick(videoID) {
    let vidNum = 'vid' + videoID.slice(5); //gets id of thumbnail

    
    let elementToPress = document.getElementById(videoID);
    elementToPress.addEventListener('click', async function() {
        try {
            await sendCurrentVideoData(videoID, updateChoice);
            randomizeVideoObjects();
            updateAllVideos();
            handleScreenNum();
        } catch (error) {
            console.error(error);
        }
        
    });
    

}

function randomVideoNum() {
    let randomNum = Math.floor(Math.random() * (allVideos.length)); // Generates random integers from 0 to arr length-1
    return randomNum;
}

function updateAllVideos() {

    updateVideoImage('vid1', video1.url);
    updateVideoImage('vid2', video2.url);
    updateVideoImage('vid3', video3.url);
    updateVideoImage('vid4', video4.url);

    updateVideoTitle('vid1', extractTitle(video1.url));
    updateVideoTitle('vid2', extractTitle(video2.url));
    updateVideoTitle('vid3', extractTitle(video3.url));
    updateVideoTitle('vid4', extractTitle(video4.url));

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
    screen1Videos = {video1, video2, video3, video4};
}

//todo make screen num funcs async



function handleScreenNum() {

    
    axios.post('/update_screen_number')
        .then(response => {
            let screenNumber = (response.data.screen_number);
            if(screenNumber % 5 === 0) {
                window.location.href = 'http://127.0.0.1:5000/user-results';
            }
            console.log(screenNumber); // Log updated screen number
            // if (screenNumber % 6 === 0) {
            //     return axios.get('/go_to_results_screen')
            //         .then(() => {
            //             console.log('Redirected to results screen');
            //         })
            //         .catch(error => {
            //             console.error('Error redirecting to results screen:', error);
            //         });
            // }
        })
        .catch(error => {
            console.error('Error retrieving session variables:', error);
        });
    
}



async function sendCurrentVideoData(videoID, callback) {
    try {
        let currentVideo = screen1Videos[videoID];
        let response = await axios.post('/update_current_video', currentVideo);
        console.log(response.data.message); // Log message
        console.log(response.data.url); // Log full name
        console.log(response.data.attribute); // Log user name
        callback();
    } catch (error) {
        console.error(error);
        throw error; // Re-throw the error for handling elsewhere if needed
    }
    
}

function updateUserImage(userImageID, userNum) {
        
    let element = document.getElementById(userImageID);
    element.style.backgroundImage = 'url("/static/images/users/' + userNum + '.png")';

}

  async function handleUserImage(callback) {
    try {
      const response = await axios.get('/check_user_image');
      const user_id = response.data.user_id;
      console.log(user_id, user_id); // Log updated user ID
      callback('user-image', user_id);
  } catch (error) {
      console.error('Error retrieving session variables:', error);
  }
  }

//initialize objects

let video1 = allVideos[randomVideoNum()];
let video2 = allVideos[randomVideoNum()];
let video3 = allVideos[randomVideoNum()];
let video4 = allVideos[randomVideoNum()];

let screen1Videos = {video1, video2, video3, video4};

//todo fixed duplicate attribut and refactor as functions
 
while ((video2.url == video1.url) || (video2.url == video3.url) || (video2.url == video4.url)){
    video2 = allVideos[randomVideoNum()];
    }

while ((video3.url == video1.url) || (video3.url == video2.url) || (video3.url == video4.url)){
    video3 = allVideos[randomVideoNum()];
}

while ((video3.url == video1.url) || (video3.url == video2.url) || (video3.url == video4.url)){
    video3 = allVideos[randomVideoNum()];
}    



//initialize videos

updateAllVideos();

//initialize user image

handleUserImage(updateUserImage);

//handle interactions

handleClick('video1', video1.url);
handleClick('video2', video2.url);
handleClick('video3', video3.url);
handleClick('video4', video4.url);