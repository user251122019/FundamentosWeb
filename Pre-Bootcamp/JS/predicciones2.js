function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo); 

// var:"Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345;
/* 
 diagrama en T
  variable                 Valor 
   auntContactInfo         "Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO"
   */
}
function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");

//     console.log(frozen); // var:"brócoli", "helado", "croqueta de papa";
/*
Diagrama en T
variables                          valor
produce                      "manzanas", "naranjas"
froze                        "brócoli", "helado"
froze                        "brócoli", "helado", "croqueta de papa"            
 */  
}

var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);

// var:"Bambi", "beetlejuice", "Toy Story", "zoro";
/*
Diagrama en T
variables                     valor
movieLibrary           "Bambi", "E.T.", "Toy Story"
movieLibrary           "Bambi", "E.T.", "Toy Story", "zoro"
movieLibrary          "Bambi", "beetlejuice", "Toy Story", "zoro"
*/