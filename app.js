const btn = document.querySelector('.nav');
const colorText = document.querySelector(".color");

function clickMe() {
    btn.addEventListener('click', function () {
        const x = Math.floor(Math.random() * 255) + 1;
        const y = Math.floor(Math.random() * 255) + 1;
        const z = Math.floor(Math.random() * 255) + 1;

        const div = document.querySelector('.container');
        div.style.backgroundColor = `\n rgb(${x},${y},${z})`;
        document.querySelector('.color').innerHTML = "rgb(" + x + "," + y + "," + z + ")";

    });
}
clickMe();