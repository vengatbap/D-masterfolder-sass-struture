// Routes index placeholder
import { Router } from 'express';
import apiKeysRoutes from '../modules/apiKeys/apiKeys.routes';
import authRoutes from '../modules/auth/auth.routes';
import oauthRoutes from '../modules/oauth/oauth.routes';
import permissionsRoutes from '../modules/permissions/permissions.routes';
import rolesRoutes from '../modules/roles/roles.routes';
import tenantsRoutes from '../modules/tenants/tenants.routes';
import usersRoutes from '../modules/users/users.routes';

const router = Router();

router.use('/api-keys', apiKeysRoutes);
router.use('/auth', authRoutes);
router.use('/oauth', oauthRoutes);
router.use('/permissions', permissionsRoutes);
router.use('/roles', rolesRoutes);
router.use('/tenants', tenantsRoutes);
router.use('/users', usersRoutes);

export default router;
