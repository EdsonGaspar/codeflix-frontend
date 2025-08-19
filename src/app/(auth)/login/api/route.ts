import { type NextRequest, NextResponse } from 'next/server';
import { LoginFormSchema } from '@/lib/validations/login-validation';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = LoginFormSchema.parse(await request.json());
    // biome-ignore lint/suspicious/noConsole: <explanation>
    console.log(`{Email: ${email} Password: ${password}}`);

    return new NextResponse('Esta a funcionar');
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (error: any) {
    // biome-ignore lint/suspicious/noConsole: <explanation>
    console.log(error.message);
    return new NextResponse(error.message, { status: 400 });
  }
}
