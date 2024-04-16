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

  //next button functionality

  function nextButton() {
    document.getElementById("next").addEventListener("click", function() {
    // Redirect to final-results page
    window.location.href = "/final-results";
    });
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

  //TODO: Make next button go to next set of videos


 handleUserImage(updateUserImage);
 nextButton();
 updateScrollbar("scrollbar-container-one", 28)
 updateScrollbar("scrollbar-container-two", 50)
 updateScrollbar("scrollbar-container-three", 84)
 updateScrollbar("scrollbar-container-four", 66)
 updateScrollbar("scrollbar-container-five", 12)

  
  