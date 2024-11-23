 document.querySelector("form").addEventListener("submit", (e)=>{
     e.preventDefault();  });
    
var button = document.getElementById("btn");
var chapcha = document.querySelector(".chapcha");
var form = document.querySelector("form");
var randomnumber = Math.floor(Math.random().toFixed(6) * 999999);
chapcha.innerHTML = randomnumber;

var username = document.getElementById("username");
var password = document.getElementById("password");
var chaVerify = document.getElementById("chapcha_verify");
var successfull = document.querySelector(".success");
var error = document.querySelector(".err");
var btn = document.getElementById("btn");
btn.addEventListener("click",
  function(){
    if(username.value ==""){
      if(password.value == ""){
        error.innerHTML = "Please enter username and password";
      }
      else{
       error.innerHTML = "Please Enter Your Username";
      }
    }
    else if(password.value ==""){
      error.innerHTML = "Please Enter Your Password";
    }
    else if(chaVerify.value == ""){
      error.innerHTML = "Please Enter Chapcha";
    }
    else if(chaVerify.value === chapcha.innerHTML){
      successfull.style.display = "flex";
      document.querySelector(".container").style.display = "none";
    }
    else{
      error.innerHTML = "Invalid Chapcha ";
    }
  }
);
var ref = document.querySelector('.ref');
ref.addEventListener("click",
  function(){
    const i = Math.floor(Math.random().toFixed(6) * 999998 +1);
    if(i <100000){
      chapcha.innerHTML = "";
    }else{
      chapcha.innerHTML = i;
    }
  }
);