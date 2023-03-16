/**
 * EMAILJS OBTAINED FROM https://www.emailjs.com/
 * For use with index.html form section
 * */

// Sends email to site owner of form inputs submitted
function sendMail(contactForm) {
    // Form input values
    let templateParams = {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value,
    };
    // Send email to site owner with input details
    emailjs.send("service_v2xkqij", "template_9398qf9", templateParams, "lOit3QM5Exl4CLX_f") //serviceID, templateId, templateParams, publicKey
    .then (
        // Display success message in index.html
        function(res) {
            console.log("SUCCESS", res);
            const successElement = document.getElementById('success-element');
            successElement.classList.remove('hide');
        },
        // Display failed message in index.html
        function(err) {
            console.log("FAILED", err);
            const failedElement = document.getElementById('failed-element');
            failedElement.classList.remove('hide');
        }
    );
    return false;
}