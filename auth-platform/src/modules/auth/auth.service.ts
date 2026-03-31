import * as repo from "./auth.repository"
import { hashPassword, comparePassword } from "../../utils/password"
import { generateAccessToken, generateRefreshToken } from "../../utils/jwt"

export const signup = async (data: any) => {

  const existing = await repo.findByEmail(data.email)

  if (existing) throw new Error("User exists")

  const hashed = await hashPassword(data.password)

  return repo.create({
    ...data,
    password: hashed
  })
}

export const login = async (data: any) => {

  const user = await repo.findByEmail(data.email)

  if (!user) throw new Error("Invalid credentials")

  const valid = await comparePassword(data.password, user.password!)

  if (!valid) throw new Error("Invalid credentials")

  const payload = {
    userId: user.id,
    tenantId: user.tenantId,
    roleId: user.roleId
  }

  return {
    accessToken: generateAccessToken(payload),
    refreshToken: generateRefreshToken(payload)
  }
}