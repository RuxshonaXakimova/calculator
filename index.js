const display = document.querySelector('.js-display')
const items = document.querySelectorAll('.item')
// console.log('items:', items);


items.forEach((button) => {
    button.addEventListener('click', (e) => {
        let itemText = e.target.textContent;
        
        if(itemText === "AC") {
            display.value = "";
        }
        if(itemText === "C") {
            display.value = display.value.slice(0, -1);
        }
        if(itemText !== "AC" && itemText !== "C" && itemText !== "=") {
            display.value += itemText;
        }
        if(itemText === "=") {
            display.value = eval(display.value);
        }
    });
})