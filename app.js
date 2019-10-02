
//create alert to incluner('click', generatePassword);

let basicPassword = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']; 
const numberGen = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const specialGen = ['!', '@', '#', '$', '%', '^', '&', '*', '+', '+', '=', '{', '[', '}', ']', '<', '>', '?', '+'];
function generatePassword(){
  let tempPassword = basicPassword
  if (document.getElementById("numberSwitch").checked){
    tempPassword = tempPassword.concat(numberGen);
    console.log('number' + tempPassword);
  };
  
  if (document.getElementById("symbolSwitch").checked){
    tempPassword = tempPassword.concat(specialGen);
    console.log('symbol' + tempPassword);
  };
  console.log(tempPassword);
    pw ='';
    for (i = 0; i < document.getElementById("passwordSlide").value; i++){
      //select random specailgen
      pw = pw.concat(tempPassword[Math.floor(Math.random() * tempPassword.length)]);
    };
    document.getElementById("pwBox").innerHTML = pw;
  };

document.getElementById("genPw").addEventListener('click', generatePassword);



//create an alert to include upper case

//create an alert to include lower case


//call out new password similar to showalert function



//reset settings for new password