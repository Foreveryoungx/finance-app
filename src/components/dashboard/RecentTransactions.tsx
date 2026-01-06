"use client"

import { ShoppingBag, Coffee, Home, Car, ArrowUpRight, ArrowDownLeft } from "lucide-react"
import { cn } from "@/lib/utils"

const transactions = [
    { id: 1, name: "Whole Foods Market", date: "Today, 10:42 AM", amount: -142.50, category: "Groceries", icon: ShoppingBag, type: "expense" },
    { id: 2, name: "Starbucks", date: "Today, 8:15 AM", amount: -6.50, category: "Dining", icon: Coffee, type: "expense" },
    { id: 3, name: "Paycheck", date: "Yesterday", amount: 2450.00, category: "Income", icon: ArrowDownLeft, type: "income" },
    { id: 4, name: "Electric Bill", date: "Yesterday", amount: -125.00, category: "Utilities", icon: Home, type: "expense" },
    { id: 5, name: "Uber", date: "Oct 24", amount: -24.90, category: "Transport", icon: Car, type: "expense" },
]

export function RecentTransactions() {
    return (
        <div className="rounded-xl border border-border bg-card shadow-sm h-full flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-border">
                <h3 className="font-semibold text-card-foreground">Recent Transactions</h3>
                <button className="text-sm font-medium text-primary hover:underline">View All</button>
            </div>

            <div className="flex-1 overflow-auto p-2">
                <div className="space-y-1">
                    {transactions.map((t) => (
                        <div key={t.id} className="group flex items-center justify-between rounded-lg p-3 hover:bg-accent/50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className={cn(
                                    "flex h-10 w-10 items-center justify-center rounded-full",
                                    t.type === "income" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground group-hover:bg-background"
                                )}>
                                    <t.icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="font-medium text-foreground">{t.name}</div>
                                    <div className="text-xs text-muted-foreground">{t.category}</div>
                                </div>
                            </div>

                            <div className="text-right">
                                <div className={cn(
                                    "font-medium",
                                    t.type === "income" ? "text-success" : "text-foreground"
                                )}>
                                    {t.amount > 0 ? "+" : ""}{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(t.amount)}
                                </div>
                                <div className="text-xs text-muted-foreground">{t.date}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
