// Handles client side logout functionality
// POST to api/users/logout
const logout = async () => {
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
//dashboard button functionality
const profBtn = document.querySelector(".dashboard__prof");
const dashGoalBtn = document.querySelector(".goal__text");
if(profBtn) {
  profBtn.addEventListener("click", () => {
    window.location.href = "/profilesettings";
  });
  dashGoalBtn.addEventListener("click", () => {
    window.location.href = "/profilesettings";
  });
};

// About button
const aboutBtn = document.querySelectorAll(".about_btn");
//Use querySelectorAll to get a nodelist of elements using the specified class
for (i = 0; i < aboutBtn.length; i++) {
  //iterate over each index of the nodelist, adding event listener to each. Adds the event to all instances of the class, meaning the routes work in the normal navigation as well as the mobile navigation.
  aboutBtn[i].addEventListener("click", () => {
    window.location.href = "/about";
  });
}

const returnBtn = document.querySelectorAll(".return_btn");
for (i = 0; i < returnBtn.length; i++) {
  returnBtn[i].addEventListener("click", () => {
    window.location.href = "/";
  });
}

// Journal button
const journalBtn = document.querySelectorAll(".journal_btn");
for (i = 0; i < journalBtn.length; i++) {
  journalBtn[i].addEventListener("click", () => {
    window.location.href = "/journal";
  });
}
// New dream button
const dreamlogBtn = document.querySelectorAll(".dreamlog_btn");
for (i = 0; i < dreamlogBtn.length; i++) {
  dreamlogBtn[i].addEventListener("click", () => {
    window.location.href = "/dreamlog";
  });
}
// Calendar button
const collectiveBtn = document.querySelectorAll(".collective_btn");
for (i = 0; i < collectiveBtn.length; i++) {
  collectiveBtn[i].addEventListener("click", () => {
    window.location.href = "/collective";
  });
}
document.querySelector("#logout_btn").addEventListener("click", logout);
