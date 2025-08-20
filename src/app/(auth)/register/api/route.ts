/** biome-ignore-all lint/suspicious/noConsole: <explanation> */
import { type NextRequest, NextResponse } from 'next/server';
import { RegisterFormSchema } from '@/lib/validations/register-validation';

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return String(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const { confirm_password, email, name, password } =
      RegisterFormSchema.parse(await request.json());
    console.log(
      `Nome: ${name} Email: ${email} Senha: ${password} Confirma Senha: ${confirm_password}`
    );

    return new NextResponse('Registro funciona');
  } catch (error) {
    return new NextResponse(getErrorMessage(error), { status: 400 });
  }
}
