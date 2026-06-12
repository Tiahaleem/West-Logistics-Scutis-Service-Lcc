const searchInput = document.getElementById("articleSearch");
const articles = document.querySelectorAll(".article_card");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    articles.forEach(article => {

        const text = article.textContent.toLowerCase();

        article.style.display =
            text.includes(value)
            ? "block"
            : "none";

    });

});