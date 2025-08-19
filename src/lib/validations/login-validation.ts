import z from 'zod';

const email_regex =
  /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
export const LoginFormSchema = z.object({
  email: z.email().trim().regex(email_regex, { message: 'Email inválido' }),
  password: z.string().min(8),
});
