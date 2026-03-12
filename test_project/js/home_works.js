const inputGmail = document.querySelector("#gmail_input")
const btnGmail = document.querySelector("#gmail_button")
const resultGmail = document.querySelector("#gmail_result")
const parent = document.querySelector('.parent_block')
const child = document.querySelector('.child_block')


const regex = /^[a-zA-Z0-9.%+-]+@gmail\.com$/;

btnGmail.onclick = () => {
    if(regex.test(inputGmail.value)){
        resultGmail.innerHTML = 'правильно  крууто'
        resultGmail.style.color = 'green'
    }else{
        resultGmail.innerHTML = 'введите правильно  '
        resultGmail.style.color = 'red'
    }

}

let positionX = 0, positionY = 0;

const toRight = parent.clientWidth - child.clientWidth;
const toBottom = parent.clientHeight - child.clientHeight;



const move  = () => {

    if(positionX < toRight && positionY === 0){ 
    positionX++;
    child.style.left = `${positionX}px`
    }else if(positionX >= toRight && positionY < toBottom){
        positionY++;
        child.style.top = `${positionY}px`
  
    }else if (positionY === toBottom && positionX > 0) {
        positionX--;
        child.style.left = `${positionX}px`
        positionX--;    
    }else if (positionX === 0 && positionY > 0){
        positionY--;
        child.style.top = `${positionY}px`
        positionY--;    
    }
    child.style.left = `${positionX}px`
    child.style.top = `${positionY}px`
    requestAnimationFrame(move)
}
move()



const time = document.querySelector("#seconds");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

seconds = 0
interval = null

startBtn.addEventListener('click', () => {
    if(interval === null){
        interval = setInterval(() => {
            seconds++;
            time.textContent = seconds

        },1000)

    }
} )




const  request = new XMLHttpRequest();

 request.open("GET", "../data/characters.json"); 

 request.onload = () => {
    const characters = JSON.parse(request.response);

    const container = document.querySelector(".characters-list")

    characters.forEach((character) => {
        const card = document.createElement("div")
        card.classList.add("card")

        card.innerHTML = `<img src ="${character.person_photo}" alt="naruto"> 
         <h3>${character.name}</h3>
        <p>age: ${character.age}</p> `;
        
        container.append(card)

    })
 }
 request.send();
 



const bioRequest = new XMLHttpRequest();

bioRequest.open("GET", "../data/bio.json");

bioRequest.onload = () => {
    const bio = JSON.parse(bioRequest.response);
    console.log(bio);
};

bioRequest.send();