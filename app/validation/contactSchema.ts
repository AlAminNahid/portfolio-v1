import * as z from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(200, "Name length can't be greater than 200")
    .regex(/^[A-Za-z ]+$/, "Name can't contain numbers"),

  email: z
    .string()
    .min(1, "Email is required")
    .refine((val) => !val.includes(" "), {
      message: "Email cannot contain spaces",
    })
    .refine((val) => val.includes("@"), {
      message: "Email must include @",
    })
    .refine((val) => val.endsWith(".com"), {
      message: "Email must end with .com",
    }),

  message: z
    .string()
    .min(1, "Message is required")
    .max(1000, "Message too long"),
});
