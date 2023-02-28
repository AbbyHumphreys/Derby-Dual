function sendMail(contactForm) {
    let templateParams = {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value,
    };
    emailjs.send("service_v2xkqij", "template_9398qf9", templateParams, "lOit3QM5Exl4CLX_f") //serviceID, templateId, templateParams, publicKey
    .then (
        function(res) {
            console.log("SUCCESS", res);
            const successElement = document.getElementById('success-element');
            successElement.classList.remove('hide');
        },
        function(err) {
            console.log("FAILED", err);
            const failedElement = document.getElementById('failed-element');
            failedElement.classList.remove('hide');
        }
    );
    return false;
}