// console.log("hi")
// setTimeout(() => {
//     console.log("settimeout")
// },10)


console.log("process.nextTick 1")
/// 1
function foo() {
     console.log('foo')
}
process.nextTick(foo)
console.log('bar')


// console.log("process.nextTick 2")
// /// 2
// setTimeout(foo,0);
// console.log('bar')


// console.log("process.nextTick 3")
// //3
// setTimeout(() => {
//     console.log('timeout') 
//  }, 0);

//  setImmediate(() => {
//     console.log('immediate')
//  });

//  process.nextTick(() => console.log('nextTick'));


