let slider = document.getElementById("password-slide");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


let basicPassword = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']; 
const numberGen = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const specialGen = ['!', '@', '#', '$', '%', '^', '&', '*', '+', '+', '=', '{', '[', '}', ']', '?', '+'];
const capLetterGen = ['Q', 'W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];

function generatePassword(){
  let tempPassword = basicPassword
  if (document.getElementById("number-switch").checked){
    tempPassword = tempPassword.concat(numberGen);
  };
  
  if (document.getElementById("symbol-switch").checked){
    tempPassword = tempPassword.concat(specialGen);
  };

  if (document.getElementById("capitalization-switch").checked){
    tempPassword = tempPassword.concat(capLetterGen);
  };
    pw ='';
    for (i = 0; i < document.getElementById("password-slide").value; i++){
      //select random specailgen
      pw = pw.concat(tempPassword[Math.floor(Math.random() * tempPassword.length)]);
    };
    document.getElementById('pw-box').innerHTML = pw;
    console.log(pw.length);
    console.log(pw);
  };

document.getElementById('gen-pw').addEventListener('click', generatePassword);

//copy current password to clipboard

function copyClipboard() {
  let elm = document.getElementById('pw-box');
  // for Internet Explorer

  if (document.body.createTextRange) {
    let range = document.body.createTextRange();
    range.moveToElementText(elm);
    range.select();
    document.execCommand('Copy');
    alert('Copied password to clipboard');
  } else if (window.getSelection) {
    // other browsers

    let selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(elm);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('Copy');
    alert("Copied password to clipboard");
  }
}

document.getElementById('copy-pass').addEventListener('click', copyClipboard);