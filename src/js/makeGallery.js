import refs from "./refs"
import notify from "./pnotify"
import makeTemplate from "./templating"
import debounce from "lodash.debounce"
import querryObj from "../utils/fetchPromise"
import "lightbox2/src/css/lightbox.css"
import "lightbox2/dist/js/lightbox-plus-jquery"
import InfiniteScroll from "infinite-scroll"
import getUrl from "../utils/getUrl"
import makeIntersectionObserver from "./intersectionObserver"

const getPictures = querryObj.getPictures

let input = ""
refs.InputRef.addEventListener("input", debounce(makeGallery, 500))
function makeGallery(event) {
    input = event.target.value
    refs.galleryRef.innerHTML = ""
    getPictures(getUrl(input, querryObj.pageNumber)).then(({ hits }) => {
        makeTemplate(hits)

        querryObj.pageNumber += 1
        makeIntersectionObserver(input)
    })

    refs.galleryRef.addEventListener("click", openModal)

    function openModal(event) {
        if (event.target.nodeName === "IMG") {
            event.preventDefault()
            const imgId = event.target.getAttribute("alt")
            event.target.parentNode.setAttribute("data-lightbox", imgId)
        }
    }
}

// Прогрузка кнопкой
// refs.loadmoreButnRef.addEventListener("click", loadPics)

// function loadPics() {
//     getPictures(getUrl(input, querryObj.pageNumber)).then(({ hits }) => {
//         makeTemplate(hits)
//         querryObj.pageNumber += 1
//         window.scrollTo({
//             left: 0,
//             top: document.body.scrollHeight,
//             behavior: "smooth",
//         })
//         console.log(document.body.scrollHeight)
//     })
// }
