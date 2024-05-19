
let option = document.getElementById('btn');
option.addEventListener('click', getOption);

function getOption() {
    const option = document.getElementById('fonts');
    const fontstyle = option.options[option.selectedIndex].value;
    let inputtext = document.getElementById('text');
    inputtext.style.fontFamily = `'${fontstyle}'`;
}
