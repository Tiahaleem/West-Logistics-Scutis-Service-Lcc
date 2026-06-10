const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        const isActive = item.classList.contains("active");

        faqItems.forEach(faq => {
            faq.classList.remove("active");
            faq.querySelector(".faq-icon").textContent = "+";
        });

        if(!isActive){
            item.classList.add("active");
            item.querySelector(".faq-icon").textContent = "−";
        }

    });

});