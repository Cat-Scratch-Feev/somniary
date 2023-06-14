// Handles the client side login functionality
//POST to /api/users/login
const loginFormHandler = async (event) => {
  // Stop default submission
  event.preventDefault();

  const username = document.querySelector("#username_login").value.trim();

  const password = document.querySelector("#password_login").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

document
  .querySelector(".login_form")
  .addEventListener("submit", loginFormHandler);
