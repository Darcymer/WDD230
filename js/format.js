
let date = new Date();
let year = date.getFullYear();

console.log(year); //or (for the full date)

document.querySelector('.Copywright').innerHTML = "<p> &copy" + year + " .:|:. Darcy Merilan .:|:. Idaho</p>";

//let Modif = new Date(document.lastModified)

document.querySelector('.Timing').innerHTML = "<p> Last Update: " + document.lastModified + " </p>";
