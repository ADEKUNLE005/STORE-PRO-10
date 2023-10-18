let myDiv = document.getElementById('root')
let storeUrl = "https://fakestoreapi.com/products "

function padTo(digit,currency){
  let number = digit.toString()
  let newDigit = number.padStart(number.length + 1,currency)
  return newDigit
}

async function getProducts(){
    let res = await fetch(storeUrl)
    let data = await  res.json();
    console.log(data)
    myDiv.innerHTML = data.map((product) =>
    { return `<div class="card">
   <img src=${product.image} alt="ab">
   <div> 
   <p class="title">Name: ${product.title}</p>
   <p>Description: ${product.description.substr(0,25)}</p>
   <p>price: ${padTo(product.price, "#")}</p>
   </div>
   </div> `})
   .join("")
}
getProducts()