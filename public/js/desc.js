document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.header-body-copy');
    console.log("DOMContentLoaded event fired");
    
    fetch('/desc')
        .then(res => res.json())
        .then(files => {
            container.innerHTML += files;
        })
        .catch(err => {
            console.log('Error:', err);
        });
});