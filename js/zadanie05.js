var buttons = document.querySelectorAll('button');
var container = document.querySelector('div#container');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        container.textContent = button.dataset.text;
    });
}); 