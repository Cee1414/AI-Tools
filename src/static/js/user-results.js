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
  let paragraph = document.querySelector('.scrollbar-container p');
      paragraph.textContent = percentage + '%';
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