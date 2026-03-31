import { db } from "../config/database"
import { apiKeys } from "../db/schema/apiKeys"
import { eq } from "drizzle-orm"
import { hashKey } from "../utils/apiKeys"

export const apiKeyMiddleware = async (req:any,res:any,next:any)=>{

 const key = req.headers["x-api-key"] as string | undefined

 if(!key) return res.status(401).json({message:"Missing API key"})

 const hashed = hashKey(key)

 const result = await db
   .select()
   .from(apiKeys)
   .where(eq(apiKeys.keyHash, hashed))

 if(!result.length){
   return res.status(401).json({message:"Invalid API key"})
 }

 req.tenantId = result[0].tenantId

 next()
}
