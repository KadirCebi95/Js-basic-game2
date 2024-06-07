let sayi = 0;

const zarAt = () => {
    let randomsayUret = Math.floor(Math.random() * 6) + 1;
    let articakSayi = document.getElementById('articakSayi');

    sayi += randomsayUret;

    articakSayi.innerHTML = sayi;

    let zarSayi = document.getElementById('zarSayi');
    zarSayi.innerHTML = `${randomsayUret}`;

}