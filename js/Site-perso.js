"use strict";

let compteurMenu = 1;
let menus = [];
let i= 0;

function ajouterMenu(x)
{
	let menu = ["N°"+compteurMenu,x.clientNom.value, x.clientPrenom.value, x.DateCommande.value, x.sandwich.value,x.boisson.value];
	compteurMenu++;
	menus[i] = menu;
	i++;
	document.getElementById("menuAffichage").innerHTML += "<p>Le Menu "+menu[0]+" a bien été ajoutée avec le "+menu[4]+".</p>";
	return false;
}