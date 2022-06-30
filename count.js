

const days=document.getElementById("days");
const hours=document.getElementById("hours");
const min=document.getElementById("min");
const sec=document.getElementById("sec");



const currentYear=new Date().getFullYear();

const newYear= new Date(`January 1  ${currentYear+1} 00:00:00`);

function time(){
    const currentTime=new Date();
    let diff=newYear-currentTime;

    const d=Math.floor(diff/1000/60/60/24);
    const h=Math.floor(diff/1000/60/60) % 24;
    const m=Math.floor(diff/1000/60) % 60;
    const s=Math.floor(diff/1000)%60;
    



    days.innerText=(d);

    if (h<10){
        hours.innerText=("0"+h);
    }
    else{
        hours.innerText=(h);
    }
    


    if (m<10){
        min.innerText=("0"+m);
    }
    else{
        min.innerText=(m);
    }
    
   

    if (s<10){
        sec.innerText=("0"+s);
    }
    else{
        sec.innerText=(s);
    }
    
   
}

setInterval(time , 1000);