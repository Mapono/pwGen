// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var lenth = 12
  for (i = 0; i < length; i++) {
  return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}

// function generatePassword(){
//   var characters = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()[]\{}|:'<>?'";
//   var length = 12;
//   for (i = 0; i < length; i++) {
//     return String.fromCharCode(Math.floor(Math.random() * 26) +97);
// }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
