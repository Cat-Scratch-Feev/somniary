// Handles client side logout functionality
// POST to api/users/logout
const logout = async () => {
  // console.log("yo");
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/login");
  } else {
    alert("Failed to log out!.");
  }
};

document.querySelector("#logout_btn").addEventListener("click", logout);
