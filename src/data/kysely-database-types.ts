export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

export interface Account {
  accessToken: string | null;
  accessTokenExpiresAt: string | null;
  accountId: string;
  createdAt: string;
  id: string;
  idToken: string | null;
  password: string | null;
  providerId: string;
  refreshToken: string | null;
  refreshTokenExpiresAt: string | null;
  scope: string | null;
  updatedAt: string;
  userId: string;
}

export interface Session {
  createdAt: string;
  expiresAt: string;
  id: string;
  ipAddress: string | null;
  token: string;
  updatedAt: string;
  userAgent: string | null;
  userId: string;
}

export interface User {
  createdAt: string;
  email: string;
  emailVerified: number;
  id: string;
  image: string | null;
  name: string;
  role: UserRole;
  updatedAt: string;
}

export interface Verification {
  createdAt: string;
  expiresAt: string;
  id: string;
  identifier: string;
  updatedAt: string;
  value: string;
}

export interface DB {
  account: Account;
  session: Session;
  user: User;
  verification: Verification;
}
