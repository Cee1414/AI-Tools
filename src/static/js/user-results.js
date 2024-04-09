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

  //TODO: Make next button go to next set of videos


 nextButton();
 updateScrollbar("scrollbar-container-one", 28)
 updateScrollbar("scrollbar-container-two", 50)
 updateScrollbar("scrollbar-container-three", 84)
 updateScrollbar("scrollbar-container-four", 66)
 updateScrollbar("scrollbar-container-five", 12)

  
  