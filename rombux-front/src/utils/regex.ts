
// Nombre y apellido: solo letras y espacios, mínimo 2 caracteres, máximo 50
export const regexNombre = /^[a-zA-ZÀ-ÿ\s]{2,50}$/;

// Email: formato estándar de correo electrónico
export const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Teléfono: números, opcional + y código de país, entre 7 y 15 dígitos
export const regexTelefono = /^(\+?\d{1,4}[-.\s]?)?(\d{7,15})$/;

// Empresa: letras, números, espacios y algunos símbolos básicos, 2 a 100 caracteres
export const regexEmpresa = /^[a-zA-Z0-9À-ÿ\s.,'-]{2,100}$/;

// Mensaje: cualquier carácter, mínimo 5, máximo 500
export const regexMensaje = /^.{50,500}$/;

// Servicios seleccionados: como es un array de strings, no hace falta regex, pero podés validar que no esté vacío
export const validarServicios = (servicios: string[]) => servicios.length > 0;
