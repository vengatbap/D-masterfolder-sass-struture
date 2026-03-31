// Auth repository placeholder
import { db } from "../../config/database"
import { users } from "../../db/schema/users"
import { eq } from "drizzle-orm"

export class AuthRepository {
  // TODO: Implement auth repository methods
}

export const findByEmail = async (email: string) => {
  const [user] = await db.select().from(users).where(eq(users.email, email)).limit(1)
  return user
}

export const create = async (data: any) => {
  const [user] = await db.insert(users).values(data).returning()
  return user
}
