# HUES Web

A modern Next.js web application for the Habib University Entrepreneurship Society (HUES). This site provides event information and attendee registration  — backed by Firebase (Firestore + Admin SDK).

Highlights

- Clean, responsive UI built with Tailwind CSS
- Registration flow with validation and Firestore storage
- Server-side admin operations via Firebase Admin SDK

---

## Quick Start

Prerequisites

- Node.js 18 or newer
- A Firebase project (for Firestore + Admin SDK)
- `npm`

Install and run locally

```bash
git clone https://github.com/IfrahC/HUES-Web.git
cd HUES-Web
npm install
npm run dev
```

Open http://localhost:3000


## Tech Stack

- **Framework:** Next.js (React + TypeScript)
- **Styling:** Tailwind CSS (with utilities + optional Framer Motion)
- **Backend / Admin:** Firebase Admin SDK 
- **Database:** Firebase Firestore
- **Hosting**: Firebase

## Project Structure (important files)

```
src/
├─ app/
│  ├─ api/
│  │  ├─ register/        # registration API route
│  ├─ register/           # registration page
│  ├─ timeline/           # timeline page
│  └─ components/         # UI components
├─ lib/
│  ├─ firebase.ts         # client SDK wrapper
│  └─ firebase-admin.ts   # admin SDK wrapper
public/                   # static assets
```

---

## Scripts

- `npm run dev` — start development server
- `npm run build` — build for production
- `npm start` — run production server
- `npm run lint` — run linter

---
