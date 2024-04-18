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

  async function updateUserTextNum () {
    let userText = document.getElementById("user-text");
    try {
      let response = await axios.get('/check_user_image');
      let number = response.data.user_id; // Assuming the number is in the response data
  
      userText.textContent += number;
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error, if needed
    }
  }

  function updatePlayerScrollBar () {
    axios.get('/query_sql')
        .then(response => {
            let attribute_percentages_dict = (response.data.attribute_percentages_dict);
            
            updateScrollbar("your-results-scrollbar-container-one", attribute_percentages_dict['news'] || 0)
            updateScrollbar("your-results-scrollbar-container-two", attribute_percentages_dict['educational'] || 0)
            updateScrollbar("your-results-scrollbar-container-three", attribute_percentages_dict['sports'] || 0)
            updateScrollbar("your-results-scrollbar-container-four", attribute_percentages_dict['gaming'] || 0)
            updateScrollbar("your-results-scrollbar-container-five", attribute_percentages_dict['fashionbeauty'] || 0)
            console.log(attribute_percentages_dict); 
        })
        .catch(error => {
            console.error('Error retrieving session variables:', error);
        });
  }

  function updateCombinedAveragesScrollBar () {
    axios.get('/query_sql_combined')
        .then(response => {
            let average_attribute_percentages = (response.data.average_attribute_percentages);
            
            updateScrollbar("other's-results-scrollbar-container-one", average_attribute_percentages['news'] || 0)
            updateScrollbar("other's-results-scrollbar-container-two", average_attribute_percentages['educational'] || 0)
            updateScrollbar("other's-results-scrollbar-container-three", average_attribute_percentages['sports'] || 0)
            updateScrollbar("other's-results-scrollbar-container-four", average_attribute_percentages['gaming'] || 0)
            updateScrollbar("other's-results-scrollbar-container-five", average_attribute_percentages['fashionbeauty'] || 0)
            console.log(average_attribute_percentages); 
        })
        .catch(error => {
            console.error('Error retrieving session variables:', error);
        });
  }

   updateUserTextNum();
   handleUserImage(updateUserImage);
   nextButton();
   prevButton(); 
   exitButton();
    
   updatePlayerScrollBar();

   updateCombinedAveragesScrollBar();
    
    