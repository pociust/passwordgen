var pw = "dynopass";

function showAlert(){
  alert("you clicked me");
  pwBox.innerHTML = pw;
};

genPw.addEventListener('click', showAlert);
