function store() {
  var email = document.getElementById("email").value;
  var name = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var cpassword = document.getElementById("cpassword").value;

  if (name.length == 0) {
    alert("Please fill in name");
  } else if (password.length == 0) {
    alert("Please fill in password");
  } else if (cpassword.length == 0) {
    alert("Please fill in confirm password");
  } else if (
    name.length == 0 &&
    password.length == 0 &&
    email.length == 0
  ) {
    alert("Please fill the details");
  } else if (password != cpassword) {
    alert("PLease enter same password");
  } else {
    localStorage.setItem("name", name);
    localStorage.setItem("password", password);
    localStorage.setItem("email", email);
    window.location.href = "login.html";
    alert("Your account has been created");
  }
}

//check
function check() {
  var storedName = localStorage.getItem("name");
  var storedPass = localStorage.getItem("password");
  var storedEmail = localStorage.getItem("email");

  var userEmail = document.getElementById("eMail").value;
  var userPass = document.getElementById("passWord").value;
  

  if (userEmail == storedEmail && userPass == storedPass) {
    window.location.href = "dashboard.html";
    alert("You have successfully logged in");
  } else {
    alert("Error on login");
  }
}

function logout(){
  window.location.href = "login.html";
  alert("You have been successfully logged out");
}
