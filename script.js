// Smooth scroll for navbar buttons
document.querySelectorAll('.buttons button').forEach(btn => {
    btn.addEventListener('click', () => {
        const sectionName = btn.textContent.trim().toLowerCase();
        const sectionMap = {
            "our tour": ".choose",
            "about us": ".foot-panel2",
            "booking": ".book.now",
            "faq": ".foot-panel2"
        };
        if (sectionMap[sectionName]) {
            document.querySelector(sectionMap[sectionName]).scrollIntoView({ behavior: "smooth" });
        }
    });
});
// Book Now popup
const bookNowBtn = document.querySelector('.book.now');
if (bookNowBtn) {
    bookNowBtn.addEventListener('click', () => {
        const name = prompt("Enter your name:");
        const people = prompt("Number of people:");
        if (name && people) {
            alert(`Thank you ${name}! Booking confirmed for ${people} people.`);
        }
    });
}
// "See all" button toggle
const seeBtn = document.querySelector('.see-btn');
if (seeBtn) {
    seeBtn.addEventListener('click', function () {
        const extraTours = document.querySelectorAll('.footer .box3, .footer .box4');
        extraTours.forEach(tour => {
            tour.style.display = (tour.style.display === "none" ? "block" : "none");
        });
        this.textContent = this.textContent === "See all" ? "Hide" : "See all";
    });
}
// Back-to-top button
const backToTop = document.createElement("button");
backToTop.textContent = "↑";
backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.padding = "10px 15px";
backToTop.style.borderRadius = "50%";
backToTop.style.fontSize = "18px";
backToTop.style.backgroundColor = "#333";
backToTop.style.color = "#fff";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.border = "none";
document.body.appendChild(backToTop);
window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
