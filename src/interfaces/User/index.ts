export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
  birthDate: string;
  describe: string;
  typeAccount: boolean;
  is_active: boolean;
  Address: IAddress;
}

export interface IAddress {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
}

export interface IUserUpdate {
  name?: string;
  cpf?: string;
  phone?: string;
  birthDate?: string;
  describe?: string;
  typeAccount?: boolean;
  is_active?: boolean;
  Address?: IAddressUpdate;
}

export interface IUserUpdateExcludeAddress {
  name?: string;
  cpf?: string;
  phone?: string;
  birthDate?: string;
  describe?: string;
  typeAccount?: boolean;
  is_active?: boolean;
}

export interface IAddressUpdate {
  cep?: string;
  state?: string;
  city?: string;
  street?: string;
  number?: string;
  complement?: string;
}
