// PARAMETROS A INGRESAR MANUALMENTE
// const nombreCatalogos = [  "Brigitte 2021","Maia 2020","Kaury 2021"];
const nombreCatalogos = [ "Andressa 2021", "Brigitte 2021","Maia 2020","Kaury 2021"];

// Variables Globales
const totalCatalogos = nombreCatalogos.length;
const ordenCatalogosAleatorios=[];
const TagMenuFinalAleatorio=[];
var EoF=false;
var totalDeImagenes;
var catalogoElegido;

console.log("Se incluirán en la página "+totalCatalogos+" Catalogos en orden aleatorio.");

// Funciones
// Carga los nombre de catalogos en el  menu Pull Down. Toma los nombres del array nombreCatalogos 
function CargaInicialAleatoriaMenu() 
{   let Arraytemp=[];
    const NomTemp = Arraytemp.concat(nombreCatalogos);//No entontré mejor forma de copiar nombreCatalogo a NomTemp
    console.log("Los catalogos incluidos manuelamente son: \n" + NomTemp);
    
    for(let i = 0; i<totalCatalogos;i++)
    {   let x = parseInt(Math.random()*(totalCatalogos-i));
        let vartemp = NomTemp.splice(x,1); // paso contenido del array x a vartemp
        let nomtemp = vartemp[0].substring(0,vartemp[0].lastIndexOf(" ")) ; // Le saco el año al menu pero le dejo el espacio para saber donde cortar
        TagMenuFinalAleatorio.push(`<a href="#" onclick="CargarCatalogo(`+i+`)">`+nomtemp+`</a>`);
        ordenCatalogosAleatorios[i]=vartemp;
    }
    console.log("Que son guardados aleatoriamente en la Varible Global ordenCatalogosAleatorios como: \n" + ordenCatalogosAleatorios);
    document.querySelector(".dropdown-content").innerHTML = TagMenuFinalAleatorio;
    console.log("Por lo tanto el orden Final de los TAGs (TagMenuFinalAleatorio) del menu es \n "+TagMenuFinalAleatorio+"\n\nPasamos a cargar logo y galería");
}

//Carga el catalogo y va mostrando las imagenes en la galería una vez que se eligió la marca en el menu
async function  CargarCatalogo(catalogo)
{   catalogoElegido = catalogo;
    console.clear();
    let marca=TagMenuFinalAleatorio[catalogo].substring(TagMenuFinalAleatorio[catalogo].indexOf(">")+1,TagMenuFinalAleatorio[catalogo].indexOf("<",TagMenuFinalAleatorio[catalogo].indexOf(">")));
    console.log("Resumen dentro de carga de Catalogo:\nEl Catalogo marcado es el No; "+catalogo+" \n Corresponde al Orden Final del catalogo "+ordenCatalogosAleatorios[catalogo]+"\n La marca es= "+  marca);
    document.querySelector(".Logo-marca").innerHTML = `<img src="img/Logo-`+marca+`.png" alt="`+marca+`">`
    console.log("El TAG del archivo que llama al Logo es:"+`<img src="img/Logo-`+marca+`.png" alt="`+marca+`">;`);
    console.log("\n\nIniciando la carga de la Galería el EoF estga en: "+EoF);
    let i=0;
    let tags=[];
    EoF=false;
    while(EoF==false)
    {   i++; 
        let nombreArchivo = "img/"+ordenCatalogosAleatorios[catalogo]+" - "+(i.toString()).padStart(3, '0')+".jpg";
        console.log("El nombre de la imagen a cargar es: "+nombreArchivo);

        let myObject = await fetch(nombreArchivo);
        console.log("Numero de estatus= "+myObject.status);
        if(myObject.status==404)
        {   
            console.log("El archivo "+nombreArchivo+" NO Existe");
            EoF=true;
        } else
        {   
            console.log("El archivo "+nombreArchivo+" Existe");
            EoF=false;
        }

        console.log("Despues de intentar cargar "+nombreArchivo+" EoF estga en: "+EoF);
        if(EoF==false)
        {   tags[i] = `<img src="`+nombreArchivo+`" id="img`+i+`" alt="`+marca+`" onclick="agrandarImagen('`+nombreArchivo+`')">\n`
            console.log("El tag nuevo es: "+tags[i]+"\n");
                
        }
        let strgtemp = (tags.toString()).replaceAll(",",'');
        console.log("Terminó la carga de la imagen\nLos Tags para la carga de la galería es: "+strgtemp);
        document.querySelector(".galeria").innerHTML = strgtemp;  
        totalDeImagenes=i;
    }
    agrandarImagen("img/"+ordenCatalogosAleatorios[catalogo]+" - "+("1").padStart(3, '0')+".jpg");
    //document.querySelector(".imagenCentral").innerHTML = "<span id=izquierda><</span><span id=derecha>></span>"; 

}

// Copia la imagen elegida de la galería a display grande central 
function agrandarImagen(file)
{   
     document.getElementById("imagenCentral").setAttribute("src",file); 
     document.getElementById("imagenCentral").setAttribute("style","height: 80vh;");
    //document.querySelector(".imagenCentral").innerHTML = `<img src="`+file+`" class="imagenCentral" alt="Detalle">`
}

 
function cambioDeImagen(direccion)
{   
    // direccion=parseInt(direccion);
    console.log("\nArranca el proceso de cambio de Imagen\nEl catalogo elegido es = "+catalogoElegido);
    console.log("Las imagenes totales de este catalogo son = "+ totalDeImagenes); 
    console.log("La dirección de movimiento es = "+ direccion);
    let archivoActual = document.getElementById("imagenCentral").getAttribute("src");
    console.log("el archivo actual de la imagen es = "+ archivoActual); 
    let numeroActual = archivoActual.substring(archivoActual.indexOf("-")+1,archivoActual.indexOf("."));
    numeroActual = parseInt(numeroActual);
    console.log("el numero actual de la imagen es ="+ numeroActual); 
    let archivoNuevo;
    let numeroNuevo;
    console.log(" El numero numeroActual+direccion es = "+ (numeroActual+direccion)); 
    
    
    if((numeroActual+direccion)<totalDeImagenes && (numeroActual+direccion)>0 ) 
    {    numeroNuevo = (direccion+numeroActual);
        console.log("Se avanzó normalmente y el  nuevoNumero es = " + (numeroNuevo));
    } else
    {   if (numeroActual==1) numeroNuevo=totalDeImagenes-1;
        else numeroNuevo = 1;
        console.log("Se llegó a un extremo y ahora nuevoNumero = " + numeroNuevo);
    } 
   
    archivoNuevo = archivoActual.substring(0,archivoActual.indexOf("-"))+"- "+ (numeroNuevo.toString()).padStart(3, '0')+".jpg"   
    console.log("El archivo nuevo de la imagen es a cargar es = "+ archivoNuevo); 

    agrandarImagen(archivoNuevo);
}

// PROGRAMA
window.onload =function() {
CargaInicialAleatoriaMenu();
}




