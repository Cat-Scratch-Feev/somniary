// Handles the client side login functionality
//POST to /api/users/login
const loginFormHandler = async (event) => {
  // Stop default submission
  event.preventDefault();

  const identifier = $("#identifier_login").val().trim();
  const password = document.querySelector("#password_login").value.trim();
  if (identifier && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ identifier, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

// Handles client side signup functionality
// POST to /api/users/ to create a user
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#email_signup").value.trim();
  const email = document.querySelector("#password_signup").value.trim();
  const password = document.querySelector("username_signup").value.trim();

  if (email && password && username) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ email, password, username }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up");
    }
  }
};

document
  .querySelector(".login_form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup_form")
  .addEventListener("submit", signupFormHandler);
