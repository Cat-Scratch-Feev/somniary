// Handles client side signup functionality
// POST to /api/users/ to create a user

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username_signup").value.trim();
  const email = document.querySelector("#email_signup").value.trim();
  const password = document.querySelector("#password_signup").value.trim();

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
  .querySelector(".signup_form")
  .addEventListener("submit", signupFormHandler);
