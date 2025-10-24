function initDropdown(dropdown) {
    const value = dropdown.querySelector('.dropdown__value');
    const list = dropdown.querySelector('.dropdown__list');
    const links = dropdown.querySelectorAll('.dropdown__link');

    value.addEventListener('click', function() {
        list.classList.toggle('dropdown__list_active');
    });

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            value.textContent = link.textContent.trim();
            list.classList.remove('dropdown__list_active');
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(initDropdown);
}); 
