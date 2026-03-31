"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
// User schema placeholder
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    firstName: zod_1.z.string().optional(),
    lastName: zod_1.z.string().optional(),
});
