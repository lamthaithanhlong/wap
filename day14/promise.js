const fs = require('fs');
const path = require('path');
function test() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("my error");
        },10000)
    })
}

function loadFile() {
    return new Promise((resolve,reject) => {
        fs.readFile(path.join(__dirname,'data.json'),(err,data) => {
            if(err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const result = loadFile()
result.then(res => console.log(JSON.parse(res))).catch(err => console.log(err))

// const result = test()
// console.log(result)
// result.then(res => console.log(res)).catch(err => console.log(err))
// console.log(123)