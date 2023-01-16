function mudouTamanho() {
    var menu = document.getElementById('principal-menu')
    if (window.innerWidth >= 701) {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}

function abrirMenu() {
    var menu = document.getElementById('principal-menu')
    if (menu.style.display == 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}