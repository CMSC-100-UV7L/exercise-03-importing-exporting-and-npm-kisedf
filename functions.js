import { v4 as uuidv4 } from 'uuid'

function generateUniqueID(firstName, lastName) {
    return firstName[0].toLowerCase() 
            + lastName.toLowerCase() 
            + uuidv4().substring(0, 8)
}

console.log(generateUniqueID("Alan", "Turing"))