import querryObj from "../utils/fetchPromise"

export default {
    pageNumber: 1,

    getPictures(querry) {
        return fetch(querry).then((response) => response.json(), (querryObj.pageNumber += 1))
    },
}
