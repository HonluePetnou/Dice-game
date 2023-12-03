const dice1 = document.querySelector("#firstDice")
const dice2 = document.querySelector("#secondDice")
const button = document.querySelector("#Shake")
const result = document.querySelector("#result")

const Dice = ["fa-dice-one","fa-dice-two","fa-dice-three","fa-dice-four","fa-dice-five","fa-dice-six"]
const anime = "animate-shake" 

function ChangeDice(element,random){
    element.classList.add(anime)
    setTimeout(() =>{
        element.classList.remove(anime)
        for (const dice of Dice) {
            for (let i = 0; i < (element.classList).length; i++) {
                 if(element.classList[i] === dice){
                    element.classList.remove(element.classList[i])
                }
            }
        }
        element.classList.add(random)
    
    },1000)
} 

button.addEventListener('click',() =>{
    const id1 = Math.floor(Math.random() *Dice.length)
    const id2 = Math.floor(Math.random() *Dice.length)

    const random1 = Dice[id1]
    const random2 = Dice[id2]
    
    
    ChangeDice(dice1,random1)
    ChangeDice(dice2,random2)
   setTimeout(() =>{
     result.innerHTML=`Les dés sont jettés vous avez ${id1+id2+2}!`
   },1200)

})