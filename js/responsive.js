/* 
    Description : JS pour la responsivité
    Created on : 30 avr. 2020, 10:23:27
    Auteur : Loris Martinez - Alexis Rafé - Nicolas Lebon
    Email : lorismartinez1202@gmail.com - alexisrafe@gmail.com - niko83136@gmail.com
*/


let responsive = function () {
    
    let dropDownResponsive = document.querySelectorAll('.btn-group');
    if (window.matchMedia("(max-width : 992px)").matches)
    {
        dropDownResponsive[0].classList.add('dropleft');
    }
    else if(window.matchMedia("(min-width : 992px)").matches)
    {
        if(dropDownResponsive[0].classList.contains('dropleft'))
        {
            dropDownResponsive[0].classList.remove('dropleft');
        }
    }
};

window.addEventListener('load', responsive);
window.addEventListener('resize', responsive);