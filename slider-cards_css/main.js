const container = document.querySelector('.container')
const items = document.querySelectorAll('.item')

items.forEach(item => {
    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('item')){

            items.forEach((item) => {
                item.classList.remove('active')
            })
            e.target.classList.add('active')

        }
    })
});

