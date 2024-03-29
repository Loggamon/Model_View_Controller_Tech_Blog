const updateButtonHandler = async (event) => {
  event.preventDefault();

  const description = document.querySelector("#update-desc").value.trim();
  const id = document.querySelector('input[name="update-id"]').value;
  const title = document.querySelector("#update-title").value.trim();

  console.log(description);
  console.log(id);
  console.log(title);

  if (description) {
    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({ description, id, title }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Oops! There was an issue commenting on this post!");
    }
  }
};

document
  .querySelector(".update-list")
  .addEventListener("submit", updateButtonHandler);
