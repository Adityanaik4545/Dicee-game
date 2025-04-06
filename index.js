function roll() {
    
    let randomNumber1=Math.floor(Math.random()*6)+1;
    let randomImg=`images/dice${randomNumber1}.png`;
    let img1=document.querySelectorAll("img")[0];
    img1.setAttribute("src",randomImg);
    let randomNumber2=Math.floor(Math.random()*6)+1;
    let randomImg2=`images/dice${randomNumber2}.png`;
    let img2=document.querySelectorAll("img")[1];
    img2.setAttribute("src",randomImg2);
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="💪player 1 won";
    }
    else if(randomNumber2>randomNumber1){
        document.querySelector("h1").innerHTML="💪player 2 won";
    }
    else{
        document.querySelector("h1").innerHTML="🤝its draw";
    }
}