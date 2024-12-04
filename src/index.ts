/*// src/main.ts

import { Veterinaria } from './models/Veterinaria';
import { Cliente } from './models/Cliente';
import { Paciente } from './models/Paciente';
import { Proveedor } from './models/Proveedor';

import { GestorVeterinarias } from './services/GestorVeterinarias';
import { GestorClientes } from './services/GestorClientes';
import { GestorPacientes } from './services/GestorPacientes';
import { GestorProveedores } from './services/GestorProveedores';

// Inicializamos los gestores
const gestorVeterinarias = new GestorVeterinarias();
const gestorClientes = new GestorClientes();
const gestorPacientes = new GestorPacientes();
const gestorProveedores = new GestorProveedores();

// Crear una nueva veterinaria
const veterinaria1 = new Veterinaria('Veterinaria San José', 'Calle Ficticia 123');
gestorVeterinarias.altaVeterinaria(veterinaria1);

// Crear un nuevo cliente
const cliente1 = new Cliente('Juan Pérez', '123456789', 3);
gestorClientes.altaCliente(cliente1);

// Crear una nueva mascota
const mascota1 = new Paciente('Rex', 'perro', cliente1.id);
gestorPacientes.altaPaciente(mascota1);

// Crear un proveedor
const proveedor1 = new Proveedor('Distribuidora XYZ', '987654321');
gestorProveedores.altaProveedor(proveedor1);

// Mostrar las entidades en consola
console.log('Veterinarias:', gestorVeterinarias.getAllVeterinarias());
console.log('Clientes:', gestorClientes.getAllClientes());
console.log('Mascotas:', gestorPacientes.getAllPacientes());
console.log('Proveedores:', gestorProveedores.getAllProveedores());

// Modificar un cliente
cliente1.modificarDatos('Juan Pérez García', '1122334455');
gestorClientes.modificarCliente(cliente1);
console.log('Clientes después de modificación:', gestorClientes.getAllClientes());

// Baja de una veterinaria
gestorVeterinarias.bajaVeterinaria(veterinaria1.id);
console.log('Veterinarias después de baja:', gestorVeterinarias.getAllVeterinarias());
*/


// main.ts
import { GestorVeterinarias } from './services/GestorVeterinarias';
import { GestorClientes } from './services/GestorClientes';
import { GestorPacientes } from './services/GestorPacientes';
import { GestorProveedores } from './services/GestorProveedores';
import { Paciente } from './models/Paciente'; // Asegúrate de que la ruta sea la correcta


const gestorVeterinarias = new GestorVeterinarias();
const gestorClientes = new GestorClientes();
const gestorPacientes = new GestorPacientes();
const gestorProveedores = new GestorProveedores();

// Ejemplo de uso
// Creación de objetos
const veterinaria = gestorVeterinarias.altaVeterinaria('Veterinaria ABC', 'Calle Ficticia 123');
const cliente = gestorClientes.altaCliente('Juan Pérez', '555-1234');
const paciente = gestorPacientes.altaPaciente(new Paciente('Firulais', 'Perro', cliente.id, ''));
const proveedor = gestorProveedores.altaProveedor('Proveedor XYZ', '555-5678');

console.log(veterinaria, cliente, paciente, proveedor);
