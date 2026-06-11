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

    const formData = new FormData(form);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {

            messageBox.className = "form-message success";
            messageBox.textContent =
                "✓ Thank you! Your inquiry has been sent successfully. We'll get back to you shortly.";

            form.reset();

            setTimeout(() => {
                messageBox.className = "form-message";
                messageBox.textContent = "";
            }, 5000);

        } else {
            throw new Error("Submission failed");
        }

    } catch (error) {

        console.error("Web3Forms Error:", error);

        messageBox.className = "form-message error";
        messageBox.textContent =
            "⚠ Sorry, something went wrong. Please try again.";

        setTimeout(() => {
            messageBox.className = "form-message";
            messageBox.textContent = "";
        }, 5000);
    }

    submitBtn.disabled = false;
    btnText.textContent = "Send Inquiry →";
});