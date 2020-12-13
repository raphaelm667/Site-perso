"use strict";

let compteurMenu = 1;
let menus = [];
let i= 0;

/**
  * Initialise un tableau et le transmet a notre tableau générale + remplis le tableau html
  *
  * @param {Object} le formulaire recupéré
  * @return {Boolean} return false car la page n'est pas liée a un server
  */

function ajouterMenu(x)
{
	let temp="";
	let menu = {
		Numero :compteurMenu,
		Nom: x.clientNom.value,
		Prenom: x.clientPrenom.value,
		Date: x.DateCommande.value,
		Sandwich: x.sandwich.value,
		Boisson: x.boisson.value
		};
	compteurMenu++;
	menus[i] = menu;
	menus.sort(ordoner);
	i++;
	for(let y=0;y<menus.length;y++){
	temp += "<tr><td>N°"+menus[y]["Numero"]+"</td><td>"+menus[y]["Nom"]+"</td><td>"+menus[y]["Date"].toLocaleString('fr-BE')+"</td><td><a href='img/jambon.jpg' target='_blank'>"+menus[y]["Sandwich"]+"</a></td><td>"+menus[y]["Boisson"]+"</td>";
	temp += "<td><input id='calc' name='champCalc' type='button' value='Calcul' onclick='calcul(0);'> </td>"
	temp += "<td>"+calcul(y)+"</td></tr>";
	document.getElementById("remplir").innerHTML = temp;
	}
	return false;
}

/**
  *  Initialise le tableau au chargement de la page
  *
  * @action modifie le code html
  */

function  initialiserPage(){
	document.getElementById("menuAffichage").innerHTML += "<table><thead><th>Numéro</th><th>Nom</th><th>Date</th><th>Sandwich</th><th>Boisson</th><th>Calcul</th><th>Prix</th></thead><tbody id='remplir'></tbody></table>";
}

function calcul(x)
{
	let prix=2;
	if(menus[x]["Boisson"] == "Coca"){
		prix+=3;
	}
	else if(menus[x]["Boisson"] == "Sprite"){prix+=2;}
	else if(menus[x]["Boisson"] == "Fanta"){prix+=2;}
	else{prix+=1;}
	return prix+"€"
}

function ordoner(x,y)
{
	return y.Numero-x.Numero;
}