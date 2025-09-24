## 🛍️ Product Catalog Web App - JOB ASSESSMENT

A small but functional Product Catalog Web Application built with Next.js, React, TailwindCSS, and Context API (or Redux Toolkit) for state management.

👉 This app demonstrates:

- Fetching and displaying products from the Fake Store API

- Managing a shopping cart with global state ContextAPI to add/remove products

- Responsive UI with TailwindCSS

- Navigation between pages (Home, Products, Cart)

## 🚀 Features

1. Homepage

- Navigation bar with links to Home, Products, and Cart

- Hero section with headline and a Shop Now button linking to the Products page

2. Products Page

- Fetches products dynamically from the Fake Store API

- Displays products in a responsive grid

- Each product card shows:

✅ Product Image

✅ Title

✅ Price

✅ "Add to Cart" button

3. Cart Page

Uses Context API for cart state management

Displays:

✅ Added products

✅ Button to remove individual products

✅ Total price calculation

## 🛠️ Tech Stack

👉 Next.js 14 (App Router)
– React framework for production

👉React
– UI library

👉 TailwindCSS
– Utility-first CSS for styling

👉 Context API
– State management

👉 Fake Store API
– Mock API for products

## 📂 Project Structure

```
product-catalogue/
├── app/                       # Next.js App Router directory
│   ├── api/                   # API routes (server-side logic)
│   │   └── products/          # Products API endpoint
│   ├── carts/                 # Cart page
│   ├── context/               # Context API for global state (CartContext, etc.)
│   ├── products/              # Products page
│   ├── favicon.ico            # Favicon
│   ├── globals.css            # Global styles (TailwindCSS)
│   ├── layout.tsx             # Root layout (Navbar, providers, etc.)
│   └── page.tsx               # Home page
│
├── components/                # Reusable React components
│   ├── HeroSection.tsx        # Hero section component
│   ├── NavBar.tsx             # Navigation bar
│   ├── NavItem.tsx            # Single navigation item
│   └── ProductItem.tsx        # Product card component
│
├── interfaces/                # TypeScript interfaces & types
│   └── index.ts
│
├── public/                    # Static assets (images, icons, etc.)
│   └── images/
│       ├── background.jpg
│       └── background1.jpg
│
├── node_modules/              # Dependencies (auto-generated)
├── .gitignore                 # Git ignored files
├── eslint.config.mjs          # ESLint configuration
├── next-env.d.ts              # Next.js type definitions
├── next.config.ts             # Next.js configuration
├── package.json               # Project dependencies & scripts
├── package-lock.json          # Dependency lockfile

```

## 📖Approach

### Project Setup

- Initialized a Next.js project with App Router enabled with tailwindcss, and typescript.
- Layout & Navigation
- Built a reusable Navbar with links to Home, Products, and Cart.
- Added a Hero section with CTA linking to Products page.

👉 Products Page

- Fetched product data from Fake Store API using API Route.
- Displayed products in a responsive grid with Tailwind.
- Each product card has an "Add to Cart" button.

👉Cart Page

- Implemented global state management using Context API.
- Stored products in the cart with id, title, price, and quantity.
- Added remove button to delete individual items.
- Calculated total price dynamically using reduce().

## ⚙️ Installation & Setup

1. Clone the repo

```
   git clone https://github.com/your-username/product-catalogue-web-app.git
```

2. Navigate into the project folder

```
   cd product-catalogue-web-app/product-catalogue
```

3. Install dependencies

```
npm install
or
yarn install

```

4. Run the development server

```
npm run dev
or
yarn dev
```
