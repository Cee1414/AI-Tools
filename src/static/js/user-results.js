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

 updateScrollbar("scrollbar-container-one", 50)

  
  