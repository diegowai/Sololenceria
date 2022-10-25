//let marca=TagMenuFinalAleatorio[catalogo].substring(TagMenuFinalAleatorio[catalogo].indexOf(">")+1,TagMenuFinalAleatorio[catalogo].indexOf("<",TagMenuFinalAleatorio[catalogo].indexOf(">")));
   
var modelo; 

// import json from './data/catalos.json';
const canasta = Vue.createApp({
    data(){
       { return { productos:[
           { "marca": "Andressa","foto": 1,"modelo": "","talleMin": "","talleMax": "","colores": [],"cantidad": 0 },
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
           { "marca": "Brigitte","foto": 5,"modelo": "2130","talleMin": "85","talleMax": "100","colores": ["Blanco", "Negro", "Rojo", "Lemon", "Lila", "Sofía", "Azul", "Frutilla", "Rojo", "Vino", "Rosa Perla", "Nude", "Crudo", "Visión"],"cantidad": 0 },
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
        ],
            }
        }
    },
    // watch: {
    //     inputlinkId(val) {
    //        this.inputlinkId=val;
    //        this.inputlinkModelo=val;
    //     },

       
    //     inputlinkModelo(val) {
    //        this.inputlinkId=val;
    //        this.inputlinkModelo=val;
    //     }
    // }
    // ,
    methods:{
        agregarProductoConIf(){
            if (this.nuevoProducto != "") {
                this.productos.push({ nombre: this.nuevoProducto, cantidad: 0})
                this.nuevoProducto = '',
                this.aviso = false
            }
            else {
                this.aviso = true
                alert("Caja de texto vacía")
            }
        },
        addText() {
            const text          = this.$refs.text.value
            const textField     = this.$refs.textField
            textField.innerHTML = `${textField.innerHTML}<br>${text}`
        },
        agregarListaColores(){
            
        },

        cambioproducto(par1, par2){   
            //alert("entramos a"+marca+fotoId );
            var rango = -1;
            for (producto of this.productos)
            {   //console.log("Buscando "+par1+" "+par2 + " en "+producto.marca + " " + producto.foto );
                rango++;
                if( producto.marca == par1 && producto.foto == par2)
               { //console.log("Encontramos match en "+ producto );
                //console.log(" "+par1+" "+par2 + " econtrado en "+producto.marca + " " + producto.foto );
                  breack;
                }
                //console.log("el rango "+par1+" "+par2 +" no existe");
               // return ;
            }  

            const texto          = this.$refs.text.value
            const colores     = this.$refs.idcolor;
            idcolor.innerHTML = `${textField.innerHTML}<br>${text}`

            const text          = this.$refs.text.value
            const textField     = this.$refs.textField
            textField.innerHTML = `${textField.innerHTML}<br>${text}`

        }
 

        
    }
}).mount('#container')

// methods: { 
    //     cambiarDescripcion(){
    //         console.log("Entró")
    //     return modelo = productos[nro].modelo;
    //     }


    // },
    // methods2: {
    //     agregarProductoConIf(){
    //         if (this.nuevoProducto != "") {
    //             this.productos.push({ nombre: this.nuevoProducto, cantidad: 0})
    //             this.nuevoProducto = '',
    //             this.aviso = false
    //         }
    //         else {
    //             this.aviso = true
    //             alert("Caja de texto vacía")
    //         }
    //     }
    // },

                // if(rango>totalDeImagenes) rango=-1;
            // console.log("Finde busqueda. \n" );
            // if(rango!=-1) console.log("Producto Encontrado en "+rango+"  \n\n" );
            // else  console.log("Producto NO Encontrado.  \n\n" );

                
            //     for(let i=0;i<this.lenght(productos) ;i++)
            //     {   if( this.productos[i].marca == par1 && productos[i].fotoId == par2)
            //         { alert("el rango es"+ i );
            //             return i;
            //         }
            //     }
            //     alert("el rango no existe");
            //     return -1;
            // }
          
            // if (rango == -1) 
            // {   this.JSVUElinkModelo = "";
            //     this.idtalle.dis

            // }
            // else
            // {   for(i=0;i<productos[rango];)
            //     {}

            // }
            // this.JSVUElinkModelo = productos.
            // this.JSVUElinkModelo = productos[i].fotoId;
            // alert("CAMBIO DE PRODUCTO" + marca + fotoId);