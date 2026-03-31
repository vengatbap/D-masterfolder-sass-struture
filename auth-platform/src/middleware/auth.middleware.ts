import { Request, Response, NextFunction } from "express"
import { verifyToken } from "../utils/jwt"

export const authMiddleware = (req: any, res: Response, next: NextFunction) => {

  const header = req.headers.authorization

  if (!header) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  const token = header.split(" ")[1]

  try {
    req.user = verifyToken(token)
    next()
  } catch {
    return res.status(401).json({ message: "Invalid token" })
  }
}