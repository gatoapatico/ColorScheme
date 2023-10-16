const formEl = document.getElementById('form-color-scheme');
const colorEl = document.getElementById('input-color');
const schemeEl = document.getElementById('input-scheme');
const coloresEl = [...document.getElementById('colores').children];
const hexadecimalesEl = [...document.getElementById('hexadecimales').children];


formEl.addEventListener('submit', function(e){
    e.preventDefault();
    
    const color = colorEl.value.substring(1); 
    const scheme = schemeEl.value;

    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}`)
        .then(res => res.json())
        .then(data => {
            data.colors.forEach((color, index) => {
                coloresEl[index].style.backgroundColor = color.hex.value;
                hexadecimalesEl[index].textContent = color.hex.value;
            });
        });
});