/**
 * Responsive meni
 */

// function mobileMenu() {
//     // ISTO KAO FUNKCIJA ISPOD
// }

// Ova funkcija se koristi za prikaz i skrivanje mobilnog menija
const mobileMenu = () => {
    // Pronalazi element ul u elementu sa klasom .header
    let menu = document.querySelector('.header ul');
    // Pronalazi dugme u elementu sa klasom .header
    let btn = document.querySelector('.header button');

    // Provjerava tekst na dugmetu i mijenja ga kako je potrebno
    if(btn.innerText === 'MENU') {
        // Prikazuje mobilni meni
        menu.style.display = 'block';
        // Mijenja tekst na dugmetu u "CLOSE"
        btn.innerText = 'CLOSE';
    } else {
        // Skriva mobilni meni
        menu.style.display = 'none';
        // Mijenja tekst na dugmetu u "MENU"
        btn.innerText = 'MENU';
    }
}

/**
 * Galerija
 */

// Dohvatamo dugmice za pomjeranje slajdera na lijevo i desno
let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');

// Dohvatamo sve slike u slajderu
let pictures = document.querySelectorAll('.slider-images img');

// Promjenljiva koja pamti trenutnu poziciju slike u slajderu
let imgNum = 0;

// Funkcija za pomjeranje slike udesno
const moveRight = () => {
    // Prije pomjeranja slike sakrijemo sve slike
    displayNone();
    // Povećavamo trenutnu poziciju slike za 1
    imgNum++;

    // Ako smo dostigli posljednju sliku, vraćamo se na početak
    if(imgNum === pictures.length) {
        imgNum = 0;
    }

    // Prikazujemo sliku na novoj poziciji
    pictures[imgNum].style.display = 'block';
};

// Funkcija za pomjeranje slike ulijevo
const moveLeft = () => {
    // Prije pomjeranja slike sakrijemo sve slike
    displayNone();
    // Smanjujemo trenutnu poziciju slike za 1
    imgNum--;

    // Ako smo dostigli početnu sliku, vraćamo se na kraj
    if(imgNum === -1) {
        imgNum = pictures.length - 1;
    }

    // Prikazujemo sliku na novoj poziciji
    pictures[imgNum].style.display = 'block';
};

// Dodajemo događaje na dugmice za pomjeranje slajdera
rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);

// Funkcija za sakrivanje svih slika u slajderu
const displayNone = () => {
    pictures.forEach((img) => {
        img.style.display = 'none';
    });
};

/**
 * Portfolio sekcija
 */

// Funkcija za sortiranje stavki u portfolio-u prema kategoriji
const portfolioSort = (button) => {
    // Dohvatamo kategoriju prema dugmetu koje je kliknuto
    let category = button.getAttribute('data-category');
    // Dohvatamo sve stavke u portfolio-u
    let portfolioItems = document.querySelectorAll('.portfolio-single-item');
    
    // Sakrijemo sve stavke
    portfolioItems.forEach((item) => {
        item.style.display = 'none';
    });
    
    // Ukoliko je kategorija "sve", prikazujemo sve stavke
    if(category === 'sve') {
        portfolioItems.forEach((item) => {
            item.style.display = 'block';
        })
    }

    // Ukoliko stavka ima traženu kategoriju, prikazujemo je
    portfolioItems.forEach((item) => {
        if(item.getAttribute('data-category').includes(category)) {
            item.style.display = 'block';
        }
    });
}

/**
 * Modal sekcija
 */

// Funkcija za otvaranje modalnog prozora
const openModal = () => {
    // Dohvatanje modalnog prozora i overlay-a
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');

    modalWindow.style.display = 'block';
    overlay.style.display = 'block';
}

// Funkcija za zatvaranje modalnog prozora
const closeModal = () => {
    // Dohvatanje modalnog prozora i overlay-a
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');

    // Sakrivanje modalnog prozora i overlay-a
    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
}