document.querySelector("#registration").addEventListener("submit", (event) => {
  event.preventDefault();

  let name = document.querySelector("#fullName").value;
  let password = document.querySelector("#password").value;
  let email = document.querySelector("#email").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const alreadyExists = users.some((user) => user.email === email);
  if (alreadyExists) {
    alert("User already registered with this email.");
    return;
  }

  users.push({ name: name, email: email, password: password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration SuccessFull!");

  clearForm();
});

function clearForm() {
  document.querySelector("#fullName").value = "";
  document.querySelector("#phone").value = "";
  document.querySelector("#email").value = "";
}
