const form = document.querySelector("#searchForm");

// prevent default behavior
form.addEventListener('submit', async function(e) {
    e.preventDefault();

    let searchTerm = document.querySelector('input').value;
    console.log(searchTerm);

    const config = {params: { q: searchTerm }, headers: {} }
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=`, config);
    createImage(res.data)
})

const createImage = (shows) => {
    for(let result of shows){
            if(result.show.image !== null){
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}