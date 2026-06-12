const form = document.getElementById("contact-form");
const messageBox = document.querySelector(".form-message");
const submitBtn = form.querySelector(".submit-btn");
const btnText = submitBtn.querySelector("span");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    messageBox.className = "form-message";
    messageBox.textContent = "";

    submitBtn.disabled = true;
    btnText.textContent = "Sending...";

    const formData = {
        name: form.name.value,
        company_name: form.company_name.value,
        email: form.email.value,
        office_number: form.office_number.value,
        country: form.country.value,
        product_interest: form.product_interest.value,
        message: form.message.value
    };

    try {

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (data.success) {

            messageBox.className = "form-message success";

            messageBox.textContent =
                "✓ Thank you! Your inquiry has been sent successfully. We'll get back to you shortly.";

            form.reset();

        } else {

            throw new Error(data.error);

        }

    } catch (error) {

        console.error(error);

        messageBox.className = "form-message error";

        messageBox.textContent =
            "⚠ Sorry, something went wrong. Please try again.";

    }

    submitBtn.disabled = false;
    btnText.textContent = "Send Inquiry →";
});