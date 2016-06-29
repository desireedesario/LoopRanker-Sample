$(document).ready(function() {


    // loop

    var myPokemon = ["Pikachu", "Charmander", "Charizard", "Butterfree", "Growlithe", "Rapidash", "Krabby", "Gyarados", "Vaporeon", "Jolteon", "Flareon", "Articuno", "Zapdos", "Moltres", "Mewtwo", "Mew"];

    /* var myPokeImage ["img/pikachu.png","img/charamander.png","charizard.png","butterfree.png", "growlithe.png","krabby.png","gyarados.png","vaporeon.png","jolteon.png","flareon.png","articuno.png","zapdos.png","moltres.png","mewtwo.png","mew.png"]; 
     */
    for (var i = 0; i < myPokemon.length; i++) {

        $(".pokeList").append("<li class='myPokemon' item-id='" + i + "'>" + myPokemon[i] + "</li>");

    }

    //calculator

    function calculatorv2(input1, input2, operation) {

        if (operation == "+") {
            return input1 + input2;
        } else if (operation == "-") {
            return input1 - input2;
        } else if (operation == "*") {
            return input1 * input2;
        } else if (operation == "/") {
            return input1 / input2;
        }
    }


    $(".button").click(function() {
        var inputOne = parseInt($("#input1").val());
        var inputTwo = parseInt($("#input2").val());
        var operation = $(this).attr("id");

        var results = calculatorv2(inputOne, inputTwo, operation);
        $("#results").html(results);
    });

    //Pokemon Ranking

    var myPoke = {};
    myPoke.name = "Pikachu";
    myPoke.image = "/img/foo.png";

    var pokemon = [
        ["Pikachu", "./img/pikachu.png"],
        ["Charmander", "./img/charamander.png"],
        ["Charizard", "./img/charizard.png"],
        ["Butterfree", "./img/butterfree.png"],
        ["Growlithe", "./img/growlithe.png"],
        ["Rapidash", "./img/rapidash.png"],
        ["Gengar", "./img/gengar.png"],
        ["Gyarados", "./img/gyarados.png"],
        ["Mewtwo", "./img/mewtwo.png"],
        ["Mew", "./img/mew.png"]
    ];

    for (var i = 0; i < pokemon.length; i++) {

        $("#pokedex").append("<li class='pokemon'><img src='" + pokemon[i][1] + "' />" + pokemon[i][0] + "</li>");

    }

    //Makes Items Sortable

    $("#pokedex").sortable();
    $("#pokedex").disableSelection();

    //grab pokemon ranking

    var pokerank = [];

    //this will take all elements in the class of pokedexresults when they are clicked

    $("#pokedexResult").click(function() {

        $("#rankResults").html('');

        //this is going to create a new array that the user inputted

        $("#pokedex").each(function(i) {

            var currPokemon = $(this).html();
            pokerank[i] = currPokemon;

        });

        var len = pokerank.length;

        for (var i = 0; i < len; i++) {

            $("#rankResults").append("<li class='pokedex'>" + pokerank[i] + "</li>");
        }

    });
});