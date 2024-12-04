/*import { Veterinaria } from '../models/Veterinaria';
import { generateUniqueId } from "../utils/IdGenerator";


export class GestorVeterinarias {
  private veterinarias: Veterinaria[] = [];

  altaVeterinaria(nombre: string, direccion: string): Veterinaria {
    const nuevaVeterinaria = new Veterinaria(nombre, direccion);
    this.veterinarias.push(nuevaVeterinaria);
    return nuevaVeterinaria;
  }

  modificarVeterinaria(id: string, nuevoNombre: string, nuevaDireccion: string): boolean {
    const veterinaria = this.veterinarias.find(vet => vet.id === id);
    if (veterinaria) {
      veterinaria.modificarDatos(nuevoNombre, nuevaDireccion);
      return true;
    }
    return false;
  }

  bajaVeterinaria(id: string): boolean {
    const index = this.veterinarias.findIndex(vet => vet.id === id);
    if (index !== -1) {
      this.veterinarias.splice(index, 1);
      return true;
    }
    return false;
  }

  obtenerVeterinarias(): Veterinaria[] {
    return this.veterinarias;
  }
}
*/

// services/GestorVeterinarias.ts
import { Veterinaria } from '../models/Veterinaria';
import { generateUniqueId } from "../utils/IdGenerator";

export class GestorVeterinarias {
  private veterinarias: Veterinaria[] = [];

  altaVeterinaria(nombre: string, direccion: string): Veterinaria {
    const id = generateUniqueId(); // Generar un ID único
    const nuevaVeterinaria = new Veterinaria(nombre, direccion, id); // Asignar el ID
    this.veterinarias.push(nuevaVeterinaria);
    return nuevaVeterinaria;
  }

  modificarVeterinaria(id: string, nuevoNombre: string, nuevaDireccion: string): boolean {
    const veterinaria = this.veterinarias.find(vet => vet.id === id);
    if (veterinaria) {
      veterinaria.modificarDatos(nuevoNombre, nuevaDireccion);
      return true;
    }
    return false;
  }

  bajaVeterinaria(id: string): boolean {
    const index = this.veterinarias.findIndex(vet => vet.id === id);
    if (index !== -1) {
      this.veterinarias.splice(index, 1);
      return true;
    }
    return false;
  }

  obtenerVeterinarias(): Veterinaria[] {
    return this.veterinarias;
  }
}
