/** biome-ignore-all lint/suspicious/noConsole: <explanation> */
import { type NextRequest, NextResponse } from 'next/server';
import { LoginFormSchema } from '@/lib/validations/login-validation';

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return String(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email, password } = LoginFormSchema.parse(await request.json());
    console.log(`{Email: ${email} Password: ${password}}`);

    return new NextResponse('Esta a funcionar');
  } catch (error: unknown) {
    // console.log(error.message);
    return new NextResponse(getErrorMessage(error), { status: 400 });
  }
}
