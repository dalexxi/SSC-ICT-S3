function toggleAccordion(id) {
    var accordion = document.getElementById(id);
    accordion.classList.toggle('active-accordion');

    //Toggle icon for click
    var icon = accordion.previousElementSiblin.querySelector('i');
    icon.classList.toggle('fa-caret-down');
    icon.classlist.toggle('fa-caret-up');
}
