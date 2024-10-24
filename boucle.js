// BOUCLE
// Une boucle sert à répéter la même operation suivant une condition
//  la boucle 
//La boucle WHITE;WHITLE signifie TANT que 
// La syntaxe d'utilisation de la boucle WHITLE
/*white(condition){
// opération à exécuter
}*/

let numero = 0;
while(numero < 9){// Tant que la valeur de la variable numero est plus petit que 9.
    // Alors on exécute les opérationsuivants
    console.log(" PASSAGE ", numero , "========");
    console.log("Numero AVANT l'ajout de + 5, Unmero est:", numero);
    numero = numero + 3;
    console.log("Numero APRES l'ajout de + 5, Numero est:", numero);

}


// Boucle FOR
/* LA boucle FOR permet d'exécuter un code un certain nombre de fois
en precisant manuellement l'intervalle pour laquelle on souhaite faire la boucle
*/
for ( let compteur = 0; compteur < 3; compteur++){// compteur++, signifie j'ajoute +1 à la variable compteur
    /* (let compteur = 0; compteur < 3; compteur++)
    let compteur = 0; je déclare la variable compteur avec la valeur 0
    compteur++ A chque fois que je fais la boucle , j'incrémente de +1 la valeur de la variable compteur.
    compteur < 3; je teste si la valeur de la variable compteur est plus petite que 3
     */
    // L'opération à exécuter
    console.log("LE compteur est : " + compteur);//afficher le compteur

}
// Utiliser la boucle FOR pour manipuler un tableau
let tableauEleves = ["Fazati","Dominique Jean", "Kaniza", 
"Nadhurati", "Ben", "Ben Ikbal", "Jasmine","Akramal", "Faiz", 
"Faoula", "Kyara","Dalya","Soihiroudine",
 "Tatyana", "Said", "Nicia","Izad", "Ambdil", "Thouaibat" 
];
console.log("Taille de mon tableau :" , tableauEleves.length);
// Récupérer les éléve sans utiliser la boucle FOR
console.log(tableauEleves[0]);
console.log(tableauEleves[1]);
console.log(tableauEleves[2]);

console.log("=== Avant la boucle FOR ===");
for(let i = 0; i < tableauEleves.length; i++){ // 'i++' est le raccourci de 'i = i +1'.
    console.log(tableauEleves[i]);
}
