// // Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "0123456789";
var specialCharacters = "~!@#$%^&*()<>?/{[,.}]"
availableCharacters = "";

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  let passwordLength = parseInt(
    prompt(
      "Please type how many characters between 8 and 128 you want for your password"
    ),
    10
  );
  if (Number.isNaN(passwordLength)) {
    alert("Must provide a password length between 8 and 128");
    return null;
  }
  if (passwordLength < 8) {
    alert(
      "Password must be greater than 8. Please Choose a number between 8 and 128"
    );
    return generatePassword();
    console.log(passwordLength);
  }
  if (passwordLength > 128) {
    alert(
      "Password must be less than 128. Please Choose a number between 8 and 128"
    );
    return generatePassword();
    console.log(passwordLength);
  }
  var getLowerCase = confirm(
    "Click okay to confirm you want lowercase letters"
  );
  if (getLowerCase === true) {
    availableCharacters = availableCharacters + lowerCaseLetters
  }

  var getUpperCase = confirm(
    "Click okay to confirm you want uppercase letters"
  );
  if (getUpperCase === true) {
    availableCharacters = availableCharacters + upperCaseLetters
  }

  var getNumbers = confirm(
    "Click okay to confirm you want nummeric characters"
  );
  if (getNumbers === true) {
    availableCharacters = availableCharacters + numericCharacters
  }

  var getSpecialCharacters = confirm(
    "Click okay to confirm you want special characters"
  );
  if (getSpecialCharacters === true) {
    availableCharacters = availableCharacters + specialCharacters
  }

  console.log(getSpecialCharacters);
  if (
    getLowerCase &&
    getUpperCase &&
    getNumbers &&
    getSpecialCharacters === false
  ) {
    alert("Must choose at least one condition");
    x();
  } else {
    
    console.log(availableCharacters[Math.floor(Math.random() * availableCharacters.length)]);
    var randomPass=""
    for (let i = 0; i < passwordLength; i++) {
    element = availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
    randomPass+=element
    console.log(randomPass)
    
  }return randomPass
}}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
