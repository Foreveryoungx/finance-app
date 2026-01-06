# Finance App (Monarch Money Clone)

A premium, modern personal finance application built with Next.js 15, Tailwind CSS v4, and Recharts. Inspired by the aesthetics and functionality of Monarch Money.

## Features

- **📊 Dashboard**: High-level overview of your financial health, including Net Worth, Monthly Spending, and Recent Transactions.
- **💸 Transactions**: Detailed list view of all financial transactions with searching, filtering, and sorting capabilities.
- **💰 Budgeting**: Visual budget planning with progress bars for each category to track spending against limits.
- **🎯 Goals**: Track financial goals and savings progress with visual target indicators.
- **📈 Investments**: Monitor portfolio accumulation, asset allocation, and individual holdings.
- **📱 Responsive Design**: Fully responsive layout with a mobile-friendly navigation sidebar/drawer.
- **🎨 Premium UI**: Dark mode-first design with a custom color palette (Navy, Slate, Blue) and glassmorphism details.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Utilities**: `clsx`, `tailwind-merge`

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Foreveryoungx/finance-app.git
   cd finance-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open the app:**
   Open [http://localhost:3000](http://localhost:3000) (or the port specified in your terminal) to view it in the browser.

## Project Structure

- `src/app`: App Router pages and layouts.
- `src/components`: Reusable UI components.
    - `dashboard`: Components specific to the dashboard view.
    - `transactions`: Components for the transaction list.
    - `budget`: Components for the budgeting view.
    - `layout`: Global layout components like Sidebar.
- `src/lib`: Utility functions and mock data.

## License

MIT
