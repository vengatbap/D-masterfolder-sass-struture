import * as service from "./auth.service"

export const signup = async (req: any, res: any, next: any) => {
  try {
    const user = await service.signup(req.body)
    res.json(user)
  } catch (err) {
    next(err)
  }
}

export const login = async (req: any, res: any, next: any) => {
  try {
    const result = await service.login(req.body)
    res.json(result)
  } catch (err) {
    next(err)
  }
}