// Chesedh Flauta
// UV 7L
// March 16, 2023

import { v4 as uuidv4 } from 'uuid'
import validator from 'validator'
import { appendFileSync } from 'node:fs'

function generateUniqueID(firstName, lastName) {    // Input parameters: first name (string), last name (string)
    return firstName[0].toLowerCase()               // first letter of the first name (converted to lowercase)
            + lastName.toLowerCase()                // last name (converted to lowercase)
            + uuidv4().substring(0, 8)              // “unique” alphanumeric string of length 8
}

function addAccount(accountArr) { 
    const firstName = accountArr[0]
    const lastName = accountArr[1]
    const email = accountArr[2]
    const age = accountArr[3]

    if (accountArr.length < 4) {                    // all fields are present
        return false
    } else if (firstName.trim() == "" 
                && lastName.trim() == "" 
                && email.trim() == "") {            // the first name, last name, and email are non-empty strings
        return false
    } else if (!validator.isEmail(email)) {         // the email is in a valid format (use the validator package)
        return false
    } else if (age < 18) {                          // age is at least 18
        return false
    }

    // first name,last name,email,age,uniqueID
    accountArr.push(generateUniqueID(firstName, lastName))

    // save the data into a new line of file called users.txt
    try {
        appendFileSync('users.txt', accountArr.toString() + "\n");
    } catch (err) {
        return false                                // failed to save user
    }

    return true                                     // user is saved
}

// export functions
export { addAccount }