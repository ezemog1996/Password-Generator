// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    var length = prompt("How many characters would you like your password to contain? (8-128 characters)");
    while (length < 8 || length > 128) {
      alert("Please choose a length greater than 8 characters and less that 128 characters.");
      length = prompt("How many characters would you like your password to contain? (8-128 characters)");
    };
    var doLowercase = confirm("Would you like lowercase letters in your password?");
    var doUppercase = confirm("Would you like uppercase letters in your password?");
    var doNumbers = confirm("Would you like numbers in your password?");
    var doSpecial = confirm("Would you like special characters in your password?");

    var letters = "abcdefghijklmnopqrstuvwxyz";
    var upLetters = "ABCDEFGHIJKLMNOP";
    var numbers = "123456789";
    var specials = " !\"\#\$\%\&\'()*+,-./:;<=>?@][\\^_`{|}~";
    var newPassword = "";

    var allCharacters = [letters, upLetters, numbers, specials];

    var everyChar = allCharacters[Math.floor(Math.random() * 2)];

    for (i = 0; i < length; i++) {
      if (doLowercase === true && doUppercase === true && doNumbers === true && doSpecial === true) {
        var charType = allCharacters[Math.floor(Math.random() * 4)];
        var char = charType.charAt(Math.floor(Math.random() * charType.length));
        newPassword = newPassword + char;
      };
      
      
      // else if (doLowercase === "Y" && doUppercase === "Y" && doNumbers === "Y" && doSpecial === "N") {
      //   var charType = allCharacters[Math.floor(Math.random() * 1)]
      // }
      // else if (doLowercase === "Y" && doUppercase === "Y" && doNumbers === "N" && doSpecial === "Y") {

      // }
      // else if (doLowercase === "Y" && doUppercase === "N" && doNumbers === "Y" && doSpecial === "Y") {
        
      // }
      // else if (doLowercase === "N" && doUppercase === "Y" && doNumbers === "Y" && doSpecial === "Y") {
        
      // }
      // else if (doLowercase === "Y" && doUppercase === "Y" && doNumbers === "N" && doSpecial === "N") {
        
      // }
      // else if (doLowercase === "Y" && doUppercase === "N" && doNumbers === "N" && doSpecial === "Y") {
        
      // }
      // else if (doLowercase === "N" && doUppercase === "N" && doNumbers === "Y" && doSpecial === "Y") {
        
      // }
      // else if (doLowercase === "Y" && doUppercase === "N" && doNumbers === "Y" && doSpecial === "N") {
        
      // }
      // else if (doLowercase === "N" && doUppercase === "Y" && doNumbers === "N" && doSpecial === "Y") {
        
      // }
    }
    console.log(newPassword);
  }

  passwordText.value = password;
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create prompts that will ask the user how longer they want the password to be and whether they would like lowercase, uppercase, numeric, and/or special characters
// Create a variable with the string of letters and a variable with the string of special characters that will be randomly selected from
// Create a variable using Math.random to refer to the numbers that can be randomly selected from
// Put these variables into an array
// When each character of the password is being created, it should randomly select what type of character it will be, then it should randomly select the character itself
// Math.random will be used multiple times in order to do this