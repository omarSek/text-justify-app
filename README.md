# text-justify-app

Ce projet est pour objectif de créer un API pour justifier les textes selon un nombre bien défini de caractère par ligne, en authentifiant. il permet aussi de passer au mode payment si l'utilisateur dépasse un certain limit de caractère par jour.

End point
-----------
*/users

permet de créer un nouveau utilisateur.

*/users/login

permet de connecter au compte 

*/api/justify

permet de justifier le texte, le client doit etre dèja authentifié, en plus le client peut justifier 80000 caractère par jour, sinon le client doit passer au mode payment.


