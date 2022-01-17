let date = new Date();
let year = date.getFullYear();

//console.log(year); //or (for the full date)

document.querySelector('.copywright').innerHTML = "<p> &copy" + year + " | Darcy Merilan | Last Update: " + document.lastModified + " </p>";
//another way....
//document.queryselector(#copywright).innerText = new Date().getFullyear();
//let Modif = new Date(document.lastModified)

// another way....  document.getElementbyID("lastmodifiedDate").innerText = document.lastModified;

//innertext is faster than innerHtml
//with Javascript try to use id when manipulating html, and not classes