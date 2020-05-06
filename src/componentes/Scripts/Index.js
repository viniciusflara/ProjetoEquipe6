import React from 'react';


var auxDropdown = true;



var home, servicos, desenvolvimento, diferenciais, portifolio, quemSomos;




export function hoverON(props) {
    document.getElementsByClassName('menu')[props].style.color = 'transparent';
}
function hoverOUTBranco(props) {
    document.getElementsByClassName('menu')[props].style.color = 'white';
}
function hoverOUTPreto(props) {
    document.getElementsByClassName('menu')[props].style.color = 'black';
}
export function menuOpen() {
    document.getElementById('sideNav').style.top = '0';
    setTimeout(isOpen, 500);
}
function isOpen() {
    window.addEventListener("click", conferirClick);
    function conferirClick(e) {
        if (e.target.id == 'sideNav') {
            menuClose();
            window.removeEventListener('click', conferirClick);
        }
    }
}
export function menuClose() {
    document.getElementById('sideNav').style.top = '-100%';
    dropdownClose();
}
function dropdownClose() {
    auxDropdown = true;
}
