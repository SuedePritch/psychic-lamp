//Global Variables

var numOfChar = 0;
//Default to strongest password
var useLower = true;
var useUpper = true;
var useNumbers = true;
var useSpecial = true;

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function createPassword() {
  // var password = generatePassword();
  
  
  //Prompts
  numOfChar = prompt('Password length')
  
  //Error handling for the prompt numOfCharacters between 8-128
  if(numOfChar < 7){
    alert('Needs to be at least 8 characters')
    createPassword();
  }else if(numOfChar > 127){
    alert('Thats too long: max 128');
    createPassword();
  }

  let useLower = confirm('Do you want to use lowercase letters')
  let useUpper = confirm('Do you want uppercase letters');
  let useNumbers = confirm('Do you want to use numbers');
  let useSpecial = confirm('Do you want to use special characters')
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);