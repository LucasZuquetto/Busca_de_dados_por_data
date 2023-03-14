import {
   getEmail,
   insertUser,
} from "../repositories/registrationsRepositories";
import { UserData } from "../protocols";
import dayjs from "dayjs";

export async function registerUserService(userData: Omit<UserData, "created_at">) {
   console.log(dayjs().format("DD/MM/YYYY"));

   const emailExists = getEmail(userData.email);

   if (emailExists) {
      throw Error();
   }
   const userObject = { ...userData, created_at: dayjs().format("DD/MM/YYYY") };

   await insertUser(userObject);
}
