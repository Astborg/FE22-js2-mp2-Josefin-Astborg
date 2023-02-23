
import {Tamagutchi} from './modules/tamagutchi.js'
const btn = document.getElementById('btn')


btn.addEventListener('click', (e) =>{
    e.preventDefault()
    
    let tama1 = new Tamagutchi(input, select)
    tama1.createTamagutchi()
    
})





