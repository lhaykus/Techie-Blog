async function editCommentHandler(event) {
    event.preventDefault();

    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        const content = document.querySelector('#comment-body').value.trim();


        const response = await fetch(`/api/comments/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ content }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};


document.querySelector('.editCom').addEventListener('submit', editCommentHandler);