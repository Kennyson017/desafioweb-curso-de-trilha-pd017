// Configurações de Dark Mode

const darkModeToggle = document.querySelector('.toggle-checkbox');

darkModeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.querySelector('.icon-container').classList.add('dark-mode');
    } else {
        document.querySelector('.icon-container').classList.remove('dark-mode');
    }
});

const $html = document.querySelector('html')
const $darkModeToggle = document.querySelector('.toggle-checkbox');

$darkModeToggle.addEventListener('change', function() {
    $html.classList.toggle('dark-mode')
})

//fim das configurações de dark mode