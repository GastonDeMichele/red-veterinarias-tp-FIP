import { Proveedor } from '../models/Proveedor';

export class GestorProveedores {
  private proveedores: Proveedor[] = [];

  altaProveedor(nombre: string, telefono: string): Proveedor {
    const nuevoProveedor = new Proveedor(nombre, telefono);
    this.proveedores.push(nuevoProveedor);
    return nuevoProveedor;
  }

  modificarProveedor(id: string, nuevoNombre: string, nuevoTelefono: string): boolean {
    const proveedor = this.proveedores.find(prov => prov.id === id);
    if (proveedor) {
      proveedor.modificarDatos(nuevoNombre, nuevoTelefono);
      return true;
    }
    return false;
  }

  bajaProveedor(id: string): boolean {
    const index = this.proveedores.findIndex(prov => prov.id === id);
    if (index !== -1) {
      this.proveedores.splice(index, 1);
      return true;
    }
    return false;
  }

  obtenerProveedores(): Proveedor[] {
    return this.proveedores;
  }
}
