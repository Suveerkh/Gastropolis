document.addEventListener('DOMContentLoaded', () => {
    const downloadButtons = document.querySelectorAll('.download-button');

    downloadButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Your download is starting!');
        });
    });
});
