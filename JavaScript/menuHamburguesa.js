const showMenu = (IdToggle, IdNav) => {
    const toggle = document.getElementById(IdToggle), 
    nav = document.getElementById(IdNav)

    if(toggle && nav) {
        toggle.addEventListener ('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('menu__toggle', 'menu__nav')