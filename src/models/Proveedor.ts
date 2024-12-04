/*// src/models/Proveedor.ts

import { generateUniqueId } from "../utils/IdGenerator";



export class Proveedor {
  id: string;
  nombre: string;
  telefono: string;

  constructor(nombre: string, telefono: string) {
    this.id = generateUniqueId();
    this.nombre = nombre;
    this.telefono = telefono;
  }

  modificarDatos(nuevoNombre: string, nuevoTelefono: string): void {
    this.nombre = nuevoNombre;
    this.telefono = nuevoTelefono;
  }
}
*/


// models/Proveedor.ts

export class Proveedor {
  constructor(
    public nombre: string,
    public telefono: string,
    public id: string // El ID se pasa como parámetro
  ) {}

  modificarDatos(nuevoNombre: string, nuevoTelefono: string): void {
    this.nombre = nuevoNombre;
    this.telefono = nuevoTelefono;
  }
}
