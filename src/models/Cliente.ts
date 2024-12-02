// src/models/Cliente.ts

import { generarIdUnico } from '../utils/IdGenerator';

export class Cliente {
  id: string;
  nombre: string;
  telefono: string;
  vip: boolean;
  visitas: number;

  constructor(nombre: string, telefono: string, visitas: number = 0) {
    this.id = generarIdUnico();
    this.nombre = nombre;
    this.telefono = telefono;
    this.visitas = visitas;
    this.vip = this.visitas >= 5;
  }

  registrarVisita(): void {
    this.visitas++;
    if (this.visitas >= 5) {
      this.vip = true;
    }
  }

  modificarDatos(nuevoNombre: string, nuevoTelefono: string): void {
    this.nombre = nuevoNombre;
    this.telefono = nuevoTelefono;
  }
}
