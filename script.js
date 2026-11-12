const button = document.getElementById('menu-btn');
const navigation = document.getElementById('navigation-menu');

button.addEventListener('click', () => {
    navigation.classList.toggle('active');

    button.classList.toggle('open');
});

const partners = document.querySelector(".partners");
const toggle = partners.querySelector(".partners-toggle");

toggle.addEventListener("click", (e)=> {
    e.stopPropagation();
    const open = partners.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
});

document.addEventListener("click", ()=> {
    partners.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
});

document.addEventListener("keydown", (e)=> {
    if (e.key === "Escape") {
        partners.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
    }
});