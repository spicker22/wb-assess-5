import { Op } from 'sequelize';
import { Animal, Human } from './model.js';

// Get the human with the primary key 2
export const query1 = await Human.findByPk(2);
//console.log(query1);

// Get the first animal whose species is "fish"
export const query2 = await Animal.findAll({
    where: { species:"fish"}
  });
//console.log(query2);

// Get all animals belonging to the human with primary key 5                
export const query3 = await Animal.findAll({
    where: {humanId: 5 }
  });
  //console.log(query3);

// Get all animals born in a year greater than (but not equal to) 2015.
export const query4 = await Animal.findAll({
    where: {birthYear: {[Op.gt]: 2015}}
  });
//console.log(query4);

// Get all the humans with first names that start with "J"
export const query5 = await Human.findAll({
    where: {fname: {[Op.startsWith]: 'J'}}
  });
  //console.log(query5);

// Get all the animals who don't have a birth year
export const query6 = await Animal.findAll({
    where: {birthYear: {[Op.is]: null}}
  });
//console.log(query6);

// Get all the animals with species "fish" OR "rabbit"
export const query7 = await Animal.findAll({
    where: { species: {[Op.or]: ['fish' , 'rabbit']} }
  });
//console.log(query7);


// Get all the humans who DON'T have an email address that contains "gmail"
export const query8 = await Human.findAll({
    where: {email: {[Op.notLike]:'%gmail%'}}
  });
//console.log(query8);







// SQL code that pulls humans and associated animals

// SELECT h.human_id, a.name
// FROM humans AS h
//     LEFT JOIN animals AS a
//         ON h.human_id = a.human_id
// ORDER BY h.human_id;


















export async function printHumansAndAnimals() {

    // Create a results array - success
    const results = []

    // Get all humans from db (the table humans are in)
    const humans = await Human.findAll();



    // Nested for loop - there will be 2 loops

    // 1st loop - get first name and last name of human
    for (const human of humans) {
        
        // Console log example of 1 of the columns
        // console.log(human.fname);    // Console log results -> Bob Jane Jasime John Jane
       
        // Push as single index to results array using (.push)
        const arrayResults = results.push(human.fname)
        console.log(arrayResults);      // Console log results ->  1 2 3 4 5



        // Option 1 -> use something similar to query 3 to get animals -> should return an array
        // Option 2 -> Do sequelize method to get all animals assoicated with human -> should return an array

        // Using Option 1 -> Get all animals belonging to the human (similar to query 3) 
        const getAnimals = await Animal.findAll({
            where: {humanId : arrayResults}
            });
        // console.log(getAnimals);        // Console log results ->  animal object assoicated with each human, according to the array index
        
        const extractedAnimalId = getAnimals.map(obj =>  obj['animalId'] );
        // console.log(extractedAnimalId);        // Console log results ->  animal object assoicated with each human, according to the array index


        // next -> loop over that array (will be over animal objects) & get name and sepecies
        // for (const animal of extractedAnimalId) {
        //     getAnimals.

    }


 


    // // Each human is returned with the assoicated animal
    // const humans = await Human.findAll( {include: Animal} );

    // //For loop to get humans and each animal
    // for (const human of humans) {
        
    //     const animal = human.Animal;

    //     const animals = await Animal.findAll( {include: Human} );

    //     for (const animal of animals) {

    //         const human = animal.Human;

    //         console.log( human.fname + " " + human.lname, animal.name, animal.species);
    //     }
    // }
}
printHumansAndAnimals()





// Hints - Psuecode

// create a results array
// get all humans from db (the table humans are in)

// will create nested for loop (for loop in a for loop)

// for first iteration(for loop), get first name and last name of human
// push it to as single index to results array (.push)
// note: do console logging

// do sequelize method to get all animals assoicated with human -> should return an array
// note: could get the get method that is inheritly built in 
// or you do something like query3

// next -> loop over that array (will be over animal objects)
// get name of animal & species
// make it its own index, push it to the results array

// log that array, after joining it together

// in that join, the value we will be joining it on, is a new line
// (need to figure out whats the character combination to add new line)































// // Return a Set containing the full names of all humans with animals of the given species.
// export async function getHumansByAnimalSpecies(species) {

//     // Humans will come with each animal
//     const animals = await Animal.findAll({ include: Human });    

//     // Creating a Set called 'humans'
//     const humans = new Set();

//     // Adding items to the 'humans' set
//     humans.add(animals);

//     // Using the setHuman() method
//     species.setHuman();
// }

// // Console logging the 'getHumansByAnimalSpecies' function with the 'dog' item. 
// console.log(await getHumansByAnimalSpecies('dog') );

// // get full name 






// notes
// get list of animals of certain species
// then -> loop over those animals, will get an ide of human assoicated of that animal
// then write new query using that id to get the human name
// once have the human name, add that to the set











// SQL code that pulls the species, human id, human first name, human last name 

// SELECT a.species, h.human_id, h.fname, h.lname
// FROM animals AS a   
//     LEFT JOIN humans AS h   
//         ON a.human_id = h.human_id
// ORDER BY species ASC;














