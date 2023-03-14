import {
   getEmail,
   insertUser,
   getUsersByDate,
} from "../repositories/registrationsRepositories";
import { UserData } from "../protocols";
import dayjs from "dayjs";

export async function registerUserService(userData: UserData) {
   const emailExists = await getEmail(userData.email);
   if (emailExists) {
      throw Error("Conflict");
   }
   return await insertUser(userData);
}

export async function getUsersService(startDate: any, endDate: any) {
   let start = startDate?.toString();
   let end = endDate?.toString();
   start = dayjs(start).format();
   end = dayjs(end).format();

   return await getUsersByDate(start, end);
}
