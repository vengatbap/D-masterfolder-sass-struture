PORT=5000

DATABASE_URL=postgresql://postgres:root@localhost:5432/jewellery_erp
# keep Neon credentials secure: do not expose them to client-side code

# DATABASE_URL='postgresql://neondb_owner:maWPi1QudeO7@ep-withered-cell-a4rvusq5-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
# REDIS_URL=redis://localhost:6379
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REDIS_PASSWORD=
# NODE_ENV=development

DB_HOST=localhost
DB_PORT=5432    
DB_USER=postgres
DB_PASSWORD=root
DB_NAME =jewellery_erp
JWT_SECRET=supersecret