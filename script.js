const button = document.getElementById('menu-btn');
const navigation = document.getElementById('navigation-menu');

button.addEventListener('click', () => {
    navigation.classList.toggle('active');

    button.classList.toggle('open');
});
