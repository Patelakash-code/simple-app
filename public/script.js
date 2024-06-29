document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const messageElement = document.getElementById('message');

    // Clear any previous messages
    messageElement.textContent = '';

    // Validate name
    if (name === '') {
        console.log('Name is required');
        messageElement.textContent = 'Name is required.';
        return;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '') {
        messageElement.textContent = 'Email is required.';
        return;
    } else if (!emailPattern.test(email)) {
        messageElement.textContent = 'Please enter a valid email address.';
        return;
    }

    // If validation passes, create formData object
    const formData = {
        name,
        email
    };

    // Send form data to the server
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        messageElement.textContent = data.message;
    })
    .catch(error => console.error('Error:', error));
});
