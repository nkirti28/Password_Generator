// The Password generator will provide a password with 8-128  characters based on criteria the user specifies.

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Get references to the #copyclip element
var copyBtn = document.querySelector("#copyclip");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// variables declaration
var passwordLen = "";
var charSpecial;
var charNumber;
var charUpperCase;
var charLowerCase;

// Array declarations
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  ":",
  ";",
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// password generator function
function generatePassword() {
  // prompt to confim characters length in password
  var passwordLen = parseInt(
    prompt(
      "How many characters will your password be? Enter a number between 8 and 128"
    )
  );
  // loop until password length condition true with specified criteria
  while (passwordLen <= 7 || passwordLen >= 127) {
    alert("Your password must have atleast 8 characters. Please try again.");
    var passwordLen = parseInt(
      prompt(
        "How many characters will your password be? Enter a number between 8 and 128"
      )
    );
    console.log(passwordLen);
  } // end of while loop

  alert("Your password will contain " + passwordLen.toString() + " characters");

  // Determine password criterias
  var charNumber = confirm(
    "Click OK to confirm if you would like to include number characters"
  );
  var charSpecial = confirm(
    "Click OK to confirm if you would like to include special characters"
  );
  var charLowerCase = confirm(
    "Click OK to confirm if you would like to include lower case characters"
  );
  var charUpperCase = confirm(
    "Click OK to confirm if you would like to include upper case characters"
  );

  console.log(charNumber, charSpecial, charLowerCase, charUpperCase);

  // check condition to satisfy the above password parameters

  while (
    charNumber === false ||
    charSpecial === false ||
    charLowerCase === false ||
    charUpperCase === false
  ) {
    alert(
      "You must choose at least one number,special character,lower case character and upper case character"
    );

    var charNumber = confirm(
      "Click OK to confirm if you would like to include numeric characters"
    );
    var charSpecial = confirm(
      "Click OK to confirm if you would like to include special characters"
    );
    var charLowerCase = confirm(
      "Click OK to confirm if you would like to include lowercase characters"
    );
    var charUpperCase = confirm(
      "Click OK to confirm if you would like to include uppercase characters"
    );

    console.log(charNumber, charSpecial, charLowerCase, charUpperCase);
  } // end of while loop

  var passwordChars = [];

  if (charNumber) {
    passwordChars = passwordChars.concat(number);
  }
  if (charSpecial) {
    passwordChars = passwordChars.concat(specialChar);
  }
  if (charLowerCase) {
    passwordChars = passwordChars.concat(lowerCase);
  }
  if (charUpperCase) {
    passwordChars = passwordChars.concat(upperCase);
  }

  console.log(passwordChars);

  // empty string to be assigned to selecting random characters in for loop from passwordChars array

  var randomPassword = "";

  for (var i = 0; i < passwordLen; i++) {
    randomPassword =
      randomPassword +
      passwordChars[Math.floor(Math.random() * passwordChars.length)];
  }
  // to remove all white spaces from random password string using regex (regular expression)
  randomPassword = randomPassword.replace(/\s+/g, "").trim();
  console.log(randomPassword);

  return randomPassword;
} // end of function generate password

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
} // end of write password function

// Add event listener to copyclip button
copyBtn.addEventListener("click", copyPassword);

// copy to clipborad password function
function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  console.log(copyText);
  disableButton();
}
// change style of button after copy to clipboard
function disableButton() {
  copyBtn.innerHTML = "copied";
  copyBtn.setAttribute("style", "background-color:green");
}
