// Assignment Code
var generateBtn = document.querySelector("#generate");

var length = 8;

var upper = ['A','B','C','D','E','F','G','H','I','J','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var lower = ['a','b','c','d','e','f','g','h','i','j','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var special = ['!','@','#','$','%','^','&','*','()','<>','?'];



// Write password to the #password input
function generatePassword(){
  console.log("Generate password button works");

 var passwordLength = prompt("Choose password length 8 - 128");
    console.log(passwordLength);

 var upperCase = confirm("Would you like Upper case characters");
    console.log(upperCase);

var lowerCase = confirm("Would you like lower case characters");
    console.log(lowerCase);
  
var specialChar = confirm("Would you like special characters");
    console.log(specialChar);

  return "Generated password goes here";

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
