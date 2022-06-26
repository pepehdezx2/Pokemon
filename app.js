const API = `https://pokeapi.co/api/v2/pokemon/`;
const pokemon = document.getElementById('pokeName');
const pokeList = document.getElementById('searchPokemon');
const pokeClear = document.getElementById('clearPokemon');
const appNode = document.getElementById('app');

pokeList.addEventListener('click' , addPokemon);
pokeClear.addEventListener('click' , clearPokemons);

async function addPokemon() {
  try {
    const res = await fetch(`${API}${pokemon.value.toLocaleLowerCase()}`)
    const pokeData = await res.json()
    const Items = [];
    const response = [];
    for (let pokemonInfo in pokeData) {
      response.push([pokemonInfo , pokeData[pokemonInfo]]);
    }
    const pokeImage = document.createElement('img');
    pokeImage.src = response[14][1].front_default;
    const pokeName = document.createElement('h2');
    pokeName.innerText = `Name: ${response[10][1]} - ID: ${response[6][1]}`;
    const pokeType = document.createElement('h2');
    pokeType.innerText = `Type: ${response[16][1][0].type.name}`;
    const hp = document.createElement('p');
    hp.innerText = `Hit Points: ${response[15][1][0].base_stat}`;
    hp.classList.add('pokemonStats');
    const attack = document.createElement('p');
    attack.innerText = `Attack: ${response[15][1][1].base_stat}`;
    attack.classList.add('pokemonStats');
    const defense = document.createElement('p');
    defense.innerText = `Defense: ${response[15][1][2].base_stat}`;
    defense.classList.add('pokemonStats');
    const specialAttack = document.createElement('p');
    specialAttack.innerText = `Special Attack: ${response[15][1][3].base_stat}`;
    specialAttack.classList.add('pokemonStats');
    const specialDefense = document.createElement('p');
    specialDefense.innerText = `Special Defense: ${response[15][1][4].base_stat}`;
    specialDefense.classList.add('pokemonStats');
    const speed = document.createElement('p');
    speed.innerText = `Speed: ${response[15][1][5].base_stat}`;
    speed.classList.add('pokemonStats');
    const stats = document.createElement('div');
    stats.append(hp, attack, defense, specialAttack, specialDefense, speed);
    stats.classList.add('pokemonStatsContainer');
    const cont = document.createElement('div');
    cont.append(pokeImage , pokeName ,pokeType, stats);
    cont.classList.add('cont');
    Items.push(cont);
    appNode.append(...Items);
  } catch (error) {
    alert("Pokemon not available");
  }
}

function clearPokemons() {
  let PokemonArray = appNode.childNodes;
  PokemonArray = Array.from(PokemonArray);

  PokemonArray.forEach(pokemon => {
    pokemon.remove(pokemon);
  });
}