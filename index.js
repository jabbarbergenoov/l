const get = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

get("http://localhost:3000/cards").then((res) => {
    console.log(res);

    const container = document.querySelector('.container'); 
    container.innerHTML = ''; 
    
    res.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');

        const inside = document.createElement('div');
        inside.classList.add('inside');

        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.textContent = product.id; 

        inside.appendChild(circle);
        card.appendChild(inside);

        const text = document.createElement('div');
        text.classList.add('text');

        const nameElem = document.createElement('p');
        nameElem.classList.add('header');
        nameElem.textContent = product.name;

        const priceElem = document.createElement('p');
        priceElem.classList.add('content');
        priceElem.textContent = product.price;

        text.appendChild(nameElem);
        text.appendChild(priceElem);
        card.appendChild(text);
        container.appendChild(card);
    });
    
}).catch((error) => {
    console.error("Error:", error);
});
