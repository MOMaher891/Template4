let list = document.querySelector('.list');
let link = document.querySelector('.link');
let btn = document.querySelector('button');

link.addEventListener('click', () => {
    list.style.display = 'block';
})
link.addEventListener('mouseleave', () => {
    list.style.display = 'none';
})


