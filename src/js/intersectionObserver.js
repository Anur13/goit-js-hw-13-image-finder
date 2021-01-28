import makeTemplate from "./templating"
import querryObj from "../utils/fetchPromise"
import getUrl from "../utils/getUrl"

const getPictures = querryObj.getPictures

export default function makeIntersectionObserver(input) {
    let options = {
        threshold: 0,
    }
    let observer = new IntersectionObserver(callback, options)
    function callback() {
        getPictures(getUrl(input, querryObj.pageNumber)).then(({ hits }) => {
            makeTemplate(hits)
        })
    }
    let target = document.querySelector(".observer")

    observer.observe(target)
}
