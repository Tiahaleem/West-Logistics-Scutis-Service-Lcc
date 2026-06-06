const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {

    navLinks.classList.toggle('active');

    menuToggle.classList.toggle('active');

});

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }
});

const counters = document.querySelectorAll(".counter");

const runCounter = () => {

    counters.forEach(counter => {

        const target =
        +counter.getAttribute("data-target");

        let count = 0;

        const update = () => {

            const increment =
            target / 80;

            if(count < target){

                count += increment;

                counter.innerText =
                Math.ceil(count);

                requestAnimationFrame(update);

            }else{

                counter.innerText =
                target + "+";
            }
        }

        update();

    });

}

runCounter();

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(reveal => {

        const top =
        reveal.getBoundingClientRect().top;

        const trigger =
        window.innerHeight - 100;

        if(top < trigger){

            reveal.classList.add("active");
        }

    });

});
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:.2
});

document.querySelectorAll(".reveal").forEach(el=>{

    observer.observe(el);

});
// Card 
// const cards = document.querySelectorAll('.card');

// const observer = new IntersectionObserver((entries)=>{
//     entries.forEach(entry=>{
//         if(entry.isIntersecting){
//             entry.target.classList.add('show');
//         }
//     });
// },{
//     threshold:0.2
// });

// cards.forEach(card=>{
//     observer.observe(card);
// });