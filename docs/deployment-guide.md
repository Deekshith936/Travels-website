# Deployment Guide

## Vercel
- Import repository and set build command: `npm run build`
- Add env vars from `.env.example`
- Configure domain + HTTPS

## Database
- Create PostgreSQL on Railway/Supabase
- Run Prisma migrations during deploy: `npx prisma migrate deploy`

## Backups & Security
- Enable daily DB backups
- Rotate JWT secret and API keys quarterly
- Force HTTPS and monitor logs
