export default {
    pageNumber: 1,

    getPictures(querry) {
        return fetch(querry).then((response) => response.json())
    },
}
