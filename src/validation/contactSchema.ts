import * as z from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(200, "Name length can't be greater than 200")
    .regex(/^[A-Za-z\s'.-]+$/, "Name contains invalid characters"),

  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address"),

  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(1000, "Message too long"),

  website: z.string().optional(),
});
