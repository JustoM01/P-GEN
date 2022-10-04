// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomint( min , max) {
  if (!max) {
    max = min
    min = 0
  }
  var random = Math.random()
  return Math.floor(min*(1 - random) + random * max)
}

function getrandomitem(list) {
  return list [randomint(list.length)]
}




// prompt asking user how they want there password made//
function generatePassword() {
  var UserInput = window.prompt("How many characters will your password be?");
 var PasswordLength = parseInt(UserInput)
 if(isNaN(PasswordLength)){
   window.alert("Not a number!")
   return
 }
 if (PasswordLength < 8 || PasswordLength > 128){
  window.alert("Password has to be 8 to 128 characters");
 }

 var Wantsnumbers= window.confirm("would you like numbers in password ?")
 var Wantssymbols= window.confirm("would you like symbols in your password ?")
 var WantsUppercase= window.confirm("would you like uppercase in Password?")
 var Wantslowercase= window.confirm("would you like lowercase in your password?")
 //array of values possible//
 var numbers= ["0", "1", "2" ,"3", "4" , "5" , "6" , "7" , "8" , "9"]
 var symbols= ["!", "@" , "#" , "$" , "%" , "^" , "&" , "*" ,]
 var Uppercase= ["A" , "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
 var Lowercase= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y,", "z"]
 
//stores value options for password//
 var options = []
// prompts asking user what values they want there password made of//
 if(Wantsnumbers === true) {
  options.push(numbers)
 }

 if(Wantssymbols === true) {
  options.push(symbols)
 }
 
 if(WantsUppercase === true) {
  options.push(Uppercase)
 }

 if(Wantslowercase === true) {
  options.push(Lowercase)
 }

 if (options.length === 0){
  options.push(numbers )
 }
 
 var GendPassword= ""

 for( var i = 0; i < PasswordLength; i++){
  
  var randomList= getrandomitem(options)

  var randomchar = getrandomitem(randomList)
   
  GendPassword += randomchar

 }
 return GendPassword
 
 
  

 }


 
 




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
