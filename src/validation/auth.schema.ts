import { z } from "zod";

export const RegisterBody = z.object({
  name: z.string().trim().min(2).max(256),
  email: z.string().email(),
  password: z.string().min(6).max(100),
  confirmPassword: z.string().min(6).max(100),
}).strict().superRefine(({password, confirmPassword}, ctx) => {
  if(password !== confirmPassword){
    ctx.addIssue({
      code:'custom',
      message:'Password not match',
      path: ['confirmPassword']
    })
  }
})

export type RegisterBodyType = z.TypeOf<typeof RegisterBody>