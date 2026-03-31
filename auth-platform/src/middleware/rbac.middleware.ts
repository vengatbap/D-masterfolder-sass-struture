import { redis } from "../config/redis"

export const authorize = (permission: string) => {

  return async (req: any, res: any, next: any) => {

    const roleId = req.user.roleId
    const key = `role:${roleId}`

    let permissions = await redis.get(key)

    if (!permissions) {
      // TODO: load from DB
      permissions = JSON.stringify(["create_user"])
      await redis.set(key, permissions)
    }

    const parsed = JSON.parse(permissions)

    if (!parsed.includes(permission)) {
      return res.status(403).json({ message: "Forbidden" })
    }

    next()
  }
}