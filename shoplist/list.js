
/** this is an empty array */
let items = [];

function additem() {
    
    console.log("hi")
/**creating a new variable to get the element of the id item */
let item=document.getElementById("item")
console.log(item)
/**it is getting the user input value */

let ItemValue=item.value
console.log(ItemValue)
let list=document.getElementById("list")
/** add item value to our items */
items.push(ItemValue)
/** adding item value to our list */

list.innerText=items
}