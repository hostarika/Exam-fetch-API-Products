
const box=document.getElementById("box")   
const section1 =document.getElementById("section1")
const qidiruvInput=document.getElementById("qidiruv")
const btn=document.getElementById("btn")
const noname= document.getElementById("noname")
const md= document.getElementById("md")
const select = document.getElementById("select-type");
const selectSort = document.getElementById("sort");
const selectprice =document.getElementById("select-price")


const javob = await fetch("https://fakestoreapi.com/products");
const users = await javob.json();




async function productsView(data) {
    section1.innerHTML="";

    data.forEach(e => {
        const div = document.createElement("div");
        div.classList.add("box");
        div.innerHTML=`
        <img class="width" src="${e.image}" alt="sas">
        <h2>${e.title}</h2>
        <br>
        <p>${e.description}</p>
        <br>
        <div class="yozuv">
            <p class="red">${e.category}</p>
            <p class="blue">${e.price}$</p>
        </div>
        <div class="yozuv">
            <p class="green">${e.rating.rate}</p>
            <p class="aqua">${e.rating.count}</p>
            <p class="white">${e.id}</p>
        </div>
        `

        section1.appendChild(div)
    });
    
}
productsView(users)



qidiruvInput.addEventListener("input",()=>{

        

    let searchPk=users.filter(e=>e.title.toLocaleLowerCase().includes(qidiruvInput.value.toLocaleLowerCase().trim()));
         productsView(searchPk)

})


select.addEventListener("change", () => {
    if (select.value == "all") {
        productsView(users);
    } else {
        let searchPk = users.filter(e => e.category.toString().includes(select.value));
        productsView(searchPk);
    }
});


selectSort.addEventListener("click", () => {
    if (selectSort.value == "A-Z") {
        let changedProducts = users.sort((pr1, pr2) => pr1.title.localeCompare(pr2.title));
        productsView(changedProducts);
    } else {
        let changedProducts = users.sort((pr1, pr2) => pr2.title.localeCompare(pr1.title));
        productsView(changedProducts);
    }
});




selectprice.addEventListener("change", () => {
    if (selectprice.value === "all") {
        productsView(users);
    } else if (selectprice.value === "katta") {
        let narx = users.slice().sort((a, b) => b.price - a.price);
        productsView(narx);
    } else if (selectprice.value === "kichik") {
        let narx = users.slice().sort((a, b) => a.price - b.price);
        productsView(narx);
    }
});





reload.addEventListener("click", () => {
    location.reload();
})
