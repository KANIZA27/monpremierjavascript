// Manipuler Le DOM

// Sélectionner un élément
document.head; //Récupère l'élément head
document.title; // Récupère l'élément title

console.log(document.title);
// je récupère le titre du document HTML
//puis, je stocke le titre dans la valeur
// titrePageWeb
let titrePageWeb = document.title;

console.log(titrePageWeb);
console.log(document.li);

let monSpan = document.querySelector("#pragraphe1 span");
console.log("mon span", monSpan);
// Récupére les élément grâce au selecteur
let monAgent = document.querySelector("#agent1");
console.log(monAgent);

// Je récupère l'élément grâce la classe .maListe
let maListe = document.querySelector(".maListe");
console.log("Ma deuxiéme liste :" , maListe);

// je récupère plusieurs éléments appartenant à la classe .maListe
 let maListeIntegrale = document.querySelectorAll(".maListe");
 console.log("Ma liste Intégrale:", maListeIntegrale);

 for(let i = 0; i< maListeIntegrale.length; i++) {
   console.log(maListeIntegrale[i]);
 }
 
 let monParagraphe = document.querySelector("#paragraphe1");
 console.log("Ma liste Inttégrale", monParagraphe)

 //Modifier un élément du DOM

 let elementImage =document.querySelector("#premiereImage");
elementImage.setAttribute("class", "photoModifiée");

elementImage.setAttribute("alt", "Mon image doit s'afficher");
console.log("Mon image Avant de modification :", elementImage);

elementImage.src ="image.png";

elementImage.classList.add("nouvelleClasse");
console.log("ajout nouvelle classe:", elementImage);

elementImage.classList.remove("photo");


 // Crée un nouvel élément dans la page
 // on utilise la méthode createElement()
 let nouveauDiv = document.createElement("div");
 let nouveauTitre = document.createElement("h3");

// <h3>Mon tire de section niveau 3 </h3>
 nouveauTitre.textContent ="Mon titre de section niveau 3";
  
 // Sélectionner l'élément body
 let body = document.querySelector('body');
 body.appendChild(nouveauDiv);


 let monDiv = document.querySelector("div");
 body.appendChild(nouveauTitre);

 /* <body>
 <div> => body.appendChild(nouveauDiv);
 <h3>Mon titre de section niveau 3 </h3>
 </div>
 
 </body>
 */
