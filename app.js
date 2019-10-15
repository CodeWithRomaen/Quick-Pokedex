// poke api : https://pokeapi.co/api/v2/pokemon/{pokemon name} -> name, id, type, weight, height



function displayData(data) {
    let info = document.querySelector('.info');
    let image = document.querySelector('.image');
    let pokemonName = document.querySelector('.name');

    info.innerHTML = 
    `<p><b>Pokedex:</b> ${data.id}</p>
    <p><b>Type:</b> ${data.types[0].type.name}</p>
    <p><b>Height:</b> ${data.height} ft</p>
    <p><b>Weight:</b> ${data.weight} lbs</p>
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

function notFound() {
    let pokemonName = document.querySelector('.name');
    pokemonName.innerHTML = 
    ` <p style="font-size: 40px; font-weight:bolder;padding: 10px">NOT FOUND</p>
      <p style='padding: 10px'>Please check spelling and search again</p>
    `
}


// function fetchData(data) {
//     let url = `https://pokeapi.co/api/v2/pokemon/${data}`;

//     fetch(url, {
//         method: 'GET',
//         mode: 'cors',
//         header : {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(function(response) {
//         if(response.status !== 200) {
//             notFound(); //function when response is 404 or something else
//         }
//         else {
//             return response.json();
//         }
//     })
//     .then(function(pokemonData) {
//         displayData(pokemonData);
//     })
// }

async function fetchData(data) {
    let url = `https://pokeapi.co/api/v2/pokemon/${data}`;

    let response = await fetch(url);

    if(response.status !== 200) {
        notFound()
    }

    let pokemonData = await response.json();
    displayData(pokemonData);
}



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
        
        clearData();
        fetchData(searchForm.value);    //sending searched item to fetchData function to get the data
        searchForm.value = '';
    });

    searchButton.addEventListener('touchstart', function(event) {
        event.preventDefault();
        
        clearData();
        fetchData(searchForm.value);    //sending searched item to fetchData function to get the data
        searchForm.value = '';
    });
}



watchForm();