async function deleteCommentHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    // delete post by id 
    const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            comment_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        //go back to dashboard 
        document.location.replace('/post/:id');
    } else {
        alert(response.statusText);
    }

}

document.querySelector('.delete-com-btn').addEventListener('click', deleteCommentHandler);