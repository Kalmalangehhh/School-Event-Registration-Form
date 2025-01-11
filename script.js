// Initialize EmailJS with your public key
(function () {
    emailjs.init("L5IKPQxaIlfhGQZPv"); // Replace with your EmailJS public key
})();

// Add an event listener to the form submission
document.getElementById("advancedRegistrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("DOB:", dob);

    // Validate form fields
    if (!name || !email || !phone || !dob) {
        document.getElementById("errorMessage").textContent = "Please fill out all required fields correctly.";
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("successMessage").style.display = "none";
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("errorMessage").textContent = "Please provide a valid email address.";
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("successMessage").style.display = "none";
        return;
    }

    // Prepare template parameters
    const templateParams = {
        name: name,
        email: email,
        phone: phone,
        dob: dob,
        to_email: email, // Send email to the user's email address
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
                document.getElementById("errorMessage").textContent = "Error sending email. Please try again.";
                document.getElementById("errorMessage").style.display = "block";
                document.getElementById("successMessage").style.display = "none";
            }
        );

    // Optionally reset the form
    document.getElementById("advancedRegistrationForm").reset();
});

