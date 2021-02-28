/*
 Declaration of variables
We build multiple arrays, holding every posible combination:
1. nothing but numbers and special characters
2. lower case
3.  numbers and slecial characters
4. all combinations including upper case letters.
*/


// Declaration of variables
var stringNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '&'];
var stringLow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var stringUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var stringAll = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', , '!', '@', '#', '$', '%', '&', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var stringNoUp = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '&', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var stringNoLow = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '&', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var charNumber = 0;
var upperCharacter = "Upper";
var lowerCharacter = "Lower";
var numCharacter = "Numbers";
var ranMultiplier = 0;
var string = [];
var index = 0;
var finalPassword = [];
var f_finalPassword = " ";



// Assignment Code 
var generateBtn = document.querySelector("#generate");

// Generate passeword and write password to the #password input

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    // passwordText.value = password;
    passwordText.value = "Please don't share your password with anyone.";
}

//Created the function generatePassword(), I used the while loop so that I could both collect data from user and validate as I collect.
function generatePassword() {

    while (charNumber < 8 || charNumber > 128) {
        charNumber = prompt("Please let us know the number of characters you would like your password to be, from 8 to 128.");
    }
    console.log(charNumber);

    while (upperCharacter !== "Y" && upperCharacter !== "N") {
        upperCharacter = prompt("Would you like to use Upper Case Characters in your password? Y for Yes, N for no");
    }
    console.log(upperCharacter);

    while (lowerCharacter !== "Y" && lowerCharacter !== "N") {
        lowerCharacter = prompt("Would you like to use Lower Case Characters in your password? Y for Yes, N for no");
    }
    console.log(lowerCharacter);

    while (numCharacter !== "Y" && numCharacter !== "N") {
        numCharacter = prompt("Would you like to use Numbers and Special Characters in your password? Y for Yes, N for no");
    }
    console.log(numCharacter);


    // Once I collected data from the user, I select the correct combination and loop through an empty array adding value from one of the prebuild array using a randomly generated number as the index.

    if (numCharacter == "Y" && upperCharacter == "N" && lowerCharacter == "N") {
        ranMultiplier = 13;
        for (i = 0; i < charNumber; i++) {
            index = Math.floor(Math.random() * ranMultiplier);
            finalPassword[i] = stringNum[index];
        }
    } else if (numCharacter == "Y" && upperCharacter == "Y" && lowerCharacter == "N") {
        ranMultiplier = 45;
        for (i = 0; i < charNumber; i++) {
            index = Math.floor(Math.random() * ranMultiplier);
            finalPassword[i] = stringNoLow[index];
        }

    } else if (numCharacter == "Y" && upperCharacter == "Y" && lowerCharacter == "Y") {
        ranMultiplier = 63;
        for (i = 0; i < charNumber; i++) {
            index = Math.floor(Math.random() * ranMultiplier);
            finalPassword[i] = stringAll[index];
        }


    } else if (numCharacter == "Y" && upperCharacter == "N" && lowerCharacter == "Y") {
        ranMultiplier = 45;
        for (i = 0; i < charNumber; i++) {
            index = Math.floor(Math.random() * ranMultiplier);
            finalPassword[i] = stringNoUp[index];
        }


    } else if (numCharacter == "N" && upperCharacter == "N" && lowerCharacter == "Y") {
        ranMultiplier = 30;
        for (i = 0; i < charNumber; i++) {
            index = Math.floor(Math.random() * ranMultiplier);
            finalPassword[i] = stringLow[index];
        }


    } else if (numCharacter == "N" && upperCharacter == "Y" && lowerCharacter == "N") {
        ranMultiplier = 30;
        for (i = 0; i < charNumber; i++) {
            index = Math.floor(Math.random() * ranMultiplier);
            finalPassword[i] = stringUp[index];
        }


    } else if (numCharacter == "Y" && upperCharacter == "N" && lowerCharacter == "N") {
        ranMultiplier = 11;
        for (i = 0; i < charNumber; i++) {
            index = Math.floor(Math.random() * ranMultiplier);
            finalPassword[i] = stringNum[index];
        }


    }

    var f_finalPassword = finalPassword.join(' ');
    password = f_finalPassword;
    alert("Your passowrd is: " + password);
    console.log(finalPassword);
    console.log(f_finalPassword);
    console.log(password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);