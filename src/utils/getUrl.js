export default function getUrl(querry, page) {
    const key = "19970182-43374a871d90ac8a22fd423a0"
    const url = "https://pixabay.com/api/?image_type=photo&orientation=horizontal&q="
    const urlParam = `&page=${page}&per_page=9&key=`
    return url + querry + urlParam + key
}
