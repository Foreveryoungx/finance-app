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
