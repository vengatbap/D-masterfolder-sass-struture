export const tenantMiddleware = (req: any, res: any, next: any) => {

  const tenantId = req.headers["x-tenant-id"]

  if (!tenantId) {
    return res.status(400).json({ message: "Tenant required" })
  }

  req.tenantId = tenantId
  next()
}