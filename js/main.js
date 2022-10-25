// PARAMETROS (ARREGLOS) Estos se ingresan manualmente a mendida que se agregan mas catalogos o imagenes de prodctos  
// Nombre raiz de las fotos de los catalogos
const nombreCatalogos = [ "Andressa 2021", "Brigitte 2021","Maia 2020","Kaury 2021"];

// Arreglo de detalle de  productos (eventualmente habría que pasarlo a una base de datos y leerlo SQL o similar en  Python)
const listado = 
[   { "marca": "Andressa","foto": 1,"modelo": "","talleMin": "","talleMax": "","colores": [],"cantidad": 0 },
    { "marca": "Andressa","foto": 2,"modelo": "L5477","talleMin": "85","talleMax": "100","colores": ["Blanco", "Negro", "Rojo"],"cantidad": 0 },
    { "marca": "Andressa","foto": 3,"modelo": "L5495","talleMin": "85","talleMax": "100","colores": ["Blanco", "Negro", "Nude", "Sofía"],"cantidad": 0 },
    { "marca": "Andressa","foto": 4,"modelo": "L5589","talleMin": "85","talleMax": "100","colores": ["Blanco", "Negro", "Sofía", "Azul", "Frutilla", "Rojo", "Vino"],"cantidad": 0 },
    { "marca": "Andressa","foto": 5,"modelo": "L5607","talleMin": "85","talleMax": "100","colores": ["Blanco", "Negro", "Nude", "Sofía"],"cantidad": 0},
    { "marca": "Andressa","foto": 6,"modelo": "L5508","talleMin": "85","talleMax": "100","colores": ["Blanco", "Crudo", "Negro", "Sofía", "Rojo"],"cantidad": 0 },
    { "marca": "Andressa","foto": 7,"modelo": "L5627","talleMin": "85","talleMax": "100","colores": ["Negro", "Rosa Perla", "Azul"],"cantidad": 0 },
    { "marca": "Andressa","foto": 8,"modelo": "L5651","talleMin": "85","talleMax": "100","colores": ["Blanco", "Negro", "Rojo"],"cantidad": 0 },
    { "marca": "Andressa","foto": 9,"modelo": "L5655","talleMin": "90","talleMax": "105","colores": ["Negro", "Nude", "Azul", "Vino"],"cantidad": 0 },
    { "marca": "Andressa","foto": 10,"modelo": "L5659","talleMin": "85","talleMax": "100","colores": ["Blanco", "Crudo", "Negro", "Sofía", "Rosa Perla", "Rojo"],"cantidad": 0 },
    { "marca": "Andressa","foto": 11,"modelo": "L5666","talleMin": "85","talleMax": "105","colores": ["Blanco", "Negro", "Rosa Perla", "Nude"],"cantidad": 0 },
    { "marca": "Andressa","foto": 12,"modelo": "L5667","talleMin": "85","talleMax": "100","colores": ["Blanco", "Negro", "Rosa Perla", "Aero"],"cantidad": 0 },
    { "marca": "Andressa","foto": 13,"modelo": "L5668","talleMin": "85","talleMax": "100","colores": ["Blanco", "Negro"],"cantidad": 0 },
    { "marca": "Andressa","foto": 14,"modelo": "L5668","talleMin": "85","talleMax": "100","colores": ["Blanco", "Negro"],"cantidad": 0 },
    { "marca": "Andressa","foto": 15,"modelo": "L5670","talleMin": "85","talleMax": "100","colores": ["Blanco", "Negro", "Visión", "Azul", "Frutilla", "Rojo", "Vino", "Rosa Perla", "Nude", "Crudo"],"cantidad": 0 },
    { "marca": "Andressa","foto": 16,"modelo": "L5671","talleMin": "85","talleMax": "105","colores": ["Blanco", "Negro", "Visión"],"cantidad": 0 },
    { "marca": "Andressa","foto": 17,"modelo": "L5675","talleMin": "85","talleMax": "100","colores": ["Blanco", "Negro"],"cantidad": 0 },
    { "marca": "Andressa","foto": 18,"modelo": "L5683","talleMin": "85","talleMax": "100","colores": ["Animal Print", "Reptil Print", "Camel Print", "Rosa", "Flor Rosa/Negro"],"cantidad": 0 },
    { "marca": "Andressa","foto": 19,"modelo": "L5683","talleMin": "85","talleMax": "100","colores": ["Animal Print Rosa"],"cantidad": 0 },
    { "marca": "Andressa","foto": 20,"modelo": "L5687","talleMin": "85","talleMax": "100","colores": ["Blanco", "Negro", "Rubí", "Nude"],"cantidad": 0 },
    { "marca": "Brigitte","foto": 1,"modelo": "","talleMin": "","talleMax": "","colores": [],"cantidad": 0 },
    { "marca": "Brigitte","foto": 2,"modelo": "","talleMin": "","talleMax": "","colores": [],"cantidad": 0 },
    { "marca": "Brigitte","foto": 3,"modelo": "2130","talleMin": "85","talleMax": "100","colores": ["Blanco", "Negro", "Rojo", "Lemon", "Lila"],"cantidad": 0 },
    { "marca": "Brigitte","foto": 4,"modelo": "2130","talleMin": "85","talleMax": "100","colores": ["Blanco", "Negro", "Rojo", "Lemon", "Lila"],"cantidad": 0 },
    { "marca": "Brigitte","foto": 5,"modelo": "2130","talleMin": "85","talleMax": "100","colores": ["Blanco", "Negro", "Rojo", "Lemon", "Lila"],"cantidad": 0 },
    { "marca": "Brigitte","foto": 6,"modelo": "1000","talleMin": "85","talleMax": "105","colores": ["Blanco", "Negro", "Rojo", "Francia", "Rosé"],"cantidad": 0 },
    { "marca": "Brigitte","foto": 7,"modelo": "1000","talleMin": "85","talleMax": "105","colores": ["Blanco", "Negro", "Rojo", "Francia", "Rosé"],"cantidad": 0 },
    { "marca": "Brigitte","foto": 8,"modelo": "1084","talleMin": "90","talleMax": "105","colores": ["Blanco", "Negro", "Flamingo", "Marino", "Lila"],"cantidad": 0 },
    { "marca": "Brigitte","foto": 9,"modelo": "1084","talleMin": "90","talleMax": "105","colores": ["Blanco", "Negro", "Flamingo", "Marino", "Lila"],"cantidad": 0 },
    { "marca": "Brigitte","foto": 10,"modelo": "2122","talleMin": "90","talleMax": "100","colores": ["Blanco", "Negro", "Fucsia"],"cantidad": 0 },
    { "marca": "Brigitte","foto": 11,"modelo": "2122","talleMin": "90","talleMax": "100","colores": ["Blanco", "Negro", "Fucsia"],"cantidad": 0},
    { "marca": "Brigitte","foto": 12,"modelo": "1108","talleMin": "90","talleMax": "100","colores": ["Blanco", "Negro", "Francia", "Pink", "Rosé", "Oliva"],"cantidad": 0 },
    { "marca": "Brigitte","foto": 13,"modelo": "1108","talleMin": "90","talleMax": "100","colores": ["Blanco", "Negro", "Francia", "Pink", "Rosé", "Oliva"],"cantidad": 0 },
    { "marca": "Brigitte","foto": 14,"modelo": "2144","talleMin": "S","talleMax": "L","colores": ["Blanco", "Negro"],"cantidad": 0 },
    { "marca": "Brigitte","foto": 15,"modelo": "2144","talleMin": "S","talleMax": "L","colores": ["Blanco", "Negro"],"cantidad": 0 },
    { "marca": "Brigitte","foto": 17,"modelo": "2140","talleMin": "85","talleMax": "105","colores": ["Blanco", "Negro", "Pink", "Oliva"],"cantidad": 0 },
    { "marca": "Brigitte","foto": 16,"modelo": "2140","talleMin": "85","talleMax": "105","colores": ["Blanco", "Negro", "Pink", "Oliva"],"cantidad": 0 },
    { "marca": "Brigitte","foto": 18,"modelo": "442","talleMin": "85","talleMax": "100","colores": ["Blanco", "Negro", "Rojo", "Francia", "Menta"],"cantidad": 0 },
    { "marca": "Brigitte","foto": 19,"modelo": "442","talleMin": "85","talleMax": "100","colores": ["Blanco", "Negro", "Rojo", "Francia", "Menta"],"cantidad": 0 },
    { "marca": "Brigitte","foto": 20,"modelo": "1440","talleMin": "95","talleMax": "110","colores": ["Blanco", "Negro", "Rojo", "Rosé"],"cantidad": 0 },
    { "marca": "Brigitte","foto": 21,"modelo": "1440","talleMin": "95","talleMax": "110","colores": ["Blanco", "Negro", "Rojo", "Rosé"],"cantidad": 0 },
];

