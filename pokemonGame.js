const inquirer = require('inquirer');
const playGame = () => {
    inquirer 
        .prompt([{
            type: 'input',
            message: 'What is your trainer name?',
            name: 'trainerName'
        },
        {
            type: 'password', // If you put input it will show the password
            message: 'Set your password',
            name: 'password'
        },
        {
            type: "list",
            message: 'Choose your starter pokemon!',
            choices: ['Bulbasaur', 'Squirtle','Charmander','Pikachu','Reggie'],
            name: 'pokemon'
        }    
    ])
    .then(res => { //this is looking for the response from up top. The res parameter can be named anything
        inquirer
            .prompt([{
                type: 'input',
                message: `What would you like to name your ${res.pokemon}`,
                name: 'pokemonName'
            }]) .then(inqRes => { // this looks for the response from res it can also be named anything it just needs to be different than res. Both are built in functions so the name doesn't matter it just looking for the parameter
                let trainerName = res.trainerName;
                let trainerPokemon = res.pokemon;
                let pokemonName = inqRes.pokemonName;
                console.log(`Welcome ${res.trainerName}`);
                console.log(`Your ${trainerPokemon}, ${pokemonName} is ready for batlle`);
                console.log(`A wild caterpie appeared!`);
                console.log(`${trainerName}, called ${pokemonName}`);
                let pokemon_hp = 50;
                let cat_hp = 30;
                const batlleSequence = (pokemon_hp, cat_hp, pokemonName) => {
                    
                }
            })
    })
}
playGame();