let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

const cartItemsEl = document.querySelector("#avatar");
const cartDetailsEl = document.querySelector("#glassesInfo");

let showProductList =() => {
    let content = "";
    dataGlasses.forEach((product) => {
        content += `
            <div class="col-4 glassItem ">
               <button type="button" onclick="showProductDetails('${product.id}')"> 
                <img src="${product.src}" height ="100" width="100" />
               </button>

            </div>
        `
    });
    document.querySelector("#vglassesList").innerHTML = content;
}
showProductList();


let cart = [];

//add to cart
let showProductDetails =(id) => {
    const item = dataGlasses.find((product) => product.id === id )
        cart.push({
            ...item

    });
    updateCart()

}
window.showProductDetails = showProductDetails;

let updateCart=()=>{
    renderCartItems();
    renderCartDetails();
}

let renderCartItems =() =>{
    cartItemsEl.innerHTML = "";
    cart.forEach((product) => { 
        cartItemsEl.innerHTML =`
        <div>
             <img src="${product.virtualImg}"/>
        </div>
        `
     })
}

let renderCartDetails =() => {
    cartDetailsEl.innerHTML = "";
    cart.forEach((product) => { 
        cartDetailsEl.innerHTML =`
        <div>
            <h5>${product.name} - ${product.brand} (${product.color})</h5>
            <span style="background:red; padding:5px">$${product.price}</span>
            <span style="color:green">Stocking</span>
            <p style="padding-top:10px ; margin:0">${product.description}</p>
        </div>
        `
     })
}
