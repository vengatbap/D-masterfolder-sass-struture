"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
const redis_1 = require("../config/redis");
const authorize = (permission) => {
    return async (req, res, next) => {
        const roleId = req.user.roleId;
        const key = `role:${roleId}`;
        let permissions = await redis_1.redis.get(key);
        if (!permissions) {
            // TODO: load from DB
            permissions = JSON.stringify(["create_user"]);
            await redis_1.redis.set(key, permissions);
        }
        const parsed = JSON.parse(permissions);
        if (!parsed.includes(permission)) {
            return res.status(403).json({ message: "Forbidden" });
        }
        next();
    };
};
exports.authorize = authorize;
