const form = document.querySelector(".profile_form");
const btn = document.querySelector("#ps_Save");

btn.addEventListener("click", async (event) => {
  event.preventDefault();
  console.log("YO");
  try {
    const userID = parseInt(localStorage.getItem("userID"));
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const goals = document.getElementById("dreamgoal").value;

    const formData = {
      username: username,
      email: email,
    };

    console.log(formData);

    if (formData) {
      const response = await fetch(`/api/users/${userID}`, {
        method: "PATCH",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const update = await response.json();
        localStorage.setItem("dreamgoal", goals);
        console.log("Account updated!", update);
      } else {
        const errorData = await response.json();
        console.log(errorData);
        console.error("Couldn't update account!", errorData.errors);
      }
    }
  } catch (error) {
    console.error("Error updating account", error);
  }
});
