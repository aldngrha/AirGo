# 🕊️ AirGo — Fast-Forward to Simplicity

Flysha is a Next.js-powered web platform built for speed, clarity, and modern DX. Backed by Prisma, secured with Lucia Auth, and styled with precision via TailwindCSS + ShadCN UI. It’s fast, reactive, and made for makers.

---

## ✨ Features

- ⚡ **Next.js 14** for blazing fast full-stack rendering  
- 🔐 **Lucia Auth** with Prisma adapter for secure authentication  
- 🧩 **React Hook Form + Zod** for type-safe, declarative form handling  
- 🎨 **ShadCN UI & Lucide Icons** for sleek, accessible UI  
- ⚙️ **Prisma ORM** for rock-solid DB modeling  
- ☁️ **Supabase** ready to go for scalable backend  
- 📦 **TanStack Query & Table** for efficient data fetching & rendering  
- 🌀 **TailwindCSS + Animate** for utility-first styling with smooth motion  

---

## 🧱 Tech Stack

| Layer         | Stack                                          |
|---------------|------------------------------------------------|
| Frontend      | React 18, Next.js 14, TailwindCSS              |
| Forms         | React Hook Form, Zod, @hookform/resolvers      |
| Auth          | Lucia Auth, Prisma Adapter, bcrypt             |
| Backend       | Supabase, Prisma, REST via Axios               |
| State & Data  | TanStack Query, TanStack Table                 |
| Styling       | Tailwind, clsx, cva, Radix UI                  |

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/your-username/flysha.git
cd flysha
pnpm install
```

### 2. Env Setup

Copy `.env.example` file and rename it to `.env`:

```
POSTGRES_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NO_SSL=
POSTGRES_URL_NON_POOLING=
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=
```

### 3. Prisma Setup

```bash
pnpm prisma generate
pnpm prisma migrate dev --name init
pnpm prisma db seed
```

### 4. Run Dev Server

```bash
pnpm dev
```

---

## 📁 Scripts

| Command             | Purpose                          |
|---------------------|----------------------------------|
| `pnpm dev`          | Start dev server (Next.js)       |
| `pnpm build`        | Build for production             |
| `pnpm start`        | Start production server          |
| `pnpm lint`         | Run ESLint                       |
| `pnpm prisma ...`   | Manage DB schema                 |
| `pnpm prisma db seed` | Run database seeder             |

---

## 🧪 Dev Experience

- **Strictly typed**: with TypeScript + Zod  
- **Beautiful code**: via Prettier, Biome, and ESLint  
- **Atomic styling**: Tailwind + class variance authority  
- **Composable UI**: with ShadCN UI primitives & Slot architecture  

---

## 📌 Project Structure

```
/prisma              → Schema & seeder
/public              → Public assets  
/src                 → Core app logic  
  /app               → Next.js App Router  
  /components/ui     → Reusable UI components  
  /lib               → Utilities, Auth, Fetchers  
  /types             → Type safety
  /hooks             → Custom Hooks
```

---

## ❤️ Credits

Built with care by Aldi Nugraha and inspired by modern SaaS engineering principles.

---

## 📄 License

MIT — Use it, remix it, ship it.

> “Simple is fast. Fast is beautiful.” — *AirGo Core Philosophy*
