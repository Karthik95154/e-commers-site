document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registration-form');

    // Add event listener for the registration form
    registrationForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const username = registrationForm.querySelector('#username').value;
        const email = registrationForm.querySelector('#email').value;
        const password = registrationForm.querySelector('#password').value;

        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });

            const data = await response.json();

            if (response.status === 201) {
                console.log(data);
                console.log('User registered successfully');
                alert("success");
            }
            else if(response.status===400){
                console.log(data);
                console.log('User already exists');
                alert("already exists");
            }
            else {
                console.log(data);
                console.log('Registration failed');
                alert("error")
            }
        }  catch (error) {
            alert('An error occurred during registration');
        }
    });

});