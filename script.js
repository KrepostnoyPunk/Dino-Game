const dinoEl=document.getElementById('dino')
const cactusEl=document.getElementById('cactus')

document.addEventListener('keydown', (event)=>{
    jump()
})

function jump(){
    if(dinoEl.classList!="jump") {
        dinoEl.classList.add("jump")
    }
    setTimeout(()=>{
        dinoEl.classList.remove('jump')
    },300)
}

let isAlive=setInterval(()=>{
    let dinoTop=parseInt(window.getComputedStyle(dinoEl).getPropertyValue('top'))
    let cactusLeft=parseInt(window.getComputedStyle(cactusEl).getPropertyValue('left'))

    if(cactusLeft<50&&cactusLeft>0&&dinoTop>=140){
        alert("YOU DIED.")
    }
},10)