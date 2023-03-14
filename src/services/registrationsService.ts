import {
   getEmail,
   insertUser,
} from "../repositories/registrationsRepositories";
import { UserData } from "../protocols";

export async function registerUserService(userData: UserData) {
   const emailExists = await getEmail(userData.email);
   if (emailExists) {
      throw Error("Conflict");
   }

   return await insertUser(userData);
}
