const form = document.querySelector(".log_form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const title = document.getElementById("dream_title__input").value;
    const description = document.getElementById(
      "dream_description__input"
    ).value;
    const selected = document.querySelector(
      'input[name="dream_type"]:checked'
    ).value;
    const shared = document.querySelector(
      'input[name="dream_share"]:checked'
    ).value;

    const formData = {
      title: `${title}`,
      description: `${description}`,
      is_shared: `${shared}`,
      user_id: parseInt(localStorage.getItem("userID")),
      tagIds: [parseInt(selected)],
    };

    const response = await fetch("/api/dreams/", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const dream = await response.json();
      document.location.replace("/journal");
    } else {
      const errorData = await response.json();
      console.log(errorData);
      console.error("Dream didn't submit!", errorData.errors);
    }
  } catch (error) {
    console.error("Error submitting dream", error);
  }
});
