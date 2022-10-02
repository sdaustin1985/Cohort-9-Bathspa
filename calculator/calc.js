
/**  creating a variable to hold the element with the id for output */
let output = document.getElementById("output")

function add() {
    console.log("hi")
    
/** this is getting the user input values */    
let num1 = document.getElementById("num1").value
let num2 = document.getElementById("num2").value


console.log(num1,num2)


/** changing from a string to a number */
let one = parseInt(num1)
 
let two = parseInt(num2)
console.log(one,two)
/** this is adding value 1 to value 2 */
let result = one+two
/** this is displaying the anwer to variable output */
output.innerText = result

}

function Subtract()   {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value

    console.log(num1,num2)

    let one = parseInt(num1)
    let two = parseInt(num2)

    let result = one-two
    output.innerText = result



}

function multiply()   {

    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value

    console.log(num1,num2)

    let one = parseInt(num1)
    let two = parseInt(num2)
    let result = one*two
    output.innerText = result
}

function divide() {
let num1 = document.getElementById("num1").value
let num2 = document.getElementById("num2").value

console.log(num1,num2)

let one = parseInt(num1)
let two = parseInt(num2)
let result = one/two
output.innerText = result

}



























