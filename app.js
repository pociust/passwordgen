var pw = "dynopass";

function showAlert(){
  alert("you clicked me");
  pwBox.innerHTML = pw;
};

genPw.addEventListener('click', showAlert);


//create an alert to set char limit 8-128


//create alert to include special char 
var specialGen = ['!', '@', '#', '$', '%', '^', '&', '*', '+', '+', '=', '{', '[', '}', ']', '<', '>', '?', '+'];

console.log(Math.floor(Math.random() * specialGen.length));

console.log(specialGen[Math.floor(Math.random() * specialGen.length)]);


//create an alert to include numbers
var numGen = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

for (var i = 0; i < numGen.length; i++){
  // Math.floor(Math.random() * 10);
}
//create an alert to include upper case

//create an alert to include lower case


//call out new password similar to showalert function



//reset settings for new password