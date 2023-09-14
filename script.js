const progresso = document.getElementById('progresso')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const ciclos = document.querySelectorAll('.ciclo')

let currentActive = 1

next.addEventListener('click',() => {
    currentActive++
    if(currentActive > ciclos.length) {
        currentActive = ciclos.length
    }
    update()
})

prev.addEventListener('click', () =>{
    currentActive--
    if(currentActive < 1) {
        currentActive = 1
    }
    update()
})

function update() {
    ciclos.forEach((ciclo, idx) => {
        if (idx < currentActive) {
            ciclo.classList.add('ativo');
        } else {
            ciclo.classList.remove('ativo');
        }
    });

    const ativos = document.querySelectorAll('.ativo');
    
    progresso.style.width = (ativos.length - 1) / (ciclos.length -1) * 100 + '%';
    
    if(currentActive ===1) {
        prev.disabled = true;
    } else if(currentActive === ciclos.length) {
        next.disabled = true 
    } else {
            prev.disabled = false
            next.disabled = false
         }
}

