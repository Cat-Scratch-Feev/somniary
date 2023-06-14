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
const aboutBtn = document.querySelectorAll(".about_btn");
//Use querySelectorAll to get a nodelist of elements using the specified class
for  (i =0; i < aboutBtn.length; i++){
  //iterate over each index of the nodelist, adding event listener to each. Adds the event to all instances of the class, meaning the routes work in the normal navigation as well as the mobile navigation.
  aboutBtn[i].addEventListener("click", () => {
    window.location.href = "/about";
  });
};
// Journal button
const journalBtn = document.querySelectorAll(".journal_btn");
for  (i =0; i < journalBtn.length; i++){
  journalBtn[i].addEventListener("click", () => {
    window.location.href = "/journal";
  });
};
// New dream button
const dreamlogBtn = document.querySelectorAll(".dreamlog_btn");
for  (i =0; i < dreamlogBtn.length; i++){
  dreamlogBtn[i].addEventListener("click", () => {
    window.location.href = "/dreamlog";
  });
};
// Calendar button
const calendarBtn = document.querySelectorAll(".calendar_btn");
for  (i =0; i < calendarBtn.length; i++){
  calendarBtn[i].addEventListener("click", () => {
    console.log('test');
    console.log(calendarBtn[i]);
    window.location.href = "/calendar";
  });
};
document.querySelector("#logout_btn").addEventListener("click", logout);
