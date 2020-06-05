/* 
    Description : JS pour la recherche de sujet
    Created on : 30 avr. 2020, 10:23:27
    Auteur : Loris Martinez - Alexis Rafé - Nicolas Lebon
    Email : lorismartinez1202@gmail.com - alexisrafe@gmail.com - niko83136@gmail.com
*/


//Fonction de recherche d'article
window.addEventListener('load', function ()
{
    let body = document.querySelectorAll('.body');
    let dropDownMenu = document.querySelectorAll('.dropdown-menu');
    let btnSujet = document.querySelectorAll('.btn_sujet');
    let input = document.querySelectorAll('#texteARechercher');
    //ajout de bouton pour faciliter la saisie de sujet
    for(let index = 0; index< btnSujet.length; index++)
    {
        btnSujet[index].addEventListener('click', function()
        {
            input[0].value = btnSujet[index].textContent;
            dropDownMenu[0].classList.add("block");
            dropDownMenu[1].classList.add("block");
            
        });
    }
    
    body[0].addEventListener('click',function() 
    {
            dropDownMenu[0].classList.add("none");
            dropDownMenu[1].classList.add("none");
            dropDownMenu[0].classList.remove("block");
            dropDownMenu[1].classList.remove("none");
    });
    
    let btnRecherche = document.querySelectorAll('#recherche');
    btnRecherche[0].addEventListener('click', function ()
    {
        dropDownMenu[0].classList.remove("block");
        dropDownMenu[1].classList.remove("block");
        let text = input[0].value.toLowerCase();
        
        // récupération de tout les article de la page
        let article = document.querySelectorAll('article');
        
        //Pour chaque article on regarde si il correspond au sujet de la recherche
        for(let index = 0; index<article.length; index++)
        {
            //si non on enlève les articles
            if(!(article[index].classList.contains(text)))
            {
                article[index].classList.add("none");
                if(article[index].classList.contains("block"))
                {
                    article[index].classList.remove("block");
                }
            }
            
            //si oui on affiche les articles
            if(article[index].classList.contains(text))
            {
                article[index].classList.add("block");
                if(article[index].classList.contains("none"))
                {
                    article[index].classList.remove("none");
                }
            }
        }
        //si aucune recherche n'est saisie on affiche tous les articles
        if(text === "")
        {
            for(let index = 0; index<article.length; index++)
            {
                article[index].classList.add("block");
            }
        }
    });
});