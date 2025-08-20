import z from 'zod';

const email_regex =
  /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

export const RegisterFormSchema = z
  .object({
    name: z.string('Preencha o campo nome').nonempty().min(2),
    email: z.email().trim().regex(email_regex, { message: 'Email inválido' }),
    password: z.string().min(8, 'A senha deve ter no minimo 8 caracteres.'),
    confirm_password: z.string().min(8),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'As senhas não coincidem',
    path: ['confirm_password'],
  });
