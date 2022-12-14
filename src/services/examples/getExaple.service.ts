import prismaCliente from "../../database/prismaCliente";

const myService = async () => {
  return await prismaCliente.user.findMany();
};

export default myService;
