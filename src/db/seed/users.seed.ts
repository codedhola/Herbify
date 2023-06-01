import { User } from "@db/models/users.model";

export const User_Seed:Array<Pick<User, "id" | "name" | "email" | "password" | "api_key" | "role">> = [
    {
      id: "b96a803e-797a-4a01-8a85-a605a9a7b21f",
      name: "Coded-hola",
      email:"Codedhola2000@gmail.com",
      password: "developer",
      api_key: "6hjxdbluxd7az68uvdo24ct5xv5e2l",
      role: "admin"
    },
    {
        id: "c32fe25a-5c14-43e3-b450-c7994a7af27c",
        name: "Hola-samuel",
        email:"olakintan2014@gmail.com",
        password: "developer",
        api_key: "lr7k1kgxnstkpj4hmnf303fj00p7n0",
        role: "user"
      },
      {
        id: "5660fcf3-8dfe-4c09-8f91-b88306e389a0",
        name: "samuel owams",
        email:"coded_hola@outlook.com",
        password: "developer",
        api_key: "f3x75gmf2p3mpd7sac9mbj1pdta8c4",
        role: "user"
      }
  ];
