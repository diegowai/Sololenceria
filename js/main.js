// PARAMETROS A INGRESAR MANUALMENTE
const nombreCatalogos = [ "Andressa 2021", "Brigitte 2021","Maia 2020","Kaury 2021"];

// Variables Globales
const totalCatalogos = nombreCatalogos.length;
const ordenCatalogosAleatorios=[];
const TagMenuFinalAleatorio=[];
var EoF=false;

console.log("Se incluirán en la página "+totalCatalogos+" Catalogos en orden aleatorio.");

// Funciones
// Carga el menu Pull Down con los nombre de catalogos cargados a mano en nombreCatalogos 
function CargaInicialAleatoriaMenu() 
{   let Arraytemp=[];
    const NomTemp = Arraytemp.concat(nombreCatalogos);//No entontre mejor forma de copiar nombreCatalogo a NomTemp
    console.log("Los catalogos incluidos manuelamente son: \n" + NomTemp);
    
    for(let i = 0; i<totalCatalogos;i++)
    {   let x = parseInt(Math.random()*(totalCatalogos-i));
        let vartemp = NomTemp.splice(x,1);
        TagMenuFinalAleatorio.push(`<a href="#" onclick="CargarCatalogo(`+i+`)">`+vartemp+`</a>`);
        ordenCatalogosAleatorios[i]=vartemp;
    }
    console.log("Que son guardados aleatoriamente en la Varible Global ordenCatalogosAleatorios como: \n" + ordenCatalogosAleatorios);
    document.querySelector(".dropdown-content").innerHTML = TagMenuFinalAleatorio;
    console.log("Por lo tanto el orden Final de los TAGs del menu es \n "+TagMenuFinalAleatorio+"\n\nPasamos a cargar logo y galería");
}

async function  CargarCatalogo(catalogo)
{   
    console.clear();
    let marca=TagMenuFinalAleatorio[catalogo].substring(TagMenuFinalAleatorio[catalogo].indexOf(">")+1,TagMenuFinalAleatorio[catalogo].indexOf(" ",TagMenuFinalAleatorio[catalogo].indexOf(">")));
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
    }
}


function agrandarImagen(file)
{   
     document.getElementById("imagenCentral").setAttribute("src",file); 
     document.getElementById("imagenCentral").setAttribute("style","height: 80vh;");
    //document.querySelector(".imagenCentral").innerHTML = `<img src="`+file+`" class="imagenCentral" alt="Detalle">`
}

// PROGRAMA
window.onload =function() {
CargaInicialAleatoriaMenu();
}




