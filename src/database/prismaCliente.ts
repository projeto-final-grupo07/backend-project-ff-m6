import { PrismaClient } from '@prisma/client';

// async function excludePasswordMiddleware(params: any, next: any) {
//   const result = await next(params);
//   if (params?.model === 'User' && params?.args?.select?.password !== true) {
//     delete result.password;
//   }
//   return result;
// }

const prismaCliente = new PrismaClient();
// prismaCliente.$use(excludePasswordMiddleware);
export default prismaCliente;
