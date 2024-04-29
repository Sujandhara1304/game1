let userscore=0;
let compscore=0;
const choices = document.querySelectorAll(".choice");
const userpara= document.querySelector("#user_score");
const comppara= document.querySelector("#comp_score");
let msg= document.querySelector("#msg");
const drawmatch= ()=>{
console.log("match draw")
msg.innerText="try again";
msg.style.backgroundColor="pink";
}
const showwinner=(userwin,userchoice,compchoice)=>
{
    if(userwin===true)
    {
        userscore++;
        userpara.innerText=userscore;
        console.log("you win");
        msg.innerText="yow win";
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        comppara.innerText=compscore;
        console.log("you lost");
        msg.innerText="you lose";
        msg.style.backgroundColor="red";
    }
}
const gencompchoice=()=>
{
    const option=["rock", "paper", "sciessors"];
    const randidx=Math.floor(Math.random()*3);
    return option[randidx];

}
const playgame=(userchoice)=>
{
    console.log("usre choice=",userchoice);
    const compchoice= gencompchoice();
    console.log("comp choice=",compchoice);
    if(userchoice===compchoice){
        drawmatch();
    }
    else{
        let userwin=true;
        if(userchoice==="rock")
        {
            // paper,scissors
           userwin= compchoice==="paper" ? false:true;
        }
        else if(userchoice=="paper")
        {
            //rock,sciessors
            userwin=compchoice==="rock" ?true:false;
        }
        else{
            //rock,paper
            userwin=compchoice==="rock" ? false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }

};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>
    {
        console.log("choice was clicked");
        const userchoice= choice. getAttribute("id") 
        playgame(userchoice);
    });
});