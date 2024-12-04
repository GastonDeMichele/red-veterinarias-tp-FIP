/*// src/models/Cliente.ts

import { generateUniqueId } from '../utils/IdGenerator';

export class Cliente {
  id: string;
  nombre: string;
  telefono: string;
  esVIP: boolean;
  visitas: number;

  constructor(nombre: string, telefono: string, visitas: number = 0) {
    this.id = generateUniqueId();
    this.nombre = nombre;
    this.telefono = telefono;
    this.visitas = visitas;
    this.esVIP = this.verificarVIP();
  }

  private verificarVIP(): boolean {
    return this.visitas >= 5;
  }

  incrementarVisitas(): void {
    this.visitas++;
    this.esVIP = this.verificarVIP();
  }

  modificarDatos(nuevoNombre: string, nuevoTelefono: string): void {
    this.nombre = nuevoNombre;
    this.telefono = nuevoTelefono;
  }
}
*/

// models/Cliente.ts

export class Cliente {
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
