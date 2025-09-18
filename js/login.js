document.querySelector("#login").addEventListener("submit", (event) => {
  event.preventDefault();

  const userId = document.querySelector("#user-id").value;
  const password = document.querySelector("#password").value;

  if (!userId || !password) {
    alert("Please enter both User ID and Password.");
    return; 
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const matchUser = users.find(
    (users) => users.email === userId && users.password === password
  );

  localStorage.setItem("userLoginStatus", true); // only open the home page, if the loginStatus is true


  if (matchUser) {  
    localStorage.setItem("userName", matchUser.name);
    localStorage.setItem("userLoginStatus", "true");

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  } else {
    alert("Invalid email or password.");
    localStorage.setItem("userLoginStatus", "false");
  }

});

document.querySelector(".home-page").addEventListener("click", (e)=>{
  if(localStorage.getItem("userLoginStatus") === "false"){
    e.preventDefault();
    loginRequired();
    
  }
})

function loginRequired(){
  const lgnRtMsg = document.createElement("div");
  lgnRtMsg.className = "lgnRtMsg";
  lgnRtMsg.textContent = "Login Required!";
  document.querySelector(".login-container").append(lgnRtMsg);
}