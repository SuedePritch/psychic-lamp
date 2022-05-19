//Global Variables

var numOfChararacters = 0;
//Default to strongest password
var useLower = true;
var useUpper = true;
var useNumbers = true;
var useSpecial = true;

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  
  
  //Adding Prompts
  numOfChararacters = prompt('Password length')
  let useLower = confirm('Do you want to use lowercase letters')
  let useUpper = confirm('Do you want uppercase letters');
  let useNumbers = confirm('Do you want to use numbers');
  let useSpecial = confirm('Do you want to use special characters')
  
  // passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);