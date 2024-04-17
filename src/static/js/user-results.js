function translateScrollbarContainerX(id, translateX) {
  let scrollbarContainer = document.getElementById(id);
  if (scrollbarContainer) {
      // Adjust the translation to start at the left side (starts tranlated -180px)
      let adjustedTranslateX = translateX - 180;
      scrollbarContainer.style.transform = `translateX(${adjustedTranslateX}px)`;
  } else {
      console.error('Scrollbar container not found.');
  }
}

// function updateParagraphsPercentage(percentage) {
//   let paragraph = document.querySelector('.scrollbar-container p');
//       paragraph.textContent = percentage + '%';
// }

function updateParagraphsPercentage(id, percentage) {
      let element = document.getElementById(id);
      let paragraph = element.querySelector('p');
      paragraph.textContent = percentage + '%';
}


  function convertPercentageToPixel (percentage) {
    return percentage * 3.55;
  }

  function updateScrollbar(id, percentage) {
    let pixels = convertPercentageToPixel(percentage);
    translateScrollbarContainerX(id, pixels)
    updateParagraphsPercentage(id, percentage);

  }

  //TODO FIX UPDATEUSERID

  function updateUserID () {
    axios.post('/increment_user_id')
    .then(response => {
        let user_id = (response.data.user_id);
        console.log('user id:', user_id); 
    })
    .catch(error => {
        console.error('Error retrieving user id:', error);
    });
  }

  function nextButton() {
    document.getElementById("next").addEventListener("click", function() {
    updateUserID();
    checkScreenNum();
    });
  }

  function updateUserImage(userImageID, userNum) {
        
    let element = document.getElementById(userImageID);
    element.style.backgroundImage = 'url("/static/images/users/' + userNum + '.png")';

}

function checkScreenNum () {
  axios.get('/check_screen_number')
        .then(response => {
            let screenNumber = (response.data.screen_number);
            if(screenNumber === 25) {
                window.location.href = 'http://127.0.0.1:5000/final-results';
            }
            else {
              window.location.href = "/screen1";
            }
            console.log(screenNumber); 
        })
        .catch(error => {
            console.error('Error retrieving session variables:', error);
        });
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

  async function updateUserTextNum () {
    let userText = document.getElementById("user-text");
    try {
      let response = await axios.get('/check_user_image');
      let number = response.data.user_id; // Assuming the number is in the response data
  
      userText.textContent += number +':';
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error, if needed
    }
  }


 updateUserTextNum();
 handleUserImage(updateUserImage);
 nextButton();
 updateScrollbar("scrollbar-container-one", 28)
 updateScrollbar("scrollbar-container-two", 50)
 updateScrollbar("scrollbar-container-three", 84)
 updateScrollbar("scrollbar-container-four", 66)
 updateScrollbar("scrollbar-container-five", 12)

  
  