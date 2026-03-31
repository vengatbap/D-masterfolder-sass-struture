"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiKeyMiddleware = void 0;
const database_1 = require("../config/database");
const apiKeys_1 = require("../db/schema/apiKeys");
const drizzle_orm_1 = require("drizzle-orm");
const apiKeys_2 = require("../utils/apiKeys");
const apiKeyMiddleware = async (req, res, next) => {
    const key = req.headers["x-api-key"];
    if (!key)
        return res.status(401).json({ message: "Missing API key" });
    const hashed = (0, apiKeys_2.hashKey)(key);
    const result = await database_1.db
        .select()
        .from(apiKeys_1.apiKeys)
        .where((0, drizzle_orm_1.eq)(apiKeys_1.apiKeys.keyHash, hashed));
    if (!result.length) {
        return res.status(401).json({ message: "Invalid API key" });
    }
    req.tenantId = result[0].tenantId;
    next();
};
exports.apiKeyMiddleware = apiKeyMiddleware;
