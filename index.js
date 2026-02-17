const category = () => {
    const url = 'https://fakestoreapi.com/products/categories';
    fetch(url)
    .then(res => res.json())
    .then(data => displayCategory(data))
}
const displayCategory = (buttons) => {
    const category_level = document.getElementById('category_button');
    category_level.innerHTML="";

    const allButton = document.createElement('button');
    allButton.textContent = "All";
    allButton.className = "btn btn-outline btn-md rounded-full";
    allButton.onclick = () => allProducts(); 
    category_level.appendChild(allButton);

    for(let button of buttons){
        console.log(button);

        const buttonDiv = document.createElement('button');
        buttonDiv.textContent = button;       
        buttonDiv.className="gap-5 btn btn-outline rounded-full";
        buttonDiv.onclick = () => checkCategory(button);
        category_level.append(buttonDiv);
    };
}
category();

const checkCategory = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(res => res.json())
    .then(data => displayAllProducts(data))
}

const topRatedProducts = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            const sortedProducts = data.sort((a, b) => b.rating.rate - a.rating.rate);
            const top3 = sortedProducts.slice(0, 3);
            displayTopRated(top3);
        });
}
const displayTopRated = (products) => {
    const container = document.getElementById('topRatedProducts');
    container.innerHTML = "";

    for (let product of products) {
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML = `
            <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-5 flex flex-col">
                <div class="h-48 flex justify-center items-center mb-4">
                    <img src="${product.image}" class="h-full object-contain" alt="${product.title}">
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="bg-blue-200 text-xs font-semibold rounded-full px-3 py-1">${product.category}</span>
                    <span class="flex items-center text-sm font-medium">
                        <i class="fa-solid fa-star text-yellow-400 mr-1"></i>
                        ${product.rating.rate} (${product.rating.count})
                    </span>
                </div>
                <h3 class="text-md font-semibold mb-2 line-clamp-2">${product.title}</h3>
                <p class="text-indigo-600 font-bold text-lg mb-4">$${product.price}</p>
                <div class="flex gap-2 mt-auto">
                    <button class="flex-1 border px-4 py-2 font-semibold rounded-lg hover:bg-gray-100 transition">Details</button>
                    <button class="flex-1 bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                        <i class="fa-solid fa-cart-shopping mr-2"></i> Add
                    </button>
                </div>
            </div>
        `;
        container.append(cardDiv);
    }
}
topRatedProducts();

const allProducts = () => {
    const url ='https://fakestoreapi.com/products';
    fetch(url)
    .then(res => res.json())
    .then(data => displayAllProducts(data))
}
const displayAllProducts = (products) => {
    const allProductsContainer = document.getElementById('all_products');
    allProductsContainer.innerHTML = "";

    for(let product of products){
console.log(product);
        const buttonDiv = document.createElement('div');
        buttonDiv.innerHTML = `
            <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-5 flex flex-col">
                <div class="h-48 flex justify-center items-center mb-4">
                    <img src="${product.image}" class="h-full object-contain" alt="${product.title}">
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="bg-blue-200 text-xs font-semibold rounded-full px-3 py-1">${product.category}</span>
                    <span class="flex items-center text-sm font-medium">
                        <i class="fa-solid fa-star text-yellow-400 mr-1"></i>
                        ${product.rating.rate} (${product.rating.count})
                    </span>
                </div>
                <h3 class="text-md font-semibold mb-2 line-clamp-2">${product.title}</h3>
                <p class="text-indigo-600 font-bold text-lg mb-4">$${product.price}</p>
                <div class="flex gap-2 mt-auto">
                    <button class="flex-1 border px-4 py-2 font-semibold rounded-lg hover:bg-gray-100 transition">Details</button>
                    <button class="flex-1 bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                        <i class="fa-solid fa-cart-shopping mr-2"></i> Add
                    </button>
                </div>
            </div>     
        `
        allProductsContainer.append(buttonDiv);
    };
}
allProducts();