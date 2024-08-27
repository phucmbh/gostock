import { z } from "zod";

export const RegisterBody = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Name must contain at least 2 characters")
      .max(256, "Password must contain at most 256 characters"),
    email: z.string().email(),
    password: z
      .string()
      .min(6, "Password must contain at least 6 characters")
      .max(100, "Password must contain at most 100 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must contain at least 6 characters")
      .max(100, "Confirm password must contain at most 100 characters"),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Password not match",
        path: ["confirmPassword"],
      });
    }
  });

export type RegisterBodyType = z.TypeOf<typeof RegisterBody>


export const LoginBody = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, "Password must contain at least 6 characters")
    .max(100, "Password must contain at most 100 characters"),
});

export type LoginBodyType = z.TypeOf<typeof LoginBody>


export const ForgetPasswordBody = z.object({
  email: z.string().email(),
})

export type ForgetPasswordType = z.TypeOf<typeof ForgetPasswordBody>