import { NextFunction, Request, Response } from "express";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export default function validateDateFormat(
   req: Request,
   res: Response,
   next: NextFunction
) {
   const { startDate, endDate } = req.query;
   const regex = /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)[0-9]{2}/

   if (typeof startDate !== "string" || typeof endDate !== "string") {
      return res.sendStatus(422);
   }

   if(!regex.test(startDate) || !regex.test(endDate)){
    return res.status(422).send('invalid date format')
   }
   if(dayjs(startDate).isAfter(endDate)){
    return res.status(400).send("endDate must be greater than startDate")
   }

   res.locals.startDate = startDate
   res.locals.endDate = endDate

   next();
}
