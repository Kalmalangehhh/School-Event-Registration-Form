// Initialize EmailJS with your public key
(function () {
    emailjs.init("L5IKPQxaIlfhGQZPv"); // Use your EmailJS public key
})();

// Add an event listener to the form submission
document.getElementById("advancedRegistrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the form data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim(); // User's email (recipient)
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;

    // Validate form fields
    if (!name || !email || !phone || !dob) {
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("successMessage").style.display = "none";
        return;
    }

    // Prepare template parameters
    const templateParams = {
        name: name,
        email: email, // Dynamic user email (the recipient's email)
        phone: phone,
        dob: dob,
        to_email: email // Ensure the email is sent to the user's email address
    };

    // Send the email with EmailJS
    emailjs
        .send("service_wo6lnve", "template_z5cepy5", templateParams)
        .then(
            function (response) {
                console.log("Email sent successfully:", response);
                document.getElementById("successMessage").style.display = "block";
                document.getElementById("errorMessage").style.display = "none";
            },
            function (error) {
                console.error("Error sending email:", error);
                document.getElementById("errorMessage").style.display = "block";
                document.getElementById("successMessage").style.display = "none";
            }
        );

    // Optionally reset the form
    document.getElementById("advancedRegistrationForm").reset();
});
