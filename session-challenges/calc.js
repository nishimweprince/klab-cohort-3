let input_btn = document.querySelectorAll('.input-btn');
let equals = document.querySelector('#equals');
let clear = document.querySelector('#clear');
let sqroot = document.querySelector('#square-root');
let calc_value = '';

calc_screen = document.querySelector('input[type="text"]');

input_btn.forEach(element => {
    element.addEventListener('click', ()=> {
        calc_value += element.value;
        calc_screen.value = calc_value;
    })
});

equals.addEventListener('click', () => {
    calc_screen.value = eval(calc_value);
})

clear.addEventListener('click', ()=> {
    calc_value = '';
    calc_screen.value = calc_value;
})

sqroot.addEventListener('click', () => {
    let result = Math.sqrt(calc_screen.value);
    calc_screen.value = result;
})