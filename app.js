

let basicPassword = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']; 
const numberGen = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const specialGen = ['!', '@', '#', '$', '%', '^', '&', '*', '+', '+', '=', '{', '[', '}', ']', '<', '>', '?', '+'];
const capLetterGen = ['Q', 'W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];

function generatePassword(){
  let tempPassword = basicPassword
  if (document.getElementById("numberSwitch").checked){
    tempPassword = tempPassword.concat(numberGen);
  };
  
  if (document.getElementById("symbolSwitch").checked){
    tempPassword = tempPassword.concat(specialGen);
  };

  if (document.getElementById("capitalizationSwitch").checked){
    tempPassword = tempPassword.concat(capLetterGen);
  };
    pw ='';
    for (i = 0; i < document.getElementById("passwordSlide").value; i++){
      //select random specailgen
      pw = pw.concat(tempPassword[Math.floor(Math.random() * tempPassword.length)]);
    };
    document.getElementById("pwBox").innerHTML = pw;
  };

document.getElementById("genPw").addEventListener('click', generatePassword);

//copy current password to clipboard