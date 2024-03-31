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
  
    
    