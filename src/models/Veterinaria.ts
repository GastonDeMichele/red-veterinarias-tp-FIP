/*// src/models/Veterinaria.ts

import { generateUniqueId } from "../utils/IdGenerator";





export class Veterinaria {
  id: string;
  nombre: string;
  direccion: string;

  constructor(nombre: string, direccion: string) {
    this.id = generateUniqueId();
    this.nombre = nombre;
    this.direccion = direccion;
  }

  modificarDatos(nuevoNombre: string, nuevaDireccion: string): void {
    this.nombre = nuevoNombre;
    this.direccion = nuevaDireccion;
  }
}*/


// models/Veterinaria.ts

export class Veterinaria {
  constructor(
    public nombre: string,
    public direccion: string,
    public id: string // El ID se pasa como parámetro
  ) {}

  modificarDatos(nuevoNombre: string, nuevaDireccion: string): void {
    this.nombre = nuevoNombre;
    this.direccion = nuevaDireccion;
  }
}
