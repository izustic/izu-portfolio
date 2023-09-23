let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
const textEl = document.getElementById('text')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

const text = `Hi! My name is Izu Obi. I'm a full stack developer who focuses on writing clean, elegant, and efficient code.`
let idx = 1
let speed = 70

writeText() 

function writeText(){
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx>text.length){
        idx = 1
    }

    setTimeout(writeText, speed)

}
