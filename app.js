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

                    /*Id settings */
                    var pokemon_id = document.createTextNode('ID : ' + response.id);
                    var pokemon_id_box = document.createElement('div');
                    pokemon_id_box.classList.add('pokemon-id');
                    pokemon_id_box.appendChild(pokemon_id);
                    pokemon_block.appendChild(pokemon_id_box);

                    /*Image settings */
                    var pokemon_img = document.createElement("img");
                    var img = response['sprites']['front_default'];
                    pokemon_img.setAttribute('src', img);
                    pokemon_block.appendChild(pokemon_img);

                    /*Name settings */
                    var pokemon_name = document.createTextNode('Name : ' + response.name);
                    var pokemon_name_box = document.createElement('div');
                    pokemon_name_box.classList.add('pokemon-name');
                    pokemon_name_box.appendChild(pokemon_name)
                    pokemon_block.appendChild(pokemon_name_box);
                    
                    /*Type settings */
                    var tag_box = document.createElement('div');
                    tag_box.classList.add('tag');
                    var tag = document.createTextNode('Type(s) :');
                    tag_box.appendChild(tag);
                    pokemon_block.appendChild(tag_box);
                    
                    var type_container = document.createElement('div');
                    type_container.classList.add('type-container');

                    if(response.types.length > 1){
                        
                        let temp = '';
                        for(let i = 0 ; i < response.types.length ; i++){
                            let type = document.createTextNode(' ' + response.types[i].type.name);
                            temp = temp + ' ' + response.types[i].type.name;
                            var type_box = document.createElement('div');
                            type_box.classList.add('pokemon-type');
                            type_box.appendChild(type);
                            type_container.appendChild(type_box)
                            pokemon_block.appendChild(type_container);
                        }

                    }else{
                        
                        var type = document.createTextNode(response.types[0].type.name);
                        var type_box = document.createElement('div');
                        type_box.classList.add('pokemon-type');
                        type_box.appendChild(type);
                        type_container.appendChild(type_box);
                        pokemon_block.appendChild(type_container);
                    }
                    /*More info settings */
                    var btn_info = document.createElement('div');
                    btn_info.classList.add('btn-info');
                    var btn_text = document.createTextNode('More info');
                    btn_info.appendChild(btn_text);
                    pokemon_block.appendChild(btn_info);
                    /*Adding to html*/
                    
                    
                    
                    pokemon_container[0].appendChild(pokemon_block);
                    
                })
        }
    }
}

fetchPokemon("Sinnoh");
