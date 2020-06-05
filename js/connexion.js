/* 
    Description : JS pour gestion de la fenêtre de connexion
    Created on : 30 avr. 2020, 10:23:27
    Auteur : Loris Martinez - Alexis Rafé - Nicolas Lebon
    Email : lorismartinez1202@gmail.com - alexisrafe@gmail.com - niko83136@gmail.com
*/

//Fonction gérant la fenêtre de connexion 
window.addEventListener('load', function()
{
    let frame = document.querySelectorAll("#connexion");
    let btn = document.querySelectorAll(".connexion-btn");
    let close = document.querySelectorAll(".close");
    
    //si clique sur le bouton on affiche la frame
    btn[0].addEventListener('click',function() 
    {
        frame[0].classList.add("block");
        frame[0].classList.remove("none");
    });
    
    //si on appuie sur la croix on ferme la frame
    close[0].addEventListener('click',function() 
    {
        frame[0].classList.add("none");
        frame[0].classList.remove("block");
    });
    
    //si on n'importe ou en dehors de la frame on la ferme
    window.addEventListener('click',function(event) 
    {
        if(event.target === frame[0])
        {
          frame[0].classList.add("none");
          frame[0].classList.remove("block");
        }
    });
});