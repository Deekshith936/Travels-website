# Nayana Tours & Travels - Production Starter

Next.js 14 + TypeScript + Tailwind + Prisma/PostgreSQL travel agency platform with:
- Role-based JWT Admin Panel (`/admin`) for booking operations
- Vehicle CRUD
- Booking wizard + pricing engine endpoint
- Seeded Bangalore business data and route-ready schema

## Quick Start
1. `cp .env.example .env`
2. `npm install`
3. `npx prisma generate`
4. `npx prisma migrate dev --name init`
5. `npm run seed`
6. `npm run dev`

Default admin: `admin@nayana.com / Admin@123`

## Deployment
- Frontend: Vercel
- Database: Railway or Supabase PostgreSQL
- Media: AWS S3 via signed uploads
- Enable env vars from `.env.example`

See `docs/deployment-guide.md` and `docs/admin-user-manual.pdf`.
