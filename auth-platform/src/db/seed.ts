import { db } from "../config/database"
import { roles } from "./schema/roles"
import { permissions } from "./schema/permissions"
import { products } from "./schema/products"
import {rolesSeed , permissionsSeed , productsSeed } from './seeds'

async function seed(){

 console.log("Seeding database")

 await db.insert(products).values(productsSeed)

 await db.insert(permissions).values(permissionsSeed)

 await db.insert(roles).values(rolesSeed)


}

if (require.main === module) {
  seed()
}