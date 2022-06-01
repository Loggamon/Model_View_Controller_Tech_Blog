const newCommentHandler =  async (event) => {
    event.preventDefault();

    const description = document.querySelector('#comment-desc').value.trim();
    const post_id = event.target.getAttribute('data-id');

    console.log(post_id);


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
            //document.location.replace('/');
            console.log(response);
        } else {
            alert('Oops! There was an issue commenting on this post!');
        }
    }
};

document
  .querySelector('.comment-form')
  .addEventListener('submit', newCommentHandler);
