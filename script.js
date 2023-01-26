let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
const textEl = document.getElementById('text')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

const text = "Hi, my name is Izu Obi. I'm a Web Developer. I'm super chill and a great guy to work with."
let idx = 1
let speed = 100

writeText() 

function writeText(){
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx>text.length){
        idx = 1
    }

    setTimeout(writeText, speed)

}