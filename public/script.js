var a = document.getElementById('input-fiel');


var btn = document.getElementById('btn');


// btn.addEventListener('click', () => {
//     var content = document.getElementById('input-filed');
//     console.log(content.value);
//     console.log("Adsasd");
//     sessionStorage.setItem('key', content.value);
// })
a.addEventListener('change', () => {
    sessionStorage.setItem('key', a.value);
})
a.value = sessionStorage.getItem('key');