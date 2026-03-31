"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenantSchema = void 0;
// Tenant schema placeholder
const zod_1 = require("zod");
exports.tenantSchema = zod_1.z.object({
    name: zod_1.z.string().min(1),
    domain: zod_1.z.string().optional(),
});
