function translateScrollbarContainerX(translateX) {
    let scrollbarContainer = document.querySelector('.scrollbar-container');
    if (scrollbarContainer) {
      scrollbarContainer.style.transform = `translateX(${translateX}px)`;
    } else {
      console.error('Scrollbar container not found.');
    }
    //in this function 1.8px is 1% ex(90px is 50%)
  }

  function updateParagraphsPercentage(percentage) {
    let paragraphs = document.querySelectorAll('.scrollbar-container p');
    for (let i = 0; i < 1; i++) {
  paragraphs[i].textContent = percentage + '%';
  
  }
  //TODO Change function name
  //the for loop only iterates once so function name is incorrect
  }

  function convertPercentageToPixel (percentage) {
    return percentage * 1.8;
  }

  function updateScrollbar(percentage) {
    let pixels = convertPercentageToPixel(percentage);
    translateScrollbarContainerX(pixels)
    updateParagraphsPercentage(percentage);

  }

  // TODO: make function to automatically calculate the percentage based on pixels moved

  updateScrollbar(50);