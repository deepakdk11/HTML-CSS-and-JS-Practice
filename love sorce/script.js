let input = document.querySelectorAll(".myinput")[0,1];
let btn = document.querySelector("button");

btn.disabled = true;

input.addEventListener("keyup", (event)=>{
    let val = event.target.value;
    if(val===""){
        btn.disabled = true;
    }
    else{
        btn.disabled = false;
    }
})


btn.addEventListener("click",()=>{
    let ran = Math.floor(Math.random()*100); 
    if( ran >=0 && ran <=10)  {
        document.querySelector("h3").innerHTML = ran + "%";
        document.querySelector("p").innerHTML = '<q>Ava Poi Aaru Maasam Achi!</q>'
    }
    if( ran >=11 && ran <=20)  {
        document.querySelector("h3").innerHTML = ran + "%";
        document.querySelector("p").innerHTML = '<q>Sonna purinjiko macha! Set aagadhu </q>'
    }
    if( ran >=21 && ran <=40)  {
        document.querySelector("h3").innerHTML = ran + "%";
        document.querySelector("p").innerHTML = '<q>Try panni pakkalam thappu illa</q>'
    }
    if( ran >=41 && ran <=60)  {
        document.querySelector("h3").innerHTML = ran + "%";
        document.querySelector("p").innerHTML = '<q>Vaipu iruku</q>'
    }
    if( ran >=61 && ran <=80)  {
        document.querySelector("h3").innerHTML = ran + "%";
        document.querySelector("p").innerHTML = '<q>Bill Clinton—Monica Lewinsky</q>'
    }
    if( ran >=81 && ran <=100)  {
        document.querySelector("h3").innerHTML = ran + "%";
        document.querySelector("p").innerHTML = '<q>Joe Biden—Jill Tracy Jacobs</q>'
    }
    
})

