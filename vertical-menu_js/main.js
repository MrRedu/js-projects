const menuToggle = document.querySelector('.menuToggle')
const items = document.querySelectorAll('.item')
const navBar = document.getElementById('navBar')

// Open panel
menuToggle.onclick= function(){
    navBar.classList.toggle('open')
}

// Element active
function itemActive (){
    items.forEach((item)=> item.classList.remove('active'))
    this.classList.add('active')
}

items.forEach((item) => {
    item.addEventListener('click', itemActive)
})