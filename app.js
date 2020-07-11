

// Defining global variables

const endDate=document.querySelector("input[name='endDate']");

const clock = document.querySelector(".clock");


// Adding event listener

endDate.addEventListener("change",function(e){
    e.preventDefault();
    // console.log(this.value);
    
    const temp = new Date(this.value);
    console.log(temp);

    startClock(temp);
    
    
})

function startClock(d){
    let tl = timeLeft(d);
    
    for(let pro in tl){
        console.log(pro,tl[pro]);
        
        let el = document.querySelector("."+pro)
        console.log(el);

        if(el){el.innerHTML = tl[pro]}
        
    }
    
}

function timeLeft(d){
    let currentDate = new Date();
    let t = Date.parse(d)-Date.parse(currentDate);

    let seconds=Math.floor((t/1000)%60);
    let minutes=Math.floor((t/1000/60)%60);
    let hours = Math.floor((t/(1000*60*60))%24);
    let days = Math.floor(t/(1000*3600*24));


    return {
        "total":t,
        'days':days,
        "hours":hours,
        "minutes":minutes,
        "seconds":seconds
    }   
    
    
}

