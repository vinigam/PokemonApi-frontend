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
    
    clearContent("pokemon-container");
    /*fetch requests in selected region */
    var pokemons = [];
    if(start > 0 && final > 0){
        /*promises */
       
        for (start ; start <= final ; start++){
            pokemons.push(
                fetch(url + start + '/').
                then(response => response.json())
            )
        }
        
        /*promises in parallel */
        Promise.all(pokemons)
        .then(pokemons =>{
            
            buildHtml(pokemons);
           
            
        })
        
    }
}

function buildHtml(pokemons){
  
    var pokemon_container = document.getElementsByClassName('pokemon-container');

    for(let start = 0; start < pokemons.length ; start++){
        
        /*Box settings*/
        var pokemon_block = document.createElement('div')
        pokemon_block.classList.add("pokemon-block");

        /*Id settings */
       
        var pokemon_id = document.createTextNode(pokemons[start].id);
        var pokemon_id_box = document.createElement('div');
        pokemon_id_box.classList.add('pokemon-id');
        pokemon_id_box.appendChild(pokemon_id);
        pokemon_block.appendChild(pokemon_id_box);

        /*Image settings */
        var pokemon_img = document.createElement("img");
        pokemon_img.classList.add('img-pokemon')
        var img = pokemons[start]['sprites']['front_default'];
        pokemon_img.setAttribute('src', img);
        pokemon_block.appendChild(pokemon_img);

        /*Name settings */
        var pokemon_name = document.createTextNode('Name : ' + pokemons[start].name);
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

        if(pokemons[start].types.length > 1){
            
            let temp = '';
            for(let i = 0 ; i < pokemons[start].types.length ; i++){
                let type = document.createTextNode(pokemons[start].types[i].type.name);
                temp = temp + ' ' + pokemons[start].types[i].type.name;
                var type_box = document.createElement('div');
                type_box.classList.add('pokemon-type');
                type_box.appendChild(type);
                type_container.appendChild(type_box)
                pokemon_block.appendChild(type_container);
                
            }

        }else{
            
            var type = document.createTextNode(pokemons[start].types[0].type.name);
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
    }
    colorType();
}
function colorType(){
    let selectColor = document.getElementsByClassName('pokemon-type');
    for(let i = 0 ; i < selectColor.length; i++){
        
        if(selectColor[i].innerHTML =="normal"){
            selectColor[i].style.backgroundColor = "#aa9";
        }else
        if(selectColor[i].innerHTML =="fire"){
            selectColor[i].style.backgroundColor = "#f42";
        }else
        if(selectColor[i].innerHTML =="water"){
            selectColor[i].style.backgroundColor = "#39f";
        }else
        if(selectColor[i].innerHTML =="electric"){
            selectColor[i].style.backgroundColor = "#fc3";
        }else
        if(selectColor[i].innerHTML =="grass"){
            selectColor[i].style.backgroundColor = "#7c5";
        }else
        if(selectColor[i].innerHTML =="ice"){
            selectColor[i].style.backgroundColor = "#6cf";
        }else
        if(selectColor[i].innerHTML =="fighting"){
            selectColor[i].style.backgroundColor = "#b54";
        }else
        if(selectColor[i].innerHTML =="poison"){
            selectColor[i].style.backgroundColor = "#a59";
        }else
        if(selectColor[i].innerHTML =="ground"){
            selectColor[i].style.backgroundColor = "#db5";
        }else
        if(selectColor[i].innerHTML =="flying"){
            selectColor[i].style.backgroundColor = "#89f";
        }else
        if(selectColor[i].innerHTML =="psychic"){
            selectColor[i].style.backgroundColor = "#f59";
        }else
        if(selectColor[i].innerHTML =="bug"){
            selectColor[i].style.backgroundColor = "#ab2";
        }else
        if(selectColor[i].innerHTML =="rock"){
            selectColor[i].style.backgroundColor = "#ba6";
        }else
        if(selectColor[i].innerHTML =="ghost"){
            selectColor[i].style.backgroundColor = "#66b";
        }else
        if(selectColor[i].innerHTML =="dragon"){
            selectColor[i].style.backgroundColor = "#76e";
        }else
        if(selectColor[i].innerHTML =="dark"){
            selectColor[i].style.backgroundColor = "#754";
        }else
        if(selectColor[i].innerHTML =="steel"){
            selectColor[i].style.backgroundColor = "#aab";
        }else
        if(selectColor[i].innerHTML =="fairy"){
            selectColor[i].style.backgroundColor = "#e9e";
        }
        
    }
}

function clearContent(className){
    let toClear = document.getElementsByClassName(className);
    toClear[0].innerHTML = "";
}
fetchPokemon("Kanto");
