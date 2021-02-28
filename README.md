# Password-Generator

I decided to use array variables for the combination (character combination), I would then loop through them using a random number generator for the index.


// Declaration of variables
var stringNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '&'];
var stringLow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var stringUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var stringAll = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', , '!', '@', '#', '$', '%', '&', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var stringNoUp = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '&', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var stringNoLow = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '&', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// If then and loop logic

//Created the function geberatePassword()
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

Screen Shots of the app:
