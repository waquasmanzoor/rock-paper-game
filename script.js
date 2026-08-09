let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const gencompchoice= ()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
}
const playgame=(userchoice)=>{
    const compchoice=gencompchoice();
    if(userchoice===compchoice){
        drawgame();

    }

}
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        console.log(choice,"choice is clicked")
    })

})
