// print a table that contains all the answers to the multiplication tables
//  from 1 through 10?
function multiply() {
    let integer = parseInt(prompt('Enter a number: '))
for(let i = 1; i<=10; i++){
    let result = i * integer
    console.log(`${integer} * ${i} = ${result}`)
 }
} multiply()