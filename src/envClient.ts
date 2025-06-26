"use client";

import z from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_APP_TITLE: z.string().trim().min(1),
  NEXT_PUBLIC_APP_URL: z.string().url(),
  NEXT_PUBLIC_PASSWORD_MIN_LENGTH: z.string().transform(Number),
  NEXT_PUBLIC_PASSWORD_MAX_LENGTH: z.string().transform(Number),
});

const envClientSchema = envSchema.safeParse({
  NEXT_PUBLIC_APP_TITLE: process.env.NEXT_PUBLIC_APP_TITLE,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NEXT_PUBLIC_PASSWORD_MIN_LENGTH: process.env.NEXT_PUBLIC_PASSWORD_MIN_LENGTH,
  NEXT_PUBLIC_PASSWORD_MAX_LENGTH: process.env.NEXT_PUBLIC_PASSWORD_MAX_LENGTH,
});

if (!envClientSchema.success) {
  console.error(envClientSchema.error.issues);
  throw new Error("There is an error with the client environment variables");
  process.exit(1);
}

export const envClient = envClientSchema.data;
