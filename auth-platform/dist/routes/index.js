"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Routes index placeholder
const express_1 = require("express");
const apiKeys_routes_1 = __importDefault(require("../modules/apiKeys/apiKeys.routes"));
const auth_routes_1 = __importDefault(require("../modules/auth/auth.routes"));
const oauth_routes_1 = __importDefault(require("../modules/oauth/oauth.routes"));
const permissions_routes_1 = __importDefault(require("../modules/permissions/permissions.routes"));
const roles_routes_1 = __importDefault(require("../modules/roles/roles.routes"));
const tenants_routes_1 = __importDefault(require("../modules/tenants/tenants.routes"));
const users_routes_1 = __importDefault(require("../modules/users/users.routes"));
const router = (0, express_1.Router)();
router.use('/api-keys', apiKeys_routes_1.default);
router.use('/auth', auth_routes_1.default);
router.use('/oauth', oauth_routes_1.default);
router.use('/permissions', permissions_routes_1.default);
router.use('/roles', roles_routes_1.default);
router.use('/tenants', tenants_routes_1.default);
router.use('/users', users_routes_1.default);
exports.default = router;
