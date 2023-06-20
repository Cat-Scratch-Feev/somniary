const form = document.querySelector(".profile_form");
const btn = document.querySelector("#ps_Save");
const goalBtn = document.querySelector("#goal_Save");

btn.addEventListener("click", async (event) => {
  event.preventDefault();
  try {
    const userID = parseInt(localStorage.getItem("userID"));
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    const formData = {
      username: username,
      email: email,
    };
    //when formData is submitted, fetch an update request with userID
    if (formData) {
      const response = await fetch(`/api/users/${userID}`, {
        method: "PATCH",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const update = await response.json();
        document.location.replace("/");
      } else {
        const errorData = await response.json();
        console.log('error data' + errorData);
        console.error("Couldn't update account!", errorData.errors);
      }
    }
  } catch (error) {
    console.error("Error updating account", error);
  }
});

goalBtn.addEventListener("click", async(event) => {
  event.preventDefault();
  try {
    let goals = document.getElementById("dreamgoal").value;
    console.log(goals);
    localStorage.setItem("dreamgoal", goals);
    document.location.replace("/");
  } catch(error){
    console.error('Error updating user goal', error);
  }
});