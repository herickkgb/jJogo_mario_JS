const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")
const container = document.querySelector(".enter")
const esplosao = document.querySelector(".espl")

const jump = () => {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500)
}


const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = "nome";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "nome";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./img/game-over.png"
        mario.style.width = "75px"
        mario.style.marginLeft = "50px"

        esplosao.style.display = "block"
        esplosao.style.width = "150px"

        esplosao.style.bottom = "0";


        setTimeout(() => {
            esplosao.style.display = "none"
        }, 1000)

        container.style.display = "block"
        container.style.top = "200px"


        clearInterval(loop)


        window.addEventListener("keydown", function(e) {
            if (e.key == "Enter") {
                location.reload();
            }
        })


    }


}, 10)




document.addEventListener("keydown", jump);