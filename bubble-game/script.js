var timer = 41;
var score = 0;
var hit =  0;
let start = document.querySelector("button")
start.addEventListener("click",()=>{
function getNewHit(){
    hit = Math.floor(Math.random()*10)
    document.querySelector(".hitValue").innerHTML = hit
}
function scoreIncrease(){
    score += 10;
    document.querySelector(".Scorevalue").innerHTML = score
}
function scoreDecrase(){
    score -=10
    document.querySelector(".Scorevalue").innerHTML = score
}

    function time(){
        var timest = setInterval(()=>{
            if(timer>0){
                timer --
                document.querySelector(".Timervalue").innerHTML = timer
            }
            else{
                clearInterval(timest)
                document.querySelector(".bottom").innerHTML = `<h1>Your Score is <span>${score}</span></h1>`
            }
    
        },1000)
    }
    function makeBubble(){
        var n = 200;
        var clutter = ''
        for(let i = 0 ;i<=n;i++){
            var rn = Math.floor(Math.random()*10)
            clutter += `<div class="circ">${rn}</div>`
        }
        document.querySelector(".bottom").innerHTML = clutter
    }
    makeBubble()
    time()
    getNewHit()
    
    document.querySelector(".bottom").addEventListener("click",(e)=>{
        var clickedNumber =  Number(e.target.textContent)
        // console.log(clickedNumber);
        if(clickedNumber == hit){
            makeBubble()
            scoreIncrease()
            getNewHit()
        }
       else if(clickedNumber !== hit){
            scoreDecrase()
        }
    })
})