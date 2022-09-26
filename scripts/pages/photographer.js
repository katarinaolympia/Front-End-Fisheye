// Récupérer des données des photographes avec (fetch)
// Récupérer id de l'url et tri du tableau pour obtenir les photographers (URLSearchParams)
// Récupérer l'objet photographer par extraction du tableau photographers.json (.find)

fetch("./photographers.json")
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    let searchParams = new URLSearchParams(window.location.search);

    const photographerId = searchParams.get("id");

    const photographers = result.photographers;

    const medias = result.media;

    const photographerInfo = photographers.find((photographer) => {
      if (photographer.id === Number(photographerId)) {
        return photographer;
      }
    });

    const photographerMedias = medias.filter((media) => {
      if (media.photographerId === Number(photographerId)) {
        return media;
      }
    });

    photographerToDisplay(photographerInfo);
    mediasToDisplay(photographerMedias);
  });

// Afficher header photographer

function photographerToDisplay(photographerInfo) {
  const { name, id, city, country, tagline, price, portrait } =
    photographerInfo;

  const picture = `./assets/photographers/${portrait}`;

  const photographerName = document.getElementById("header_photographer_name");
  photographerName.insertAdjacentHTML("afterbegin", name);

  const photographerPicture = document.getElementById("photographer_picture");
  photographerPicture.setAttribute("src", picture);
  photographerPicture.setAttribute("alt", name);

  const photographerCity = document.getElementById("photographer_city");
  photographerCity.insertAdjacentHTML("afterbegin", city);

  const photographerCountry = document.getElementById("photographer_city");
  photographerCountry.insertAdjacentHTML("beforeend", country);

  const photographerTagline = document.getElementById("photographer_tagline");
  photographerTagline.insertAdjacentHTML("afterbegin", tagline);

  const photograherPrice = document.getElementById("photographer_price");
  photograherPrice.insertAdjacentHTML("beforebegin", price);

  // modal Photographer Name
  const ModalPhotographerName = document.getElementById(
    "modal_photographer_name"
  );
  ModalPhotographerName.insertAdjacentHTML("afterbegin", name);

  return true;
}

// Tri de sélection

const popularityOption = document.getElementById("popularity_option");
const dateOption = document.getElementById("date_option");
const titleOption = document.getElementById("title_option");
popularityOption.addEventListener("click", openSelection);
function openSelection() {
  dateOption.classList.toggle("hidden_option");
  titleOption.classList.toggle("hidden_option");
  dateOption.style.borderTop = "1px solid white";
  dateOption.style.borderBottom = "1px solid white";
}
window.addEventListener("click", (e) => {
  if (e.target !== popularityOption) {
    dateOption.classList.add("hidden_option");
    titleOption.classList.add("hidden_option");
  }
});

// Afficher la galerie

function mediasFactory(media) {
  if (media.image !== undefined) {
    return createImage(media);
  }

  return createVideo(media);
}

function createImage(data) {
  return `<img src="./assets/medias_photographer/${data.image}" class="photography" alt="${data.title}" />`;
}

function createVideo(data) {
  return `
     
        <video alt="${data.title}" class="photography">
            <source src="./assets/medias_photographer/${data.video}" type="video/mp4">
        </video>
        
    `;
}

function mediasToDisplay(mediasArray) {
  let html = "";
  mediasArray.forEach((media) => {
    html += `
    <article>
    
        ${mediasFactory(media)}

        <div class="media_description">
            <span role="title" class="media_title">${media.title}</span>
              <div class="media_like_div">
              <span class="media_like_number" aria-label="likes">${media.likes}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="media_like" width="15" height="16" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>
            </div>
        </div>
    </article>
    
    `;
  });

  document.querySelector(".photo_gallery").innerHTML = html;

  const medias = document.querySelectorAll(".photography");
  medias.forEach((media, mediaIndex) => {
    media.addEventListener("click", () => {
      return lightbox(mediasArray, mediaIndex);
    });
  });

  const likeButtons = document.querySelectorAll(".media_like");
  likeButtons.forEach((like) => {
    like.addEventListener("click", function () {
      return addLike(this);
    });
  });

  let isLiked = false;
  let sum = 0;
  function addLike(likeButton) {
    let heartNumber = likeButton.previousElementSibling;
    if (isLiked === false) {
      heartNumber.textContent = Number(heartNumber.textContent) + 1;
      
      return (isLiked = true);
    }
    heartNumber.textContent = Number(heartNumber.textContent) - 1;
    return (isLiked = false);
  }

  function totalLikes(likeButton) {
    likeButton.forEach(() => {
    sum += Number(heartNumber.textContent);
  });
  console.log(sum);
  sum.insertAdjacentHTML(
    "afterbegin",
    document.querySelector("#total_like_number")
  );}

  totalLikes();

}
