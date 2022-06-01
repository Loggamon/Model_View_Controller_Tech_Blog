const newCommentHandler = async (event) => {
  event.preventDefault();

  const description = document.querySelector("#comment-desc").value.trim();
  const post_id = document.querySelector('input[name="post-id"]').value;

  console.log(description);
  console.log(post_id);

  if (description) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ description, post_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace("/");
      console.log(response);
    } else {
      alert("Oops! There was an issue commenting on this post!");
    }
  }
};

document
  .querySelector(".comment-form")
  .addEventListener("submit", newCommentHandler);
