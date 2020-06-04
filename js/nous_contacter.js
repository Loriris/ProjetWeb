/* 
    Description : JS pour la vérification de formulaire
    Created on : 30 avr. 2020, 10:23:27
    Auteur : Loris Martinez - Alexis Rafé - Nicolas Lebon
    Email : lorismartinez1202@gmail.com - alexisrafe@gmail.com - niko83136@gmail.com
*/

//La fonction principale de ce script est d'empêcher l'envoi du formulaire si un champ a été mal rempli
//et d'appliquer les styles de validation aux différents éléments de formulaire
window.addEventListener('load', function ()
{
    let forms = document.querySelectorAll('.needs-validation');
    Array.prototype.filter.call(forms, function (form)
    {
        form.addEventListener('submit', function (event)
        {
            if (form.checkValidity() === false)
            {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}, false);

