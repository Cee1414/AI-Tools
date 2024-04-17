function translateScrollbarContainerX(id, translateX) {
    let scrollbarContainer = document.getElementById(id);
    if (scrollbarContainer) {
        // Adjust the translation to start at the left side (starts tranlated -180px to appear at 0% of bar)
        let adjustedTranslateX = translateX - 180;
        scrollbarContainer.style.transform = `translateX(${adjustedTranslateX}px)`;
    } else {
        console.error('Scrollbar container not found.');
    }
  }
  
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

    // exit button

    function exitButton() {
      document.getElementById("exit").addEventListener("click", function() {
      // Redirect to index page
      window.location.href = "/";
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

  function updateUserIDIncrement () {
    axios.post('/increment_user_id')
    .then(response => {
        let user_id = (response.data.user_id);
        console.log('user id:', user_id); 
    })
    .catch(error => {
        console.error('Error retrieving user id:', error);
    });
  }

  function updateUserIDDecrement () {
    axios.post('/decrement_user_id')
    .then(response => {
        let user_id = (response.data.user_id);
        console.log('user id:', user_id); 
    })
    .catch(error => {
        console.error('Error retrieving user id:', error);
    });
  }


  function nextButton() {
    document.getElementById("next-button").addEventListener("click", function() {
    updateUserIDIncrement();
    window.location.reload();
    });
  }
  
  function prevButton() {
    document.getElementById("prev-button").addEventListener("click", function() {
    updateUserIDDecrement();
    window.location.reload();
    });
  }

   handleUserImage(updateUserImage);
   nextButton();
   prevButton(); 
   exitButton();
    
   updateScrollbar("your-results-scrollbar-container-one", 36)
   updateScrollbar("your-results-scrollbar-container-two", 77)
   updateScrollbar("your-results-scrollbar-container-three", 14)
   updateScrollbar("your-results-scrollbar-container-four", 59)
   updateScrollbar("your-results-scrollbar-container-five", 92)

   updateScrollbar("other's-results-scrollbar-container-one", 27)
   updateScrollbar("other's-results-scrollbar-container-two", 59)
   updateScrollbar("other's-results-scrollbar-container-three", 12)
   updateScrollbar("other's-results-scrollbar-container-four", 86)
   updateScrollbar("other's-results-scrollbar-container-five", 43)
  
    
    