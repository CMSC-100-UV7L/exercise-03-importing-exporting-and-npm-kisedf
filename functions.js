// Chesedh Flauta
// UV 7L
// March 16, 2023

import { v4 as uuidv4 } from 'uuid'

function generateUniqueID(firstName, lastName) {    // Input parameters: first name (string), last name (string)
    return firstName[0].toLowerCase()               // first letter of the first name (converted to lowercase)
            + lastName.toLowerCase()                // last name (converted to lowercase)
            + uuidv4().substring(0, 8)              // “unique” alphanumeric string of length 8
}

function addAccount(accountArr) { 

}

console.log(generateUniqueID("Alan", "Turing"))