// Variables Globales
const totalCatalogos = nombreCatalogos.length;
const ordenCatalogosAleatorios=[];
const TagMenuFinalAleatorio=[];
const TallesNumBra = ["75","80","85","90","95","100","105","110","115","120"];
const TallesAlfa = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

var EoF=false;
var totalDeImagenes;
var totatlTotalImagenes;
var catalogoElegido;
var totalObjetos = listado.length;

// Se han dejado marcados como comentarios los console.log que se usaron durante las pruebas y debug 
// console.log("Se incluirán en la página "+totalCatalogos+" Catalogos en orden aleatorio.");
// console.log("Y el array de listado tiene " + listado.length + " objetos "); 
// for(let i = 0;i<listado.length;i++)
// {   console.log("Marca " +listado[i].marca+ " modelo" + listado[i].modelo + " color "+ listado[i].colores)}

// FUNCIONES
// Carga en orden aleatorio los nombre de catalogos de nombreCatalogos al menu Pull Down.  
function CargaInicialAleatoriaMenu() 
{   
    if(ordenCatalogosAleatorios.length==0) 
    {
        let Arraytemp=[];
        const NomTemp = Arraytemp.concat(nombreCatalogos);//No entontré mejor forma de copiar nombreCatalogo a NomTemp
        //console.log("Los catalogos incluidos manuelamente son: \n" + NomTemp);
        
        for(let i = 0; i<totalCatalogos;i++)
        {   let x = parseInt(Math.random()*(totalCatalogos-i));
            let vartemp = NomTemp.splice(x,1); // paso contenido del array x a vartemp
            let nomtemp = vartemp[0].substring(0,vartemp[0].lastIndexOf(" ")) ; // Le saco el año al menu pero le dejo el espacio para saber donde cortar
            TagMenuFinalAleatorio.push(`<a href="#" onclick="CargarCatalogo(`+i+`)">`+nomtemp+`</a>`);
            ordenCatalogosAleatorios[i]=vartemp;
        }
        //console.log("Que son guardados aleatoriamente en la Varible Global ordenCatalogosAleatorios como: \n" + ordenCatalogosAleatorios);
        document.querySelector(".dropdown-content").innerHTML = TagMenuFinalAleatorio;
        //console.log("Por lo tanto el orden Final de los TAGs (TagMenuFinalAleatorio) del menu es \n "+TagMenuFinalAleatorio+"\n\nPasamos a cargar logo y galería");
    }
}

