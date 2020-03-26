const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    var request = new XMLHttpRequest();
    request.open('post', 'mail.php');

    request.send(new FormData(form));
})