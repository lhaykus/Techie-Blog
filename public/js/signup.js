async function signupHandler(event) {
    //preventing form from reloading on refresh
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        // checking response status
        if (response.ok) {
            console.log('success');
            document.location.replace('/dashboard');
        } else {
            console.log('Unsuccessful Signup')
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupHandler);