const messageBox = document.querySelector(".form-message");

emailjs.init("wljLwNGyO96xGTYYB");

const form = document.getElementById("contact-form");
const submitBtn = form.querySelector(".submit-btn");
const btnText = submitBtn.querySelector("span");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Clear previous messages
    messageBox.className = "form-message";
    messageBox.textContent = "";

    submitBtn.disabled = true;
    btnText.textContent = "Sending...";

    emailjs.sendForm(
        "service_qzdc7c7",
        "template_kipqnay",
        form
    )

    .then(() => {

       return emailjs.send(
    "service_qzdc7c7",
    "template_5rvstut",
    {
        to_email: form.elements["user_email"].value,
        full_name: form.elements["full_name"].value,
        company_name: form.elements["company_name"].value,
        country: form.elements["country"].value,
        office_number: form.elements["office_number"].value,
        product_interest: form.elements["product_interest"].value
    }
);

    })

    .then(() => {

        messageBox.className = "form-message success";

        messageBox.textContent =
            "✓ Thank you! Your inquiry has been sent successfully. We'll get back to you shortly.";

        form.reset();

        // Hide message after 5 seconds
        setTimeout(() => {
            messageBox.className = "form-message";
            messageBox.textContent = "";
        }, 5000);

    })

    .catch((error) => {

        console.error("EmailJS Error:", error);

        messageBox.className = "form-message error";

        messageBox.textContent =
            "⚠ Sorry, something went wrong. Please try again.";

        // Hide message after 5 seconds
        setTimeout(() => {
            messageBox.className = "form-message";
            messageBox.textContent = "";
        }, 5000);

    })

    .finally(() => {

        submitBtn.disabled = false;

        btnText.textContent = "Send Inquiry →";

    });

});