class Alumno {
  constructor(nombre, edad, carrera, institucion) {
    this.nombre = nombre;
    this.edad = edad;
    this.carrera = carrera;
  }

  mostrarInfo() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Carrera: ${this.carrera}`);
  }
}

const yo = new Alumno("Jenoveva", 38, "Desarrollo Full Stack");
yo.mostrarInfo();


class BandaMusical {
  constructor(nombre, genero, integrantes, discos) {
    this.nombre = nombre;
    this.genero = genero;
    this.integrantes = integrantes;
    this.discos = discos;
  }

  mostrarInfo() {
    console.log(`La banda ${this.nombre} toca ${this.genero} y tiene ${this.integrantes} integrantes.`);
  }

  listarDiscos() {
    console.log(`💿 Discos de ${this.nombre}:`);
    this.discos.forEach((disco, index) => {
      console.log(`${index + 1}. ${disco}`);
    });
  }
}

const miBanda = new BandaMusical(
  "Oasis", "Britpop", 5, ["Definitely Maybe", "(What's the story) Morning Glory", "Be Here Now"]);

miBanda.mostrarInfo();
miBanda.listarDiscos();


  class Perro {
  constructor(nombre, raza, edad, esRescatado) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
    this.esRescatado = esRescatado; 
  }

  mostrarInfo() {
    const estado = this.esRescatado ? "es una rescatada valiente" : "tiene hogar";
    console.log(`🐾 ${this.nombre} tiene ${this.edad} años, es de raza ${this.raza} y ${estado}.`);
  }

  ladrar() {
    console.log(`¡${this.nombre} dice: Guau guau! 🐕✨`);
  }
}

const molly = new Perro("Molly", "Quiltrita (única)", 8, true);

molly.mostrarInfo();
molly.ladrar();
