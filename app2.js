// Initialize EmailJS with your user ID
(function () {
    emailjs.init("nsWcvLwWH4hYe9Cfz");
  })();
  
  // Function to send email using EmailJS
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Send the email using the form data
      emailjs.sendForm("service_vpgfpbj", "template_uuhdk28", this).then(
        function () {
          alert("Message Sent Successfully!");
        },
        function (error) {
          alert("Failed to send the message: " + JSON.stringify(error));
        }
      );
    });