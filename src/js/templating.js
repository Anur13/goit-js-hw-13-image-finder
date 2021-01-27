import makeGallery from "../templates/gallery.hbs"
import fetchImg from "../utils/fetchPromise"
import refs from "./refs"

export default function makeGal(arr) {
    const galleryMarkUp = makeGallery(arr)
    refs.galleryRef.insertAdjacentHTML("beforeend", galleryMarkUp)
}

// fetchImg.getPictures("dog").then((result) => {
//     makeGal(result.hits), console.log(result.hits)
// })
