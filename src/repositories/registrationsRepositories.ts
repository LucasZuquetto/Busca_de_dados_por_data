import { UserData } from "../protocols";
import { prisma } from "../config/database";

export async function getEmail(email: string) {
   return await prisma.forms_answers.findFirst({ where: { email } });
}

export async function insertUser(userObject: UserData) {
   return await prisma.forms_answers.create({
      data: userObject,
   });
}

export async function getUsersByDate(startDate:string, endDate:string){
   return await prisma.forms_answers.findMany({
      where:{
         created_at:{
            lte:endDate,
            gte:startDate
         }
      }
   })
}