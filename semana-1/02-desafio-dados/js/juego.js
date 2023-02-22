function random() {
    return Math.floor(Math.random() * (6) + 1);

}


const jugar = document.querySelector('#btnJugar');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
jugar.addEventListener('click', () => {
    const random1 = random();
    const random2 = random();

    img1.src = `images/dado${random1}.png`;
    img2.src = `images/dado${random2}.png`;



    if (random1 > random2) {
        document.body.querySelector('h1').textContent = 'Gano jugador 1';
    } else if (random1 < random2) {
        document.body.querySelector('h1').textContent = 'Gano jugador 2';
    } else {
        document.body.querySelector('h1').textContent = 'EMPATE';

    }

})