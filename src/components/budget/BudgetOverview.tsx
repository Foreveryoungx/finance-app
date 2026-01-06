"use client"

import { DollarSign, PieChart, TrendingUp } from "lucide-react"

interface BudgetOverviewProps {
    totalIncome: number
    totalExpenses: number
    totalBudgeted: number
}

export function BudgetOverview({ totalIncome, totalExpenses, totalBudgeted }: BudgetOverviewProps) {
    const remaining = totalIncome - totalExpenses

    return (
        <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-muted-foreground">Total Income</h3>
                    <TrendingUp className="h-4 w-4 text-success" />
                </div>
                <div className="mt-4 text-2xl font-bold text-success">
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalIncome)}
                </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-muted-foreground">Total Budgeted</h3>
                    <PieChart className="h-4 w-4 text-primary" />
                </div>
                <div className="mt-4 text-2xl font-bold text-foreground">
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalBudgeted)}
                </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-muted-foreground">Remaining</h3>
                    <DollarSign className="h-4 w-4 text-foreground" />
                </div>
                <div className="mt-4 text-2xl font-bold text-foreground">
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(remaining)}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                    Actual savings
                </p>
            </div>
        </div>
    )
}
