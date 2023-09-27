function toggleAccordion(id) {
    var accordion = document.getElementById(id);
    accordion.classList.toggle('active-accordion');

    //Toggle icon for click
    var icon = accordion.previousElementSiblin.querySelector('i');
    icon.classList.toggle('fa-caret-down');
    icon.classlist.toggle('fa-caret-up');
}


// script.js
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".accordion-button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const subAccordion = button.nextElementSibling;
            subAccordion.style.display = subAccordion.style.display === "block" ? "none" : "block";
        });
    });
});
