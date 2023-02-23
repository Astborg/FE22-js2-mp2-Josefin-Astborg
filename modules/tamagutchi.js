class Tamagutchi {

    #hunger
    #happy
  constructor(namn, typ) {
    this.namn = namn;
    this.typ = typ;
    this.#hunger = 10;
    this.#happy = 10;

  }

  goesDownHunger() {
     setInterval(() => {
    }, 2000);
  }
  
  goesDownHappy() {
     setInterval(() => {
    
    }, 1000);
  }

  getHunger() {
    return this.#hunger;
  }
  setHunger(updatedHungerStat) {
    return (this.#hunger = updatedHungerStat);
  }
  getHappyness() {
    return this.#happy;
  }
  setHappyness(updatedHappynessStat) {
    return (this.#hunger = updatedHappynessStat);
  }
  
  createTamagutchi(){
    const select = document.getElementById('select').value
    const input = document.getElementById('input').value

    const insideBtnFeed = document.createElement('button')
    insideBtnFeed.innerText = 'Feed'
    const insideBtnPlay = document.createElement('button')
    insideBtnPlay.innerText = 'Play'
   
    let container = document.createElement("div");
    let paraHungry = document.createElement("p");
    let paraHappy = document.createElement("p");
    let name = document.createElement('h2')

    let tama1 = new Tamagutchi(input, select)
    let theHungryness = tama1.getHunger();
    let theHappyness = tama1.getHappyness();


    //intervaller decrease count
    let intervalForHappiness = setInterval(function () {
        paraHappy.innerHTML = `Tail Swags: ${theHappyness--}`;
    
        if (theHappyness < 0) {
          clearInterval(intervalForHappiness)
          clearInterval(intervalForHungryness);
          const div = document.createElement('div')
          div.innerText = 'Din Tamagutchi är död!'
          div.style.color = 'red'
          div.style.fontWeight = 'bold'
          div.style.fontSize = '20px'
          container.appendChild(div)
          theHappyness += 0
          insideBtnPlay.disabled = true
          insideBtnFeed.disabled = true

        }
      }, 1000);
    
      let intervalForHungryness = setInterval(function () {
        paraHungry.innerHTML = `Hunger: ${theHungryness--}`;
    
        if (theHungryness < 0) {
          clearInterval(intervalForHungryness)
          clearInterval(intervalForHappiness);
          const div = document.createElement('div')
          div.innerText = 'Din Tamagutchi är död!'
          div.style.color = 'red'
          div.style.fontWeight = 'bold'
          div.style.fontSize = '20px'
          container.appendChild(div)
          theHungryness += 0
          insideBtnPlay.disabled = true
          insideBtnFeed.disabled = true
          
        }
      }, 2000);

      //feed och play knappar 
      insideBtnPlay.addEventListener('click', (e) => {
        e.preventDefault()
        if(theHappyness >= 10){
            const div = document.createElement('div')
          div.innerText = 'Din Tamagutchi är fullt Glad!'
          div.style.color = 'red'
          div.style.fontWeight = 'bold'
          div.style.fontSize = '20px'
          container.appendChild(div)
          theHappyness = 10
        }else{
            theHappyness++
        }
    })
    
    insideBtnFeed.addEventListener('click', (e) => {
        e.preventDefault()

        if(theHungryness >= 10){
            const div = document.createElement('div')
            div.innerText = 'Din Tamagutchi är fullt Mätt!'
            div.style.color = 'red'
            div.style.fontWeight = 'bold'
            div.style.fontSize = '20px'
            container.appendChild(div)
            theHungryness = 10
        }else{
            theHungryness++
        }
    })

    
      //skapar färdiga tamagutchi containers
    if(select == 'horse'){
        name.innerText = `${input}: ${select}`
        document.body.append(container);
        const image = document.createElement('img')
        image.src  = 'https://www.shutterstock.com/image-vector/happy-cartoon-horse-blank-sign-260nw-63311242.jpg'
        image.style.width = '150px'
        image.style.height = '150px'
        container.append(image)
        container.append(name)
        container.append(insideBtnFeed);
        container.append(insideBtnPlay);
        container.append(paraHappy);
        container.append(paraHungry);
        container.classList.add("container");
        container.style.border = "5px solid pink";
        container.style.backgroundColor = 'rgb(148, 148, 227)'
        container.style.width = "300px";
        container.style.height = "320px";
    }else{
        name.innerText = `${input} : ${select}`
        document.body.append(container);
        const image = document.createElement('img')
        image.src  = 'https://freesvg.org/img/lemmling-Cartoon-dog-Laughing.png'
        image.style.width = '150px'
        image.style.height = '150px'
        container.append(image)
        container.append(name)
        container.append(insideBtnFeed);
        container.append(insideBtnPlay);
        container.append(paraHappy);
        container.append(paraHungry);
        container.classList.add("container2");
        container.style.border = "5px solid blue";
        container.style.backgroundColor = 'rgb(214, 149, 230)'
        container.style.width = "300px";
        container.style.height = "320px";
    }
    tama1.goesDownHunger()
    tama1.goesDownHappy()
    
    console.log(tama1)
   
  }
}
export { Tamagutchi };
