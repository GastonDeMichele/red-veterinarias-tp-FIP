// src/models/Veterinaria.ts

import { generarIdUnico } from '../utils/IdGenerator';

export class Veterinaria {
  id: string;
  nombre: string;
  direccion: string;

  constructor(nombre: string, direccion: string) {
    this.id = generarIdUnico();
    this.nombre = nombre;
    this.direccion = direccion;
  }

  modificarDatos(nuevoNombre: string, nuevaDireccion: string): void {
    this.nombre = nuevoNombre;
    this.direccion = nuevaDireccion;
  }
}
