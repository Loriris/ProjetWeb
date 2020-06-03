/* 
    Description : JS pour la page nous_contacter
    Created on : 30 avr. 2020, 10:23:27
    Auteur : Loris Martinez - Alexis Rafé - Nicolas Lebon
    Email : lorismartinez1202@gmail.com - alexisrafe@gmail.com - niko83136@gmail.com
*/


 window.addEventListener('load', function()
 {
     let recherche = document.querySelectorAll('.dropdown-item');
     recherche[2].addEventListener('click', function()
     {
        let form = document.querySelectorAll('.recherche');
        form[0].style.display = "block";
        let nav = document.querySelectorAll('#autres');
        nav[0].style.display = "block";
     });
 });
