// Initialize EmailJS with the public key
(function () {
    emailjs.init("-oDfBkIqoGeBUnjcd"); // Your public key
})();

// Add an event listener to the form submission
document.getElementById("advancedRegistrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the form data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim(); // Recipient email
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;

    // Validate form fields
    if (!name || !email || !phone || !dob) {
        document.getElementById("errorMessage").textContent = "Please fill out all required fields correctly.";
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("successMessage").style.display = "none";
        return;
    }

    // Prepare template parameters
    const templateParams = {
        name: name,
        email: email, // Dynamic email (recipient's email)
        phone: phone,
        dob: dob,
        to_email: email, // Send to the user's email
    };

    // Send the email with EmailJS
    emailjs
        .send("service_wo6lnve", "template_z5cepy5", templateParams)
        .then(
            function (response) {
                console.log("Email sent successfully:", response);
                document.getElementById("successMessage").textContent = "Thank you for registering! Please check your email.";
                document.getElementById("successMessage").style.display = "block";
                document.getElementById("errorMessage").style.display = "none";
            },
            function (error) {
                console.error("Error sending email:", error);
                document.getElementById("errorMessage").textContent = "Error sending email. Please try again.";
                document.getElementById("errorMessage").style.display = "block";
                document.getElementById("successMessage").style.display = "none";
            }
        );

    // Optionally reset the form
    document.getElementById("advancedRegistrationForm").reset();
});
