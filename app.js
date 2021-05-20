function fetchPokemon(region_name){
    /*Select pokemons per region */
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    let start = 0; final = 0;

    if(region_name =="Kanto"){
        start = 1 ; final = 151;
    }
    if(region_name == "Johto"){
        start = 152 ; final = 251;
    }
    if(region_name == "Hoenn"){
        start = 252 ; final = 386;
    }
    if(region_name == "Sinnoh"){
        start = 387 ; final = 493;
    }
    if(region_name == "Unova"){
        start = 494 ; final = 649;
    }
    if(region_name == "Kalos"){
        start = 650 ; final = 721;
    }
    if(region_name == "Alola"){
        start = 722 ; final = 809;
    }
    if(region_name == "Galar"){
        start = 810 ; final = 898;
    }
    
    /*fetch requests in selected region */
    const pokemons = [];
    if(start > 0 && final > 0){
        var pokemon_container = document.getElementsByClassName('pokemon-container');
        for (start ; start <= final ; start++){
            const fetchPokemon = fetch(url + start + '/')
                .then((response) =>{
                    return response.json();
                })
                .then(response =>{
                    /*Creating a pokemon box with info */
                    pokemons.push(response);

                    /*Box settings*/
                    var pokemon_block = document.createElement('div')
                    pokemon_block.classList.add("pokemon-block");
                    /*Image settings */
                    var pokemon_img = document.createElement("img");
                    var img = response['sprites']['front_default'];
                    pokemon_img.setAttribute('src', img);

                    /*Name settings */
                    var pokemon_name = document.createTextNode(response.name);

                    /*Adding to html*/
                    pokemon_block.appendChild(pokemon_img);
                    pokemon_block.appendChild(pokemon_name);
                    pokemon_container[0].appendChild(pokemon_block);
                    
                })
        }
    }
}

fetchPokemon("Sinnoh");
