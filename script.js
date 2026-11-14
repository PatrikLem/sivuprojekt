const button = document.getElementById('menu-btn');
const navigation = document.getElementById('navigation-menu');

button.addEventListener('click', () => {
    navigation.classList.toggle('active');

    button.classList.toggle('open');
});

const dropdowns = document.querySelectorAll(".partners, .performance, .references");

dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector("button");

    toggle.addEventListener("click", (e) => {
        e.stopPropagation();

        // close the other dropdowns first
        dropdowns.forEach((other) => {
            if (other !== dropdown) {
                other.classList.remove("open");
                other.querySelector("button").setAttribute("aria-expanded", "false");
            }
        });

        const isOpen = dropdown.classList.toggle("open");
        toggle.setAttribute("aria-expanded", isOpen);
    });
});

document.addEventListener("click", () => {
    dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("open");
        dropdown.querySelector("button").setAttribute("aria-expanded", "false");
    });
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        dropdowns.forEach((dropdown) => {
            dropdown.classList.remove("open");
            dropdown.querySelector("button").setAttribute("aria-expanded", "false");
        });
    }
});