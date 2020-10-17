// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Create a variable for the text box where we want to put our new password
  var passwordText = document.querySelector("#password");
  // Declare the variable newPassword so that it will be global
  var newPassword;

  // Create the funciton that will generate the random password
  function generatePassword() {
    // Ask the user how many characters they want the password to be
    var length = prompt("How many characters would you like your password to contain? (8-128 characters)");
    // If they input a number less than 8 and greater than 128 then alert then and ask them again 
    while (length < 8 || length > 128) {
      alert("Please choose a length greater than 8 characters and less that 128 characters.");
      length = prompt("How many characters would you like your password to contain? (8-128 characters)");
    };
    while (isNaN(length) === true) {
      alert("Please type in a NUMBER between 8 and 128.");
      length = prompt("How many characters would you like your password to contain? (8-128 characters)");
    };

    // Ask they about the characters they'd like to include
    var doLowercase = confirm("If you would like lowercase letters in your password, click OK.");
    var doUppercase = confirm("If you would like uppercase letters in your password, click OK.");
    var doNumbers = confirm("If you would like numbers in your password, click OK.");
    var doSpecial = confirm("If you would like special characters in your password, click OK.");

    // Make variables for all the characters we will choose from
    var lowLetters = "abcdefghijklmnopqrstuvwxyz";
    var upLetters = "ABCDEFGHIJKLMNOP";
    var numbers = "123456789";
    var specials = "!\"\#\$\%\&\'()*+,-./:;<=>?@][\\^_`{|}~";

    // Create an empty string to store the types of characters the user wants
    var chosenCharacters = "";

    // Make newPassword an empty string so we can fill it with characters
    newPassword = "";

    // Concat the character types that the user wants into chosenCharacters
    if (doLowercase === true) {
      chosenCharacters = chosenCharacters.concat(lowLetters);
    };
    if (doUppercase === true) {
      chosenCharacters = chosenCharacters.concat(upLetters);
    };
    if (doNumbers === true) {
      chosenCharacters = chosenCharacters.concat(numbers);
    };
    if (doSpecial === true) {
      chosenCharacters = chosenCharacters.concat(specials);
    };

    // Randomly select characters from chosenCharacters and add each new character to newPassword until it reaches the length that the user chose
    for (i = 0; i < length; i++) {
      var charType = chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
      newPassword = newPassword + charType;
    };
  };
  // Call on the funciton
  generatePassword()
  // Place the newPassword into the text box
  passwordText.value = newPassword; 
};





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);