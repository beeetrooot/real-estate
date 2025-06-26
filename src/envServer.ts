import z from "zod";

const envSchema = z.object({
  ENVIRONMENT: z
    .enum(["development", "test", "production"])
    .default("development"),
  NEXT_PUBLIC_APP_TITLE: z.string().trim().min(1),
  APP_DESCRIPTION: z.string().trim().min(1),
  NEXT_PUBLIC_APP_URL: z.string().url(),
  BETTER_AUTH_SECRET: z.string().trim().min(20),
  NEXT_PUBLIC_PASSWORD_MIN_LENGTH: z.string().min(1).transform(Number),
  NEXT_PUBLIC_PASSWORD_MAX_LENGTH: z.string().min(1).transform(Number),
  RESEND_API_KEY: z.string().trim().min(20),
  EMAIL_FROM_ADDRESS: z.string().trim().email(),
  DB_HOST: z.string().trim().min(1),
  DB_PORT: z.string().trim().min(1).transform(Number),
  DB_USER: z.string().trim().min(1),
  DB_PASSWORD: z.string().trim().min(1),
  DB_NAME: z.string().trim().min(1),
});

const envServerSchema = envSchema.safeParse({
  ENVIRONMENT: process.env.ENVIRONMENT,
  NEXT_PUBLIC_APP_TITLE: process.env.NEXT_PUBLIC_APP_TITLE,
  APP_DESCRIPTION: process.env.APP_DESCRIPTION,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
  NEXT_PUBLIC_PASSWORD_MIN_LENGTH: process.env.NEXT_PUBLIC_PASSWORD_MIN_LENGTH,
  NEXT_PUBLIC_PASSWORD_MAX_LENGTH: process.env.NEXT_PUBLIC_PASSWORD_MAX_LENGTH,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  EMAIL_FROM_ADDRESS: process.env.EMAIL_FROM_ADDRESS,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
});

if (!envServerSchema.success) {
  console.error(envServerSchema.error.issues);
  throw new Error("There is an error with the server environment variables");
  process.exit(1);
}

export const envServer = envServerSchema.data;
