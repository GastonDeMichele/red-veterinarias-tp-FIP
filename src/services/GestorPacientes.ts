/*import { Paciente } from '../models/Paciente';
import { generateUniqueId } from "../utils/IdGenerator";

export class GestorPacientes {
  private pacientes: Paciente[] = [];

  altaPaciente(nombre: string, especie: string, idDueño: string): Paciente {
    const nuevoPaciente = new Paciente(nombre, especie, idDueño);
    this.pacientes.push(nuevoPaciente);
    return nuevoPaciente;
  }

  modificarPaciente(id: string, nuevoNombre: string, nuevaEspecie: string): boolean {
    const paciente = this.pacientes.find(paciente => paciente.id === id);
    if (paciente) {
      paciente.modificarDatos(nuevoNombre, nuevaEspecie);
      return true;
    }
    return false;
  }

  bajaPaciente(id: string): boolean {
    const index = this.pacientes.findIndex(paciente => paciente.id === id);
    if (index !== -1) {
      this.pacientes.splice(index, 1);
      return true;
    }
    return false;
  }

  obtenerPacientes(): Paciente[] {
    return this.pacientes;
  }
}
*/

import { Paciente } from '../models/Paciente';
import { generateUniqueId } from "../utils/IdGenerator";

export class GestorPacientes {
  private pacientes: Paciente[] = [];

  altaPaciente(paciente: Paciente): Paciente {
    const id = generateUniqueId(); 
    paciente.id = id; 
    this.pacientes.push(paciente);
    return paciente;
  }

  modificarPaciente(id: string, nuevoNombre: string, nuevaEspecie: string): boolean {
    const paciente = this.pacientes.find(pac => pac.id === id);
    if (paciente) {
      paciente.modificarDatos(nuevoNombre, nuevaEspecie);
      return true;
    }
    return false;
  }

  bajaPaciente(id: string): boolean {
    const index = this.pacientes.findIndex(pac => pac.id === id);
    if (index !== -1) {
      this.pacientes.splice(index, 1);
      return true;
    }
    return false;
  }

  obtenerPacientes(): Paciente[] {
    return this.pacientes;
  }
}
