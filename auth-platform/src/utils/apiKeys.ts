import crypto from "crypto"

export const generateApiKey = () => {
  return "sk_" + crypto.randomBytes(32).toString("hex")
}

export const hashKey = (key: string) => {
  return crypto.createHash("sha256").update(key).digest("hex")
}