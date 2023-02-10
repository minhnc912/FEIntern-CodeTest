const navItem = document.querySelectorAll(".nav__list .nav__list-item");



function clickActive() {
    navItem.forEach(function(item){
        item.classList.remove('actived');
    })
    this.classList.add('actived')
}

navItem.forEach(function(item) {
    item.addEventListener('click', clickActive)
})