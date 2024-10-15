// LES FONCTIONS
/* les fonctions sont des opérations qui effectuent 
des calculs et retournent un résultat.
L'avantage des fonctions sont réutilisables.
*/

let prix = 4 + 5;
let prix2 = 40 + 43;

/* 1. je déclare un fonction qui à pour tâche d'additionner dex chiffres*/
function calculaddition (chiffre1, chiffre2) {
    let resultat = chiffre1 + chiffre2;
    return resultat;
}
// 2. Ensuite, j'appelle la fonction calculaddition()
let prix3 = calculaddition( 40,42);

// alert(prix3);

let âge = 2001 - 2003;
let âge2 = 2024 - 2025;

/* 3. je déclare un fonction pour calculer l'âge */
function calculage (age1, age2) {
    let resultat = age1 - age2;
    return resultat;
}
  
let age =calculage(50,20);
alert(age);

/* Fionction pour multiplier deux chiffres ou deux nombres entiers
La fonction doit retourene le résultat de la munltiplier.
*/

function calculMultiplication(parametre1, parametre2, parametre3) {
    // je décris les instructions et les opérations
    /* je multiplie les deux nombres,
    et je stocke le resultat dans la variable 'produitobtenu'
    */
   let produitObtenu = parametre1 * parametre2 * parametre3;
   return produitObtenu;
}

let totalProduit = calculMultiplication(2, 3, 4);

let nombre1;
let nombre2;

function multiplication(nombre1, nombre2) {
    let resultat = nombre1 + nombre2;
    return resultat; 
} 

let produit = multiplication(45, 4);
 let afficheresultat = "le résultat est de";
 console.log(afficheresultat, produit);