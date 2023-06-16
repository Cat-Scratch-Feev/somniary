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

    console.log(title, description, selected);

    const formData = {
      title: `${title}`,
      description: `${description}`,
      user_id: parseInt(localStorage.getItem("userID")),
      tagIds: [selected],
    };

    console.log(formData);
    console.log(JSON.stringify(formData));

    const response = await fetch("/api/dreams/", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const dream = await response.json();
      console.log("Dream submitted!", dream);
    } else {
      const errorData = await response.json();
      console.log(errorData);
      console.error("Dream didn't submit!", errorData.errors);
    }
  } catch (error) {
    console.error("Error submitting dream", error);
  }
});
