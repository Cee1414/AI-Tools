function translateScrollbarContainerX(translateX) {
  let scrollbarContainer = document.querySelector('.scrollbar-container');
  if (scrollbarContainer) {
      // Adjust the translation to start at the left side (starts tranlated -180px)
      let adjustedTranslateX = translateX - 180;
      scrollbarContainer.style.transform = `translateX(${adjustedTranslateX}px)`;
  } else {
      console.error('Scrollbar container not found.');
  }
}

  function updateParagraphsPercentage(percentage) {
    let paragraphs = document.querySelectorAll('.scrollbar-container p');
    for (let i = 0; i < 1; i++) {
  paragraphs[i].textContent = percentage + '%';
  
  }
  //TODO Change function name and make it work for all scrollbars, not just the first one
  //the for loop only iterates once so function name is incorrect
  }

  function convertPercentageToPixel (percentage) {
    return percentage * 3.55;
  }

  function updateScrollbar(percentage) {
    let pixels = convertPercentageToPixel(percentage);
    translateScrollbarContainerX(pixels)
    updateParagraphsPercentage(percentage);

  }

    function updateScrollbar(percentage) {
    let pixels = convertPercentageToPixel(percentage);
    translateScrollbarContainerX(pixels)
    updateParagraphsPercentage(percentage);

  }


  updateScrollbar(50);