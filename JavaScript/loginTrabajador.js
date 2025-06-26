// menu hamburguesa
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

// mostrar y ocultar password
var state = false
    function toggle() {
        if(state){
            document.getElementById("passwords").setAttribute("type" , "password");
            document.getElementById("eye").style.color='#7a797e';
            state = false;
        }else{
            document.getElementById("passwords").setAttribute("type" , "text");
            document.getElementById("eye").style.color='#5887ef';
            state = true;
        }
    }