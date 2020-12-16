"use strict";

let compteurMenu = 1;
let menus = [];
let tableauBoissonPrix = [{Coca:3,Sprite:2,Fanta:2,Eau:1}];
let i= 0;

/**
  * Initialise un tableau et le transmet a notre tableau générale + remplis le tableau html
  *
  * @param {Object} le formulaire recupéré
  * @return {Boolean} return false car la page n'est pas liée a un server
  */

function ajouterMenu(x)
{
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
	creeTableau();
	return false;
}

function creeTableau()
{
	let temp="";
	for(let y=0;y<menus.length;y++){
		temp += "<tr><td>N°"+menus[y]["Numero"]+"</td><td>"+menus[y]["Nom"]+"</td><td>"+menus[y]["Date"].toLocaleString('fr-BE')+"</td><td><a href='img/jambon.jpg' target='_blank'>"+menus[y]["Sandwich"]+"</a></td><td>"+menus[y]["Boisson"]+"</td>";
		temp += "<td><input id='calc' name='champCalc' type='button' value='Calcul' onclick='calcul("+y+");'> </td>"
		temp += "<td id='affichageCalcule"+y+"'></td></tr>";
		document.getElementById("remplir").innerHTML = temp;
	}
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
	for(let y of tableauBoissonPrix)
	{
		let z=Object.keys(y);
		for(let h=0;h<z.length;h++){
			if(menus[x]["Boisson"] == z[h])
			{
			prix+=tableauBoissonPrix[0][z[h]];
			}
		}
	}
	document.getElementById("affichageCalcule"+x+"").innerHTML = prix+"€";
}

function ordoner(x,y)
{
	return y.Numero-x.Numero;
}