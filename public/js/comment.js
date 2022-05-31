const newCommentHandler =  async (event) => {
    event.preventDefault();

    const description = document.querySelector('#comment-desc').value.trim();

    if (description) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response);
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Oops! There was an issue creating this post!');
        }
    }
};

document
  .querySelector('.comment-form')
  .addEventListener('submit', newCommentHandler);
