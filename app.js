(function () {
    emailjs.init("nsWcvLwWH4hYe9Cfz");
})();
document.getElementById('contact-form').onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission
    document.getElementById('spinner').style.display = 'block'; // Show spinner

    // Simulate form submission (replace this with your actual submission logic)
    setTimeout(() => {
        document.getElementById('spinner').style.display = 'none'; // Hide spinner after submission
        alert('Message sent!'); // Simulate success message
    }, 2000); // Adjust timing as necessary
};

// Function to send email using EmailJS
document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        // Send the email using the form data
        emailjs.sendForm("service_vpgfpbj", "template_uuhdk28", this).then(
            function () {
            },
            function (error) {
                alert("Failed to send the message: " + JSON.stringify(error));
            }

        );
    });