import { Request, NextFunction, Response } from "express";
import Joi from "joi";

export default function validateBody(
   req: Request,
   res: Response,
   next: NextFunction
) {
   const userData = req.body;
   const bodySchema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string()
         .email({ tlds: { allow: false } })
         .required(),
      cpf: Joi.string().required(),
      phone: Joi.string().required(),
   });
   const validate = bodySchema.validate(userData, { abortEarly: false });

   if (validate.error) {
      console.error(validate.error.details.map((detail) => detail.message));
      return res.sendStatus(422);
   }

   res.locals.userData = userData

   next();
}
