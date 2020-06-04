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