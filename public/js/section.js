document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.w-layout-grid.use-cases-grid');
    console.log("DOMContentLoaded event fired");
    
    fetch('/data')
        .then(res => res.json())
        .then(files => {
            files.forEach(file => {
                console.log(file);
                container.innerHTML += `
                <div class="use-case-grid-item values">
                    <div style="font-size: 40px;">${file.emj}</div>
                    <div class="use-case-text-block">
                        <h3 class="use-case-subhead">${file.name}</h3>
                        <div class="body-copy">${file.content}</div>
                    </div>
                </div>`;
            });
        })
        .catch(err => {
            console.log('Error:', err);
        });
});