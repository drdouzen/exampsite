
// animate form class on open for all login related html files

const form = [...document.querySelector('.form').children];

form.forEach((item, i) =>{
    setTimeout(() => {
        item.style.opacity = 1;
    }, i*100);
})
