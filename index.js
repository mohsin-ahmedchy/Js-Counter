let counter = document.querySelector("#counter");
let decrement = document.querySelector("#decrement");
let increment = document.querySelector("#increment");
let count = 0;
decrement.addEventListener("click",()=>{
    count --;
    counter.innerHTML = count;
    if(counter.innerHTML<"0"){
        counter.style.color = "red";
    }
    else if(counter.innerHTML === "0"){
            counter.style.color = "black";
    }

    counter.animate([{ opacity: "0.2" } , { opacity: "1.8" }], {duration: 1000, fill: "forwards"})
})

increment.addEventListener("click",()=>{
    count ++;
    counter.innerHTML = count;
    if(counter.innerHTML>"0"){
        counter.style.color = "green";
    }
    else if(counter.innerHTML === "0"){
        counter.style.color = "black";
    }
    
    counter.animate([{ opacity: "0.2" } , { opacity: "1.8" }], {duration: 1000, fill: "forwards"});
}
)