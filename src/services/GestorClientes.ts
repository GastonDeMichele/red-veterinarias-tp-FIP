import { Cliente } from '../models/Cliente';

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
