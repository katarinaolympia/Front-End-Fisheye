# Base de code du projet P6 - Parcours Front-end

Développement d'une plateforme accessible de photographes.

Prototype des fonctionnalités :

Page d'accueil :
- Liste de tous les photographes avec leur nom, leur slogan, leur localisation, leur prix/heure et une image miniature de leur choix.
- Lorsque l'utilisateur clique sur la vignette d'un photographe, il est amené à sa page.

Page des photographes (le contenu de la page sera généré de manière dynamique en fonction du photographe) :
- Affiche une galerie des travaux du photographe.
- Les photographes peuvent montrer à la fois des photos et des vidéos.
- Dans le cas des vidéos, montrer une image miniature dans la galerie.
- Chaque média comprend un titre et un nombre de likes.
- Lorsque l'utilisateur clique sur l'icône "Like", le nombre de likes affiché est incrémenté.
- Le nombre de likes total d’un photographe doit correspondre à la
somme des likes de chacun de ses médias.
- Les médias peuvent être triés par popularité ou par titre.
- Lorsque l'utilisateur clique sur un média, celui-ci doit s’ouvrir dans une lightbox : 
* Lorsque la lightbox est affichée, il y a une croix dans le coin pour fermer la fenêtre.
* Des boutons de navigation permettent de passer d'un élément
média à l'autre dans la lightbox (les utilisateurs peuvent cliquer
sur ces boutons pour naviguer).
* Les touches fléchées du clavier permettent également de
naviguer entre les médias dans la lightbox.
- Afficher un bouton pour contacter le photographe.
* Le formulaire de contact est une modale qui s'affiche par-dessus
le reste.
* Il comprend des champs pour les noms, l'adresse électronique et
le message.
* Plus tard, le bouton de contact enverra un message au
photographe. Pour l'instant, seulement afficher le contenu des
trois champs dans les logs de la console.

Le site doit être accessible :
Le code doit être conforme aux WCAG : tests AChecker sans “known issue”.
Toute la gestion, des événements est accessible au clavier.

_______________________________________________________________________________________________

Accessible platform implementation for photographers.

Functionality prototype:

Homepage :
- List of all photographers with their name, slogan, location, price/time and a thumbnail image of their choice.
- When the user clicks on a photographer's thumbnail, he is relocate to his page.

Photographers page (page content will be dynamically generated):
- Displays a gallery of the photographer's work.
- Photographers can show both photos and videos.
- In the case of videos, show a thumbnail image in the gallery.
- Each media includes a title and a number of likes.
- When the user clicks on the "Like" icon, the number of likes displayed is incremented.
- The total number of likes of a photographer must correspond to the
sum of the likes of each of its media.
- Media can be sorted by popularity or by title.
- When the user clicks on a media, it must open in a lightbox:
* When the lightbox is displayed, there is a cross in the corner to close the window.
* Navigation buttons allow you to move between items
media to another in the lightbox (users can click
these buttons to navigate).
* The arrow keys on the keyboard are also used to
navigate between media in the lightbox.
- Display a button to contact the photographer.
* The contact form is a modal that is displayed on top
the rest.
* It includes fields for names, email address and
the message.
* Later the contact button will send a message to the
photographer. For now, only display the content of
three fields in the console logs.

The site must be accessible:
The code must conform to WCAG: AChecker tests without “known issue”.
All the events management is accessible from the keyboard.
