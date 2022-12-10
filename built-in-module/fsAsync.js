const {readFile,writeFile} = require('fs')
console.log('start')
readFile('../Content/subfolder/first.txt','utf8',(err,result)=>{
    if(err) {
        console.log(err)
        return
    }
    // console.log(result)
    const first = result
    readFile('../Content/subfolder/second.txt','utf8',(err,result)=>{
        if(err) {
            console.log(err)
            return
        }
        // console.log(result)
        const second = result
        writeFile(
            '../Content/subfolder/first.txt',
            `Here is the result : ${first} , ${second}`
            ,(err,result) =>{
                if(err){
                    console.log(err)
                    return
                }
                console.log('done with this task')
            }
        )
    })
})
console.log('starting next task')