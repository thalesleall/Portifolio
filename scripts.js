let links = document.querySelectorAll('.js-link');
let sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 60;
        let heightSection = section.offsetHeight;
        let idSection = section.getAttribute('id');

        if(top >= offset && top < offset + heightSection){
            links.forEach(link => {
                link.classList.remove('actived');
                document.querySelector(`body nav ul li a[href*='${idSection}']`).classList.add('actived');
            });
        }
    });
});

function scrollSection(event){
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topSection = section.offsetTop - 55;
    window.scrollTo({
        top: topSection,
        behavior: 'smooth'
    });
}

links.forEach(link=> {
    link.addEventListener('click', scrollSection); 
});


for (let i = 1; i <= 6; i++) {
    let p = document.getElementById("p-" + i);
    let pmodal = document.getElementById("p" + i + "modal");
    let body = document.body;
    let button = document.getElementById("btnCloseModal" + i);

    p.onclick = function() {
        body.classList.add('blur-background');
        pmodal.classList.add("popup-animation");
        pmodal.showModal();
    };

    if (button) {
        button.onclick = function(){
            body.classList.remove('blur-background');
            pmodal.classList.remove("popup-animation");
            pmodal.classList.add("popup-close-animation"); 
            setTimeout(() => {
                pmodal.close();
                pmodal.classList.remove("popup-close-animation"); 
            }, 500);
        };
    }

    body.addEventListener('click', function(event) {
        if (event.target === pmodal) {
            body.classList.remove('blur-background');
            pmodal.classList.remove("popup-animation");
            pmodal.classList.add("popup-close-animation"); 
            setTimeout(() => {
                pmodal.close();
                pmodal.classList.remove("popup-close-animation"); 
            }, 500);
        }
    });
}
