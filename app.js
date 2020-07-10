

// Defining global variables

const endDate=document.querySelector("input[name='endDate']");

const clock = document.querySelector(".clock");


// Adding event listener

endDate.addEventListener("change",function(e){
    e.preventDefault();
    console.log(this.value);
    
    const temp = new Date(this.value);
    console.log(temp);

    startClock(temp);
    
    
})

function startClock(d){
    console.log(d);
    
}

function timeLeft(d){
    
}

