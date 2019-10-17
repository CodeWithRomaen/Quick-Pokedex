
// helper functions being used 
function getHeight(height) {
    return (parseInt(height,10)/10);
}
function getWeight(weight) {
    return (parseInt(weight,10)/10);
}
function notFound() {
    let pokemonName = document.querySelector('.name');
    pokemonName.innerHTML = 
    ` <p style="font-size: 40px; font-weight:bolder;padding: 10px">NOT FOUND</p>
      <p style='padding: 10px'>Please check spelling and search again</p>
    `
}





// function to display the retrieved data to the DOM 
function displayData(data) {
    let info = document.querySelector('.info');
    let image = document.querySelector('.image');
    let pokemonName = document.querySelector('.name');

    info.innerHTML = 
    `<p><b>Pokedex ID :</b> ${data.id}</p>
    <p><b>Type :</b> ${data.types[0].type.name.toUpperCase()}</p>
    <p><b>Height :</b> ${getHeight(data.height)} m</p>
    <p><b>Weight :</b> ${getWeight(data.weight)} kg</p>
    <a href="https://www.pokemon.com/us/pokedex/${data.name}" target="_blank"><button>MORE</button></a>`

    function getImageID(value) {
        let lead = '000';
        let pokeID = data.id;
        let imageID = lead.slice(pokeID.toString().length) + data.id;
        return imageID;
    }


    image.innerHTML = 
    `<img src="${`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getImageID(data.id)}.png`}" alt="image of pokemon" width="300px">`

    pokemonName.innerHTML = 
    ` <p style="font-size: 42px; font-weight:bolder;">${data.name.toUpperCase()}</p>`
}








// function to fetch the required data based on given seach input 
function fetchData(data) {
    let url = `https://pokeapi.co/api/v2/pokemon/${data}`;

    fetch(url)
    .then(function(response) {
        if(response.status !== 200) {
            notFound(); //function when response is 404 or something else
        }
        else {
            return response.json();
        }
    })
    .then(function(pokemonData) {
        displayData(pokemonData);
    })
}






// function to clear out search field 
function clearData() {
    let info = document.querySelector('.info');
    let image = document.querySelector('.image');
    let pokemonName = document.querySelector('.name');

    info.innerHTML = '';
    image.innerHTML = '';
    pokemonName.innerHTML = '';
}






// checking to see if search button is triggered
function watchForm() {
    let searchButton = document.querySelector('#search-button');
    let searchForm = document.querySelector('#search-input');

    searchForm.value = '';

    searchButton.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();

        clearData();
        fetchData(searchForm.value.toLowerCase());    //sending searched item to fetchData function to get the data
        searchForm.value = '';
    });

}



watchForm();