//Carga el catalogo de fotos y va mostrando las imagenes en la galería una vez que se eligió la marca en el menu
async function  CargarCatalogo(catalogo)
{   catalogoElegido = catalogo;
    //console.clear();
    let marca=TagMenuFinalAleatorio[catalogo].substring(TagMenuFinalAleatorio[catalogo].indexOf(">")+1,TagMenuFinalAleatorio[catalogo].indexOf("<",TagMenuFinalAleatorio[catalogo].indexOf(">")));
    //console.log("Resumen dentro de carga de Catalogo:\nEl Catalogo marcado es el No; "+catalogo+" \n Corresponde al Orden Final del catalogo "+ordenCatalogosAleatorios[catalogo]+"\n La marca es= "+  marca);
    document.querySelector(".Logo-marca").innerHTML = `<img src="img/Logo-`+marca+`.png" alt="`+marca+`">`
    //console.log("El TAG del archivo que llama al Logo es:"+`<img src="img/Logo-`+marca+`.png" alt="`+marca+`">;`);
    //console.log("\n\nIniciando la carga de la Galería el EoF estga en: "+EoF);
    let i=0;
    let tags=[];
    EoF=false;
    while(EoF==false)
    {   i++; 
        let nombreArchivo = "img/"+ordenCatalogosAleatorios[catalogo]+" - "+(i.toString()).padStart(3, '0')+".jpg";
        //console.log("El nombre de la imagen a cargar es: "+nombreArchivo);

        let myObject = await fetch(nombreArchivo);
        //console.log("Numero de estatus= "+myObject.status);
        if(myObject.status==404)
        {   
            //console.log("El archivo "+nombreArchivo+" NO Existe");
            EoF=true;
        } else
        {   
            //console.log("El archivo "+nombreArchivo+" Existe");
            EoF=false;
        }

        //console.log("Despues de intentar cargar "+nombreArchivo+" EoF estga en: "+EoF);
        if(EoF==false)
        {   tags[i] = `<img src="`+nombreArchivo+`" id="img`+i+`" alt="`+marca+`" onclick="agrandarImagen('`+nombreArchivo+`')" v-on:click="cambioproducto" >\n`
        //console.log("El tag nuevo es: "+tags[i]+"\n");
                
        }
        let strgtemp = (tags.toString()).replaceAll(",",'');
        //console.log("Terminó la carga de la imagen\nLos Tags para la carga de la galería es: "+strgtemp);
        document.querySelector(".galeria").innerHTML = strgtemp; 

        totalDeImagenes=i;
    }
    // cuando termino de cargar todas las imagenes en la galería cargo la primera imagen grande. 
    agrandarImagen("img/"+ordenCatalogosAleatorios[catalogo]+" - "+("1").padStart(3, '0')+".jpg");

    // muestro los simbolos de navegación y el detalle de descripción previamente escondidos 
    document.querySelector(".pasoDerecha").style.display   = "block";
    document.querySelector(".pasoIzquierda").style.display = "block";
    document.querySelector(".canasta").style.display       = "block";

    // deshabilito los text inputs para que no se los edite, son meros lables
    document.getElementById("JSVUElinkId").disabled = true;
    document.getElementById("JSVUElinkMarca").disabled = true;
    document.getElementById("idModeloProd").disabled = true;
    document.getElementById("imagenCentral").setAttribute("style","height: 75vh;");
}

