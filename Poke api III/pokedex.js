const URL = "https://pokeapi.co/api/v2/pokemon/"

const searchInput = document.getElementById("search");
const pokedexContainer = document.getElementById("pokedex");

function showError(msg){
    pokedexContainer.innerHTML = `<p>${msg}</p>`
}


async function searchPokemon() {

    const searchedPokemon = searchInput.value.toLowerCase();

    try{

        const response = await fetch(URL + searchedPokemon)
        
        if(!response.ok) {
            showError(`No existe un pokemon llamado: ${searchedPokemon}`);
            return;
        }
        const data = await response.json();


        pokedexContainer.innerHTML = 
        `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.other.home.front_default} ">
        <p>Numero: ${data.id}</p>
        <p>Altura: ${data.height / 100000}m</p>
        <p>Peso: ${data.weight / 100000}kg</p>
        `
    } catch (error) {
        console.log(error);
        showError('Se ha generado un  error en la busqueda')

    }
}

document.getElementById("btn-search").addEventListener("click", searchPokemon);


