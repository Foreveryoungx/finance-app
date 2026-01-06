export type TransactionType = 'income' | 'expense';

export interface Transaction {
    id: string;
    date: string;
    merchant: string;
    category: string;
    amount: number;
    type: TransactionType;
    status: 'pending' | 'posted';
}

export const CATEGORIES = [
    'Groceries', 'Dining', 'Income', 'Utilities', 'Transport',
    'Entertainment', 'Shopping', 'Housing', 'Healthcare', 'Travel'
];

export const MOCK_TRANSACTIONS: Transaction[] = [
    { id: 't1', date: '2024-10-28', merchant: 'Whole Foods Market', category: 'Groceries', amount: 142.50, type: 'expense', status: 'posted' },
    { id: 't2', date: '2024-10-28', merchant: 'Starbucks', category: 'Dining', amount: 6.50, type: 'expense', status: 'posted' },
    { id: 't3', date: '2024-10-27', merchant: 'Employer Direct Dep', category: 'Income', amount: 2450.00, type: 'income', status: 'posted' },
    { id: 't4', date: '2024-10-27', merchant: 'City Utilities', category: 'Utilities', amount: 125.00, type: 'expense', status: 'posted' },
    { id: 't5', date: '2024-10-26', merchant: 'Uber', category: 'Transport', amount: 24.90, type: 'expense', status: 'posted' },
    { id: 't6', date: '2024-10-26', merchant: 'Netflix', category: 'Entertainment', amount: 15.99, type: 'expense', status: 'posted' },
    { id: 't7', date: '2024-10-25', merchant: 'Target', category: 'Shopping', amount: 89.20, type: 'expense', status: 'posted' },
    { id: 't8', date: '2024-10-25', merchant: 'Shell Station', category: 'Transport', amount: 45.00, type: 'expense', status: 'posted' },
    { id: 't9', date: '2024-10-24', merchant: 'Trader Joes', category: 'Groceries', amount: 65.40, type: 'expense', status: 'posted' },
    { id: 't10', date: '2024-10-24', merchant: 'Spotify', category: 'Entertainment', amount: 9.99, type: 'expense', status: 'posted' },
    { id: 't11', date: '2024-10-23', merchant: 'CVS Pharmacy', category: 'Healthcare', amount: 22.50, type: 'expense', status: 'posted' },
    { id: 't12', date: '2024-10-22', merchant: 'Delta Airlines', category: 'Travel', amount: 350.00, type: 'expense', status: 'posted' },
    { id: 't13', date: '2024-10-22', merchant: 'Airbnb', category: 'Travel', amount: 450.00, type: 'expense', status: 'posted' },
    { id: 't14', date: '2024-10-21', merchant: 'Comcast', category: 'Utilities', amount: 85.00, type: 'expense', status: 'posted' },
    { id: 't15', date: '2024-10-20', merchant: 'Amazon', category: 'Shopping', amount: 34.50, type: 'expense', status: 'posted' },
];

export interface BudgetCategory {
    id: string;
    name: string;
    assigned: number;
    spent: number;
}

export const MOCK_BUDGET: BudgetCategory[] = [
    { id: 'b1', name: 'Housing', assigned: 2400, spent: 2400 },
    { id: 'b2', name: 'Groceries', assigned: 600, spent: 850 },
    { id: 'b3', name: 'Dining', assigned: 300, spent: 420 },
    { id: 'b4', name: 'Utilities', assigned: 200, spent: 180 },
    { id: 'b5', name: 'Transport', assigned: 250, spent: 150 },
    { id: 'b6', name: 'Entertainment', assigned: 200, spent: 320 },
    { id: 'b7', name: 'Shopping', assigned: 150, spent: 210 },
    { id: 'b8', name: 'Healthcare', assigned: 100, spent: 45 },
    { id: 'b9', name: 'Travel', assigned: 500, spent: 0 },
];

export interface Goal {
    id: string;
    name: string;
    targetAmount: number;
    currentAmount: number;
    deadline?: string;
    color: string;
}

export const MOCK_GOALS: Goal[] = [
    { id: 'g1', name: 'Emergency Fund', targetAmount: 20000, currentAmount: 12500, deadline: '2025-12-31', color: '#10b981' },
    { id: 'g2', name: 'New Car', targetAmount: 35000, currentAmount: 8400, color: '#3b82f6' },
    { id: 'g3', name: 'European Vacation', targetAmount: 8000, currentAmount: 3200, deadline: '2024-06-01', color: '#8b5cf6' },
    { id: 'g4', name: 'Home Down Payment', targetAmount: 100000, currentAmount: 45000, color: '#f59e0b' },
];

export interface Asset {
    name: string;
    value: number;
    color: string;
    [key: string]: any;
}

export interface Holding {
    id: string;
    symbol: string;
    name: string;
    shares: number;
    price: number;
    change: number;
    marketValue: number;
    assetClass: string;
}

export const MOCK_ASSETS: Asset[] = [
    { name: 'Stocks', value: 85000, color: '#2563eb' },      // Blue
    { name: 'Bonds', value: 25000, color: '#10b981' },       // Green
    { name: 'Real Estate', value: 15000, color: '#f59e0b' }, // Amber
    { name: 'Cash', value: 12500, color: '#64748b' },        // Slate
    { name: 'Crypto', value: 8500, color: '#8b5cf6' },       // Purple
];

export const MOCK_HOLDINGS: Holding[] = [
    { id: 'h1', symbol: 'VTI', name: 'Vanguard Total Stock Market', shares: 150, price: 242.50, change: 1.25, marketValue: 36375, assetClass: 'Stocks' },
    { id: 'h2', symbol: 'VXUS', name: 'Vanguard Total Intl Stock', shares: 200, price: 58.40, change: -0.45, marketValue: 11680, assetClass: 'Stocks' },
    { id: 'h3', symbol: 'BND', name: 'Vanguard Total Bond Market', shares: 350, price: 72.10, change: 0.15, marketValue: 25235, assetClass: 'Bonds' },
    { id: 'h4', symbol: 'AAPL', name: 'Apple Inc.', shares: 50, price: 185.90, change: 2.30, marketValue: 9295, assetClass: 'Stocks' },
    { id: 'h5', symbol: 'O', name: 'Realty Income Corp', shares: 120, price: 52.40, change: -0.80, marketValue: 6288, assetClass: 'Real Estate' },
    { id: 'h6', symbol: 'BTC', name: 'Bitcoin', shares: 0.15, price: 42500, change: 5.40, marketValue: 6375, assetClass: 'Crypto' },
    { id: 'h7', symbol: 'MSFT', name: 'Microsoft Corp', shares: 25, price: 402.10, change: 1.85, marketValue: 10052, assetClass: 'Stocks' },
    { id: 'h8', symbol: 'ETH', name: 'Ethereum', shares: 1.2, price: 2350, change: 3.20, marketValue: 2820, assetClass: 'Crypto' },
];
