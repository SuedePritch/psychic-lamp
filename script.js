//Global Variables
var lowercase = 'abcdefghijklmnopqrstuvwxyz'
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numbers = '1234567890'
var special = '!@#$%^&*()_+{}|:"<>?-=[];,./'

var numOfChar = 0;
//Default to strongest password
var useLower = null;
var useUpper = null;
var useNumbers = null;
var useSpecial = null;

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function createPassword() {
  var newPassword = ''
  var passwordString = ''
  // var password = generatePassword();
  
  
  //Prompts
  let useLower = confirm('Do you want to use lowercase letters')
  let useUpper = confirm('Do you want uppercase letters');
  let useNumbers = confirm('Do you want to use numbers');
  let useSpecial = confirm('Do you want to use special characters')
  numOfChar = prompt('Password length')
  
  //Error handling for the prompt numOfCharacters - between 8-128
  if(numOfChar <= 7){
    alert('Needs to be at least 8 characters')
    createPassword();
  }else if(numOfChar > 127){
    alert('Thats too long: max 128');
    createPassword();
  }else{
    passwordStrength();

  }

  
  
  
  
  function passwordStrength(){
    //no selection made
    if(!useLower && !useUpper && !useNumbers && !useSpecial){
      alert('You want your password to be made of... hopes and dreams???  You gotta choose something buddy!');
      createPassword();
      //just lowercase
    }else if(useLower && !useUpper && !useNumbers && !useSpecial){
      passwordString = lowercase;
      //lower and upper - just letters
    }else if(useLower && useUpper && !useNumbers && !useSpecial){
      passwordString = lowercase.concat(uppercase);
      //lower and number
    }else if(useLower && !useUpper && useNumbers && !useSpecial){
      passwordString = lowercase.concat(numbers);

      //lower and special
    }else if(useLower && !useUpper && !useNumbers && useSpecial){
      passwordString = lowercase.concat(special);
      //lower upper and numbers
    }else if(useLower && useUpper && useNumbers && !useSpecial){
      passwordString = lowercase.concat(uppercase, numbers);
      //lower number special
    }else if(useLower && !useUpper && useNumbers && useSpecial){
      passwordString = lowercase.concat(numbers, special);
      //lower upper and special
    }else if(useLower && useUpper && !useNumbers && useSpecial){
      passwordString = lowercase.concat(uppercase, special);
      //lower upper number special - all 4
    }else if(useLower && useUpper && useNumbers && useSpecial){
      passwordString = lowercase.concat(uppercase, numbers, special);

      //no lowercase
      //just upper
    }else if(!useLower && useUpper && !useNumbers && !useSpecial){
      passwordString = uppercase;
      //upper number
    }else if(!useLower && useUpper && useNumbers && !useSpecial){
      passwordString = uppercase.concat(numbers);
      //upper special
    }else if(!useLower && useUpper && !useNumbers && useSpecial){
      passwordString = uppercase.concat(special);
      //upper number special
    }else if(!useLower && useUpper && useNumbers && useSpecial){
      passwordString = uppercase.concat(numbers, special);

      //no letters
      //just numbers
    }else if(!useLower && !useUpper && useNumbers && !useSpecial){
      passwordString = numbers;
      //numbers special
    }else if(!useLower && !useUpper && useNumbers && useSpecial){
      passwordString = numbers.concat(special);
      //just special
    }else if(!useLower && !useUpper && !useNumbers && useSpecial){
      passwordString = special;
    }else{
      alert('something went wrong')
    }
    console.log(passwordString);
    return passwordString;
  }


  for (var i = 0; i <= numOfChar; i++) {
    var randomChar = Math.floor(Math.random() * passwordString.length);
    newPassword += passwordString.charAt(randomChar);
    console.log(newPassword)
  }
  passwordText.value = newPassword;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);