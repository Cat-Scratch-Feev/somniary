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

// Settings button functionality
const settingsBtn = document.getElementById("settings_btn");
settingsBtn.addEventListener("click", () => {
  window.location.href = "/profilesettings";
});

// About button
const aboutBtn = document.getElementById("about_btn");
aboutBtn.addEventListener("click", () => {
  window.location.href = "/about";
});

// Journal button
const journalBtn = document.getElementById("journal_btn");
journalBtn.addEventListener("click", () => {
  window.location.href = "/journal";
});

// New dream button
const dreamlogBtn = document.getElementById("dreamlog_btn");
dreamlogBtn.addEventListener("click", () => {
  window.location.href = "/dreamlog";
});

// Calendar button
const calendarBtn = document.getElementById("calendar_btn");
calendarBtn.addEventListener("click", () => {
  window.location.href = "/calendar";
});

document.querySelector("#logout_btn").addEventListener("click", logout);
