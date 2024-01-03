// a simple program.

const amount = 20

if(amount<10){
    console.log("small number");
}
else{
    console.log("large number");
}

console.log("Hey, this is my first node app!!!!!")

// GLOBAL VARIABLES
console.log(__dirname);

// Setting the interval

setInterval(()=>{
    console.log("Hello Interval")
}, 1000)