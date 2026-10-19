import { z } from 'zod';

export const loginSchema = z.object({
  email: z
  .string() // string es el tipo de dato que se va a usar
  .trim() // trim es el metodo que se va a usar para eliminar los espacios en blanco al comienzo y al final de la string
  .min(1, 'El correo electrónico es obligatorio')
  .pipe(z.email('El correo electrónico no es válido')),
  password: z
  .string()
  .min(1, 'La contraseña es obligatoria')
  .min(8, 'La contraseña debe tener al menos 8 caracteres'),
});

export type LoginFormValues = z.infer<typeof loginSchema>;