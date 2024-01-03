// async methods
const { readFile, writeFile, write } = require('fs');

//reading the first file
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    // console.log(result)
    const first = result

    // reading the second file
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result

        // writing a file
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`,(err, result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log("Write File Result: ", result)
        })
    })

})