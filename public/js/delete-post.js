async function deleteFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    // delete post by id 
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            post_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        //go back to dashboard 
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }

}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);