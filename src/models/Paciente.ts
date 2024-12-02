// src/models/Paciente.ts

import { generarIdUnico } from '../utils/IdGenerator';

export class Paciente {
  id: string;
  nombre: string;
  especie: string;
  idDueño: string;

  constructor(nombre: string, especie: string, idDueño: string) {
    this.id = generarIdUnico();
    this.nombre = nombre;
    this.especie = (especie.toLowerCase() === 'perro' || especie.toLowerCase() === 'gato') ? especie : 'exótico';
    this.idDueño = idDueño;
  }

  modificarDatos(nuevoNombre: string, nuevaEspecie: string): void {
    this.nombre = nuevoNombre;
    this.especie = (nuevaEspecie.toLowerCase() === 'perro' || nuevaEspecie.toLowerCase() === 'gato') ? nuevaEspecie : 'exótico';
  }
}
