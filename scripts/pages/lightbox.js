/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function openLightbox() {
	document.querySelector(".lightbox_container").style.display = "flex"
}

function closeLightbox() {
	return (document.querySelector(".lightbox_container").style.display = "none")
}

function lightbox(mediasArray, mediaIndex) {
	const imageContainer = document.querySelector(".image_container")
	const firstMediaToDisplay = mediasArray[mediaIndex]

	openLightbox()
	displayMediaInLightbox(firstMediaToDisplay)

	const chevrons = document.querySelectorAll(".chevron")
	chevrons.forEach((chevron) => {
		chevron.addEventListener("click", () => {
			if (chevron.classList.contains("fa-chevron-right") === true) {
				nextPicture()
			}

			if (chevron.classList.contains("fa-chevron-left") === true) {
				previousPicture()
			}
		})
	})

	function nextPicture() {
		const textToSearch = document.querySelector(".image_text").textContent
		const actualIndex = mediasArray.findIndex((media) => {
			return media.title === textToSearch
		})

		if (actualIndex < mediasArray.length - 1) {
			return displayMediaInLightbox(mediasArray[actualIndex + 1])
		}

		return false
	}

	function previousPicture() {
		const textToSearch = document.querySelector(".image_text").textContent
		const actualIndex = mediasArray.findIndex((media) => {
			return media.title === textToSearch
		})

		if (actualIndex > 0) {
			return displayMediaInLightbox(mediasArray[actualIndex - 1])
		}

		return false
	}

	function displayMediaInLightbox(mediasToDisplay) {
		const mediaHTML = `
      ${mediasFactory(mediasToDisplay)}
      <div class="image_text">${mediasToDisplay.title}</div>`

		imageContainer.innerHTML = mediaHTML
		if (mediasToDisplay.video !== undefined) {
			const lightbox = document.querySelector(".lightbox_container")
			lightbox.querySelector(".video_media").setAttribute("controls", true)
		}

		return false
	}

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			return closeLightbox()
		}

		if (event.key === "ArrowRight") {
			return nextPicture()
		}

		if (event.key === "ArrowLeft") {
			return previousPicture()
		}
	})

	const closeButton = document.querySelector(".close")
	closeButton.addEventListener("keydown", (event) => {
		if (event.key === "Enter") {
			return closeLightbox()
		}
	})

	document
		.querySelector(".close_lightbox")
		.addEventListener("click", closeLightbox)
}
