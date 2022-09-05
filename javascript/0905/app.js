const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm }, isFunny: 'jake' }
    const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
    makeImages(res.data)
    // const img = document.createElement('img');
    // img.src = res.data[0].show.image.medium;
    // document.body.append(img)
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}