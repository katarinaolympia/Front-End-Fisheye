function openLightbox() {
  console.log(document.querySelector(".lightbox_container"));

  document.querySelector(".lightbox_container").style.display = "flex";
}

function closeLightbox() {
  return (document.querySelector(".lightbox_container").style.display = "none");
}

function lightbox(mediasArray, indexMediaToDisplay) {
  const imageContainer = document.querySelector(".image_container");
  const firstMediaToDisplay = mediasArray[indexMediaToDisplay];

  openLightbox();
  displayMediaInLightbox(firstMediaToDisplay);

  const chevrons = document.querySelectorAll(".chevron");
  chevrons.forEach((chevron) => {
    chevron.addEventListener("click", () => {
      if (chevron.classList.contains("fa-chevron-right") === true) {
        nextPicture();
      }

      if (chevron.classList.contains("fa-chevron-left") === true) {
        previousPicture();
      }
    });
  });

  function nextPicture() {
    const textToSearch = document.querySelector(".image_text").textContent;
    const actualIndex = mediasArray.findIndex((media) => {
      return media.title === textToSearch;
    });

    if (actualIndex < mediasArray.length - 1) {
      return displayMediaInLightbox(mediasArray[actualIndex + 1]);
    }

    return false;
  }

  function previousPicture() {
    const textToSearch = document.querySelector(".image_text").textContent;
    const actualIndex = mediasArray.findIndex((media) => {
      return media.title === textToSearch;
    });

    if (actualIndex > 0) {
      return displayMediaInLightbox(mediasArray[actualIndex - 1]);
    }

    return false;
  }

  function displayMediaInLightbox(mediasToDisplay) {
    const mediaHTML = `
  ${mediasFactory(mediasToDisplay)}
  <div class="image_text">${mediasToDisplay.title}</div>`;

    imageContainer.innerHTML = mediaHTML;
    if (mediasToDisplay.video !== undefined) {
      const lightbox = document.querySelector("#lightbox");
      lightbox.querySelector(".video_media").setAttribute("controls, true");
    }

    return false;
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      return closeLightbox();
    }

    if (event.key === "ArrowRight") {
      return nextPicture();
    }

    if (event.key === "ArrowLeft") {
      return previousPicture();
    }
  });

  document
    .querySelector(".close_lightbox")
    .addEventListener("click", closeLightbox);
}
