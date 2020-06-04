/* 
    Description : JS pour la page index
    Created on : 30 avr. 2020, 10:23:27
    Auteur : Loris Martinez - Alexis Rafé - Nicolas Lebon
    Email : lorismartinez1202@gmail.com - alexisrafe@gmail.com - niko83136@gmail.com
*/

//Fonction de recherche d'article
window.addEventListener('load', function ()
{
    let btnRecherche = document.querySelectorAll('#recherche');
    btnRecherche[0].addEventListener('click', function ()
    {
        let input = document.querySelectorAll('#texteARechercher');
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
