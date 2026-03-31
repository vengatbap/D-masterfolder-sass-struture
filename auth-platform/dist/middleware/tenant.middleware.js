"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenantMiddleware = void 0;
const tenantMiddleware = (req, res, next) => {
    const tenantId = req.headers["x-tenant-id"];
    if (!tenantId) {
        return res.status(400).json({ message: "Tenant required" });
    }
    req.tenantId = tenantId;
    next();
};
exports.tenantMiddleware = tenantMiddleware;
