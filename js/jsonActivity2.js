//original
const datos = [
  {
    aseguradora: "AFIRME",
    cotizacion: {
      cliente: {
        tipoPersona: "fisica",
        nombre: "prueba",
        apellidoPat: "prueba",
        apellidoMat: "prueba",
        rfc: "",
        fechaNacimiento: "01-01-2005",
        ocupacion: "",
        curp: "",
        direccion: {
          calle: "oriente 945",
          noExt: "410",
          noInt: "021",
          colonia: "prueba",
          codPostal: "56618",
          poblacion: "mexico",
          ciudad: "cdmx",
          pais: "mexico",
        },
        edad: "18",
        genero: "MASCULINO",
        telefono: "",
        email: "",
      },
    },
  },
];

//haciendo el deep copy
//1-Necesitamnos JSON.stringify para convertirel objeto llamado "datos" a string (elimina la referencia original en memoria)
//2-Necesitamos JSON.parse para convertirlo de nuevo a un objeto
//3-Al asignarlo a "copia" con esto estamos creando la copia del objeto "datos" al cual podremos modificarle información sin afectar a "datos"
const copia = JSON.parse(JSON.stringify(datos));

//Modificar datos para la copia
// ponemos copia ya que es el nombre de nuestro nuevo arrreglo que se ha duplicado
// el [0] se usa para acceder al primer elemento dentro del objeto es decir que podemos ver "Aseguradora : "AFIRME" y el objeto de "cotizacion" y ya de ahi acceder a sus propiedades"
// para poder en este caso cambiar el nombre debemos acceder a cada propiedad una por una en el orden del objeto y asi poder asignarle un nuevo valor como se ve abajo
copia[0].cotizacion.cliente.apellidoPat = "Cristobal";
copia[0].cotizacion.cliente.rfc = "CIGO000318";
copia[0].cotizacion.cliente.email = "Computadoraz63@gmail.com";
copia[0].cotizacion.cliente.direccion.colonia = "Jaime Torres Bodet";
copia[0].cotizacion.cliente.fechaNacimiento = "18-03-2000";


// imprimir en consola

//Formato:
//JSON.stringify(valor, replacer, space)
//valor: sera el arreglo que queremos mostrar "datos o copia"
//replacer: se usara null para quen no aplique ningun filtro al objeto y lo deje como esta
// space: pondremos 2 espacios de identacion
console.log("Original:");
// console.log(datos);
console.log(JSON.stringify(datos, null, 2));

console.log("Copia:");
console.log(JSON.stringify(copia, null, 2));

