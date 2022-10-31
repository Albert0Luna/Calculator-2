window.addEventListener('load', () =>{
    const display = document.querySelector('.display');
    const keypadButtons = document.getElementsByClassName('key-button');

    const keypadButtonsArray = Array.from(keypadButtons);   

    keypadButtonsArray.forEach( button => {
        button.addEventListener('click', () => {
            calulator(button,display)
        })
    })
 });

 function calulator(button,display) {
    if (button.innerHTML == 'C') {
        deleteAll(display)
    } 
    else if(button.innerHTML == '=') {
        calculate(display)
    } else {
        update(display,button)
    }
 }

 function calculate(display) {
    display.innerHTML = eval(display.innerHTML) 
}

function update(display, button) {
    if (display.innerHTML == 0) {
        display.innerHTML = ''
    }
    display.innerHTML = display.innerHTML + button.innerHTML
}

function deleteAll(display) {
    display.innerHTML = ''
}

