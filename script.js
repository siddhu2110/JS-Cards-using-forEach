let div=document.createElement("div");
div.setAttribute('id','major');
document.body.append(div);



let products = [
    {
        name: "Earbuds",
        description: "Bluetooth 5.3 earbuds with noise cancellation.",
        price: 1499
    },
    {
        name: "Smart Watch",
        description: "Fitness tracker with heart-rate and sleep.",
        price: 2999
    },
    {
        name: "Gaming Mouse",
        description: "RGB  mouse with 6 programmable buttons.",
        price: 899
    },
    {
        name: "Keyboard",
        description: "Blue switch keyboard with backlit keys.",
        price: 2499
    },
    {
        name: "Laptop",
        description: "Adjustable aluminum laptops 13–17 inches.",
        price: 799
    },
    {
        name: "Power Bank",
        description: "20000mAh fast-charging power bank.",
        price: 1599
    },
    {
        name: "Bluetooth Speaker",
        description: "Portable speaker bass and 12-hour battery.",
        price: 1199
    },
    {
        name: "Webcam HD",
        description: "1080p webcam with built-in microphone.",
        price: 999
    },
    {
        name: "USB-C Charger",
        description: "25W fast-charging USB-C power adapter.",
        price: 699
    },
    {
        name: "Hard Drive",
        description: "1TB USB 3.0 portable hard drive.",
        price: 3499
    }
];

products.forEach((value,index,array) => {
    div. innerHTML+=`<div class="minor">
        <h2 class="head"> ${value.name}</h2>
        <p class="desc"> ${value.description}</p>
        <button class="price">₹${value.price}</button> 
    </div>`

})













































// document.body.innerHTML =`<h1>hello`
// document.body.innerHTML +=`<h1>hello`

// let data=[
//     {id:1,name:"remote",price:20},
//     {id:2,name:"tv",price:200},
//     {id:3,name:"keyboard",price:50}

// ]

// let a=data.forEach((value,index,array)=>{
//     document.body.innerHTML+=`<h1>${value.name}</h1>
//     <p>${value.price}</p>
//     <p>${value.id}</p>`
// })
// console.log(a)

// for(let i=0;i<data.length;i++){
//     console.log(data[i])
// }

// let a=data.forEach((value,index,array) => {
//     console.log(value)
//     return value
//     document.body.innerHTML+=`<h1 class="head">${value.name}</h1>`
// });
// console.log(a)

// let a=data.map((value,index,array) => {
//     console.log(value)
//     return value
// });
// console.log(a)