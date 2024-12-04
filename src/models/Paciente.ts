/*// src/models/Paciente.ts

import { generateUniqueId } from "../utils/IdGenerator";



export class Paciente {
  id: string;
  nombre: string;
  especie: string;
  idDueño: string;

  constructor(nombre: string, especie: string, idDueño: string) {
    this.id = generateUniqueId();
    this.nombre = nombre;
    this.especie = (especie.toLowerCase() === 'perro' || especie.toLowerCase() === 'gato') ? especie : 'exótico';
    this.idDueño = idDueño;
  }

  modificarDatos(nuevoNombre: string, nuevaEspecie: string): void {
    this.nombre = nuevoNombre;
    this.especie = (nuevaEspecie.toLowerCase() === 'perro' || nuevaEspecie.toLowerCase() === 'gato') ? nuevaEspecie : 'exótico';
  }
}
*/

export class Paciente {
  constructor(
    public nombre: string,
    public especie: string,
    public idCliente: string,
    public id: string
  ) {}

  modificarDatos(nuevoNombre: string, nuevaEspecie: string): void {
    this.nombre = nuevoNombre;
    this.especie = nuevaEspecie;
  }
}