// Funcion que copia la imagen elegida, indicada en "file", al display grande central y actualizar detalles de productos en columna derecha
function agrandarImagen(file)
{   // cambio el scr de la imagen grande por la de "file"
    document.getElementById("imagenCentral").setAttribute("src",file); 
    // guardo la info de la marca y numero de foto, lo copio al detalle  y busco en qué posición del array de listado esta el producto   
    let id = parseInt(file.substring(file.indexOf("- ")+2,file.lastIndexOf(".")));
    let marca = file.substring(file.indexOf("/")+1,file.indexOf(" -")-5);
    document.querySelector("#JSVUElinkId").value = id;
    document.querySelector("#JSVUElinkMarca").value = marca;
    var numlistado = buscaObjeto(marca, id); // devuelve el indice en el que esta el detalle de la foto
    console.log ("El producto devuelto de la marca "+marca+" y id "+id  +" esta en la posición ", numlistado  +" del arreglo listado");
    
    // Sección que actualiza el resto de los detalles de la descripción  (modelo, talle y color)
    // Primeramente controlo que el producto este en la base de datos
    if(numlistado==-1)
    {   console.log(" ERROR No hay información detallada de producto "+ marca + " " + id + " en base de datos !!" );
        document.querySelector("#idModeloProd").value = "";
        document.querySelector("#selectTalle").innerHTML = "";
        document.querySelector("#selectColor").innerHTML = "";
        return -1;
    }

    // asigno nro de modelo
    // console.log(" El modelo de producto "+ marca + " " + id + " es "+ listado[numlistado].modelo);
    document.querySelector("#idModeloProd").value = listado[numlistado].modelo;
    
    // asigno la paleta de colores a las opciones del select en caso de haber, si no ignoro el select     
    const PDMColores=[]; 
    if (listado[numlistado].colores.length == 0)
    {   // console.log("Error en la paleta de colores del  Prodcuto "+ marca +" " + id + ".  No tiene detalle de colores!" );
        document.querySelector("#idModeloProd").value = "";
        document.querySelector("#selectTalle").innerHTML = "";
        document.querySelector("#selectColor").innerHTML = "";
    } else
    {  for(let i =0; i<(listado[numlistado].colores).length;i++)
       {
        PDMColores[i]=`<option value="color" id="idcolor">` +listado[numlistado].colores[i]+ `</option>`;
       }
       strgtemp = (PDMColores.toString()).replaceAll(",",' ');
       // console.log("HTML a agregar "+strgtemp)
       document.querySelector("#selectColor").innerHTML = strgtemp; 
    }

    // Asigno las opciones de talle al menu, diferenciando entre talles numericos y alfabeticos. 
    const PDMTalles=[];
    let escalaNumerica = false;
    let escalaAlfa = false;
    // Detecto qué tipo de escala es (numérica o alfabetica), comparando el tipo con el de las tablas existentes (var globales) 
    // Es escala numerica
    if (TallesNumBra.indexOf(listado[numlistado].talleMax) == -1 || TallesNumBra.indexOf(listado[numlistado].talleMin) == -1) escalaNumerica = false; else escalaNumerica = true; 
    // Es escala alfabetica
    if (TallesAlfa.indexOf(listado[numlistado].talleMax) == -1 || TallesAlfa.indexOf(listado[numlistado].talleMin) == -1) escalaAlfa = false; else escalaAlfa = true;
    console.log("El talle minimo es "+listado[numlistado].talleMin+" El talle maximo es "+listado[numlistado].talleMax+"\nEl bool de la escala numerica es: "+escalaAlfa+ "\n El bool de la escala alfabetica es:" + escalaNumerica);
    console.log("TallesNumBra.indexOf(listado[numlistado].talleMax) "+TallesNumBra.indexOf(listado[numlistado].talleMax)+" TallesNumBra.indexOf(listado[numlistado].talleMin) ="+ TallesNumBra.indexOf(listado[numlistado].talleMin))
    console.log("TallesAlfa.indexOf(listado[numlistado].talleMax) "+TallesAlfa.indexOf(listado[numlistado].talleMax)+" TallesAlfa.indexOf(listado[numlistado].talleMin) ="+ TallesAlfa.indexOf(listado[numlistado].talleMin))
    // Asigno la escala numerica en el rango correcto a escalaReducida[]
    let inicio, fin; // variables temporarias que almacenan la posición del inicio y fin del array global de talles
    if (escalaNumerica)
    {   inicio = TallesNumBra.indexOf(listado[numlistado].talleMin);
        fin =  TallesNumBra.indexOf(listado[numlistado].talleMax);
        escalaReducida = TallesNumBra.slice(inicio, fin+1);
    } else if (escalaAlfa)  
    // Asigno la escala alfabetica en el rango correcto a escalaReducida[]
    {   inicio = TallesAlfa.indexOf(listado[numlistado].talleMin);
        fin =  TallesAlfa.indexOf(listado[numlistado].talleMax);
        escalaReducida = TallesAlfa.slice(inicio, fin+1);
    } else
    // hay un errro en los talles
    {   console.log("Error en la escala de talles del producto  "+ marca +" " + id + "!");
        document.querySelector("#selectTalle").innerHTML = "";
    }

    // Si no hay errro se asigna la escala reducida a TAG option de talle.
    if( escalaNumerica || escalaAlfa)
    {   for( let i = 0 ; i <= (fin-inicio); i++)
        {
            PDMTalles[i]=`<option value="talle" id="idtalle" >` +escalaReducida[i]+ `</option>`;
        }
        strgtemp = (PDMTalles.toString()).replaceAll(",",'');
        document.querySelector("#selectTalle").innerHTML = strgtemp;
    }
}

