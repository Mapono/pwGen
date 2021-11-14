// Assignment Code
var generateBtn = document.querySelector("#generate");


var Uchar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var Lchar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var Schar = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@",'[',']',"^",'_',"`","{","|","}","~","\\"]
var Nchar = [0,1,2,3,4,5,6,7,8,9]
  
var charSet = []
var length =[]

function alert1(){
  var uppercase = confirm("Should your password contain Uppercase Letters?");
  console.log(uppercase)
}
function alert2(){
  var lowercase = confirm("Should your password contain Lowercase Letters?");
  console.log(lowercase)
}
function alert3(){
  var numbers = confirm("Should your password contain Numbers?");
  console.log(numbers)
}
function alert4(){
  var spchar = confirm("Should your password contain Special characters?");
  console.log(spchar)
}
function alert5(){
  alert("You password must contain one of the following:\nUppercase letters\nLowercase letters\nNumbers\nSpecial characters");
} 
function alert6(){
  alert("Your password must have a length between 8 and 128 characters.")
}


//password requirments:Lower Upper Number Special
function generatePassword() {
  var charSet = []
  console.log(charSet); 
  var length = prompt("Please choose a password length between 8 & 128 characters");
  console.log(length);
  if (length >= 8 && length <=128) {
    var uppercase = confirm("Should your password contain Uppercase Letters?");
    console.log(uppercase)
    var lowercase = confirm("Should your password contain Lowercase Letters?");
    console.log(lowercase) 
    var numbers = confirm("Should your password contain Numbers?");
    console.log(numbers)
    var spchar = confirm("Should your password contain Special characters?");
    console.log(spchar)
  }
  else{
    alert6();
    generatePassword();
  }
  if (uppercase == false && lowercase == false && numbers == false && spchar == false) {
    alert5();
    generatePassword();
  }
  if (uppercase == true){
    charSet =
    charSet.concat(Uchar)
    console.log(charSet)
  }
  if(lowercase == true){
    charSet = 
    charSet.concat(Lchar)
    console.log(charSet)
  }
  if (numbers == true){
    charSet = 
    charSet.concat(Nchar)
    console.log(charSet)
  }
  if (spchar == true){
    charSet = 
    charSet.concat(Schar)
    console.log(charSet)
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

return result.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
