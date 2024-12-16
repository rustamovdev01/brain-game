let tanlanganlar = JSON.parse(localStorage.getItem('products')) || []; 

let container = document.querySelector('.boxes'); 
let num = 0;

tanlanganlar.forEach((item) => {
    let box = document.createElement('div');
    box.classList.add('box');
    
    let img = document.createElement('img');
    img.classList.add('image');
    img.src = `photos/${item.img}`;
    img.alt = item.name;
    img.style.display = 'none';
    
    let text = document.createElement('p');
    text.classList.add('text');
    text.textContent = item.name;
    text.style.display = 'none';

    let title = document.createElement('h1');
    title.classList.add('number-box');
    num++;
    title.textContent = num;
    
    box.appendChild(img);
    box.appendChild(text);
    box.appendChild(title);
    
    container.appendChild(box);
    
    box.addEventListener('click', () => {
        img.style.display = 'inline';
        text.style.display = 'block';
        title.style.display = 'none';
    });
});

let clearButton = document.querySelector('.container button');

clearButton.addEventListener('click', () => {
    tanlanganlar = [];
    localStorage.setItem('products', JSON.stringify(tanlanganlar));
    container.innerHTML = '';
});
