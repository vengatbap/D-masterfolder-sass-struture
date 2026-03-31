"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.findByEmail = exports.AuthRepository = void 0;
// Auth repository placeholder
const database_1 = require("../../config/database");
const users_1 = require("../../db/schema/users");
const drizzle_orm_1 = require("drizzle-orm");
class AuthRepository {
}
exports.AuthRepository = AuthRepository;
const findByEmail = async (email) => {
    const [user] = await database_1.db.select().from(users_1.users).where((0, drizzle_orm_1.eq)(users_1.users.email, email)).limit(1);
    return user;
};
exports.findByEmail = findByEmail;
const create = async (data) => {
    const [user] = await database_1.db.insert(users_1.users).values(data).returning();
    return user;
};
exports.create = create;
