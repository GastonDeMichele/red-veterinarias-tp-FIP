/*import { Cliente } from '../models/Cliente';
import { generateUniqueId } from "../utils/IdGenerator";

export class GestorClientes {
  private clientes: Cliente[] = [];

  altaCliente(nombre: string, telefono: string): Cliente {
    const nuevoCliente = new Cliente(nombre, telefono);
    this.clientes.push(nuevoCliente);
    return nuevoCliente;
  }

  modificarCliente(id: string, nuevoNombre: string, nuevoTelefono: string): boolean {
    const cliente = this.clientes.find(cliente => cliente.id === id);
    if (cliente) {
      cliente.modificarDatos(nuevoNombre, nuevoTelefono);
      return true;
    }
    return false;
  }

  bajaCliente(id: string): boolean {
    const index = this.clientes.findIndex(cliente => cliente.id === id);
    if (index !== -1) {
      this.clientes.splice(index, 1);
      return true;
    }
    return false;
  }

  obtenerClientes(): Cliente[] {
    return this.clientes;
  }
}
*/



import { Cliente } from '../models/Cliente';
import { generateUniqueId } from "../utils/IdGenerator";

export class GestorClientes {
  private clientes: Cliente[] = [];

  altaCliente(nombre: string, telefono: string): Cliente {
    const id = generateUniqueId(); // Generar un ID único
    const nuevoCliente = new Cliente(nombre, telefono, id); // Asignar el ID
    this.clientes.push(nuevoCliente);
    return nuevoCliente;
  }

  modificarCliente(id: string, nuevoNombre: string, nuevoTelefono: string): boolean {
    const cliente = this.clientes.find(cliente => cliente.id === id);
    if (cliente) {
      cliente.modificarDatos(nuevoNombre, nuevoTelefono);
      return true;
    }
    return false;
  }

  bajaCliente(id: string): boolean {
    const index = this.clientes.findIndex(cliente => cliente.id === id);
    if (index !== -1) {
      this.clientes.splice(index, 1);
      return true;
    }
    return false;
  }

  obtenerClientes(): Cliente[] {
    return this.clientes;
  }
}
