// src/models/Proveedor.ts

import { generarIdUnico } from '../utils/IdGenerator';

export class Proveedor {
  id: string;
  nombre: string;
  telefono: string;

  constructor(nombre: string, telefono: string) {
    this.id = generarIdUnico();
    this.nombre = nombre;
    this.telefono = telefono;
  }

  modificarDatos(nuevoNombre: string, nuevoTelefono: string): void {
    this.nombre = nuevoNombre;
    this.telefono = nuevoTelefono;
  }
}
