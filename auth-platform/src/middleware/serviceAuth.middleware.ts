// Service Auth middleware placeholder
export const serviceAuthMiddleware = (req: any, res: any, next: any) => {
  // TODO: Implement service auth middleware
 const token = req.headers["x-service-token"]

 if(token !== process.env.SERVICE_SECRET){
   return res.status(403).json({message:"Invalid service token"})
 }

 next()
}