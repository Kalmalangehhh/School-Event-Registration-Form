// Add event listener to form submission
document.getElementById('advancedRegistrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const dob = document.getElementById('dob').value;

    // Validate form fields
    if (!name || !email || !phone || !dob) {
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('successMessage').style.display = 'none';
        return;
    }

    // Prepare template parameters
    const templateParams = {
        name: name,
        email: email,
        phone: phone,
        dob: dob
    };

    // Send the email with EmailJS
    emailjs.send('service_wo6lnve', 'template_z5cepy5', templateParams) // Use your actual Service ID
        .then(function(response) {
            console.log('Email sent successfully:', response);
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('errorMessage').style.display = 'none';
        }, function(error) {
            console.error('Error sending email:', error);
            document.getElementById('errorMessage').style.display = 'block';
            document.getElementById('successMessage').style.display = 'none';
        });

    // Optionally reset the form
    document.getElementById('advancedRegistrationForm').reset();
});
