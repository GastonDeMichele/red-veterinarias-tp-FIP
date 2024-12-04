// Almacena los IDs generados para evitar duplicados
const generatedIds: Set<string> = new Set();

/**
 * Genera un identificador único
 * @returns {string} ID único
 */
export function generateUniqueId(): string {
    let newId: string;
    do {
        newId = Math.random().toString(36).substr(2, 9); // Genera un ID aleatorio
    } while (generatedIds.has(newId)); // Reintenta si el ID ya existe

    generatedIds.add(newId); // Almacena el nuevo ID en el conjunto
    return newId;
}

/**
 * Resetea los IDs generados (útil para pruebas)
 */
export function resetGeneratedIds(): void {
    generatedIds.clear();
}