function buscaObjeto(marcaProd, idFoto)
{   console.log(" Dentro de buscaObjeto - La marca y numero de foto a controlar es " + marcaProd + " y " + idFoto);
    console.log("El total de los objetos es: " + totalObjetos);
    for (let i =0; i<totalObjetos;i++)
    {   console.log("En la posición "+ i +" esta la marca " +listado[i].marca+ " con en numero de Foto " +listado[i].foto +" Con los colores " + listado[i].colores)
        if(listado[i].marca == marcaProd && listado[i].foto == idFoto)
        {   console.log("Los colores de la marca "+listado[i].marca+ " foto " +listado[i].foto +" es "+ listado[i].colores)
            return i;
        }   

    }
     return -1; // no se encontró el producto dado
};
 
function cambioDeImagen(direccion)
{   
    // direccion=parseInt(direccion);
    // console.log("\nArranca el proceso de cambio de Imagen\nEl catalogo elegido es = "+catalogoElegido);
    // console.log("Las imagenes totales de este catalogo son = "+ totalDeImagenes); 
    // console.log("La dirección de movimiento es = "+ direccion);
    let archivoActual = document.getElementById("imagenCentral").getAttribute("src");
    //console.log("el archivo actual de la imagen es = "+ archivoActual); 
    let numeroActual = archivoActual.substring(archivoActual.indexOf("-")+1,archivoActual.indexOf("."));
    numeroActual = parseInt(numeroActual);
    //console.log("el numero actual de la imagen es ="+ numeroActual); 
    let archivoNuevo;
    let numeroNuevo;
    //console.log(" El numero numeroActual+direccion es = "+ (numeroActual+direccion)); 
    
    if((numeroActual+direccion)<totalDeImagenes && (numeroActual+direccion)>0 ) 
    {    numeroNuevo = (direccion+numeroActual);
        //console.log("Se avanzó normalmente y el  nuevoNumero es = " + (numeroNuevo));
    } else
    {   if (numeroActual==1) numeroNuevo=totalDeImagenes-1;
        else numeroNuevo = 1;
        //console.log("Se llegó a un extremo y ahora nuevoNumero = " + numeroNuevo);
    } 
   
    archivoNuevo = archivoActual.substring(0,archivoActual.indexOf("-"))+"- "+ (numeroNuevo.toString()).padStart(3, '0')+".jpg"   
    //console.log("El archivo nuevo de la imagen es a cargar es = "+ archivoNuevo); 

    agrandarImagen(archivoNuevo);
}

// PROGRAMA
window.onload =function() {
CargaInicialAleatoriaMenu();
}




