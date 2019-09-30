let pw = '';




//create an alert to set char limit 8-128

//create alert to include special char 
// let passLength = prompt('how many characters do you want your password to be?');

const specialGen = ['!', '@', '#', '$', '%', '^', '&', '*', '+', '+', '=', '{', '[', '}', ']', '<', '>', '?', '+'];

function generatePassword(){
  pw =''
  for (i = 0; i < document.getElementById("passwordSlide").value; i++){
    //select random specailgen
    pw = pw.concat(specialGen[Math.floor(Math.random() * specialGen.length)]);
  }
  document.getElementById("pwBox").innerHTML = pw;
  console.log(pw);
};

document.getElementById("genPw").addEventListener('click', generatePassword);


//create an alert to include numbers



//create an alert to include upper case

//create an alert to include lower case


//call out new password similar to showalert function



//reset settings for new password