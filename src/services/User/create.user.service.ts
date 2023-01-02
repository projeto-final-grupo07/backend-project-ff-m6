import { hash } from 'bcryptjs';
import prismaCliente from '../../database/prismaCliente';
import { IUserCreate } from '../../interfaces/User';

const CreateUserService = async (data: IUserCreate) => {
  const {
    Address,
    birthDate,
    cpf,
    describe,
    email,
    is_active,
    name,
    password,
    phone,
    typeAccount,
  }: IUserCreate = data;

  const user = await prismaCliente.user.create({
    data: {
      birthDate: new Date(birthDate),
      cpf,
      describe,
      email,
      name,
      password: await hash(password, 10),
      phone,
      is_active,
      typeAccount,
      Address: {
        create: {
          cep: Address.cep,
          city: Address.city,
          complement: Address.complement,
          number: Address.number,
          state: Address.state,
          street: Address.street,
        },
      },
    },
    include: {
      Address: true,
    },
  });

  return user;
};

export default CreateUserService;
