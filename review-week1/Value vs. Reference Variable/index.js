// không khác gì cã
let var1 = 'my string'
let var2 = var1
var2 = 'my new string'
// my String
console.log(var1)
// my new String
console.log(var2)


// có thể thao túng biến trong biến tổng
let var3 = {name: 'my string'}
let var4 = var3
var4.name = 'my new string'
// my new string
console.log(var3)
// my new string
console.log(var4)
console.log(var4)



async function doOperations() {
    try {
      const result1 = await asyncOperation1();
      const result2 = await asyncOperation2(result1);
      const result3 = await asyncOperation3(result2);
      const finalResult = await asyncOperation4(result3);
      // Do something with the final result
        console.log(finalResult)
    } catch (error) {
      // Handle errors
        console.log("err")
    }
  }
  
  doOperations();