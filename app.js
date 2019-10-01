
//create alert to include special char 


// function generatePassword(){
//   pw ='';
//   for (i = 0; i < document.getElementById("passwordSlide").value; i++){
//     //select random specailgen
//     pw = pw.concat(specialGen[Math.floor(Math.random() * specialGen.length)]);
//   };
//   document.getElementById("pwBox").innerHTML = pw;
//   console.log(pw);
// };

// document.getElementById("genPw").addEventListener('click', generatePassword);
document.getElementById("genPw").addEventListener('click', generatePassword);


const numberGen = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const specialGen = ['!', '@', '#', '$', '%', '^', '&', '*', '+', '+', '=', '{', '[', '}', ']', '<', '>', '?', '+'];
function generatePassword(){
  if (document.getElementById("numberSwitch").checked && document.getElementById("symbolSwitch").checked){
    pw ='';
    for (i = 0; i < document.getElementById("passwordSlide").value; i++){
      //select random specailgen
      pw = pw.concat(numberGen[Math.floor(Math.random() * numberGen.length)]).concat(specialGen[Math.floor(Math.random() * specialGen.length)]);
    };
    console.log(pw);
    document.getElementById("pwBox").innerHTML = pw;
  };
};




//create an alert to include upper case

//create an alert to include lower case


//call out new password similar to showalert function



//reset settings for new password