const catagory = () => {
    const url = 'https://fakestoreapi.com/products/categories';
    fetch(url)
    .then(res => res.json())
    .then(data => displayCatagory(data))
}
const displayCatagory = (buttons) => {
    const catagory_lavel = document.getElementById('catagory_button');
    catagory_lavel.innerHTML="";

    for(let button of buttons){
        console.log(button);

        const buttonDiv = document.createElement('div');
        buttonDiv.innerHTML = `
        <div class="flex flex-row">
        <button class="gap-5 btn btn-outline gap-5">${button}</button>
    </div>
        `
        catagory_lavel.append(buttonDiv);
    };
}
catagory();