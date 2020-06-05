/* 
    Description : JS pour la responsivité
    Created on : 30 avr. 2020, 10:23:27
    Auteur : Loris Martinez - Alexis Rafé - Nicolas Lebon
    Email : lorismartinez1202@gmail.com - alexisrafe@gmail.com - niko83136@gmail.com
*/


let responsive = function () {
    
    let dropDownResponsive = document.querySelectorAll('.btn-group');
    
    //Si l'écran est plus petit que 992px le menu se déroule a gauche
    if (window.matchMedia("(max-width : 992px)").matches)
    {
        dropDownResponsive[0].classList.add('dropleft');
    }
    
    //si plus grand a droite
    if(window.matchMedia("(min-width : 992px)").matches)
    {
            dropDownResponsive[0].classList.remove('dropleft');
    }
    
    //si plus petit que 400px a droite
    if (window.matchMedia("(max-width : 400px)").matches)
    {
        dropDownResponsive[0].classList.remove('dropleft');
    }
};

//On ajout les event déclenchant la focntion
window.addEventListener('load', responsive);
window.addEventListener('resize', responsive);