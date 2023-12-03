// Initialize Email.js with your Mailgun API key
let apiKey = "MgSItsCRdn9eB9c2m"; // Replace with your Mailgun API key
emailjs.init(apiKey);
// Function to send email when the button is clicked or Enter key is pressed
var from_name = document.getElementById("from_name");
var from_email = document.getElementById("from_email");
var message = document.getElementById("from_message");
function sendEmail() {
    // Get form values
    // Define parameters
    var params = {
        from_name: from_name.value,
        from_email: from_email.value,
        message: message.value
    };

    // Use emailjs.send method
    console.log(params);
    emailjs.send("service_y7zyvfl", "template_9c5nskj", params)
        .then(function(response) {
            console.log("Email sent successfully:", response);
            clearForm()
            alert("Email sent successfully!");
        }, function(error) {
            console.log("Email failed to send:", error);
            alert("Email failed to send. Please try again later.");
        });
}
function clearForm(){
document.getElementById("application_form").reset();
}
