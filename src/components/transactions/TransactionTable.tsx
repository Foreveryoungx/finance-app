"use client"

import { useState } from "react"
import { Search, Filter, ArrowUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { MOCK_TRANSACTIONS, Transaction } from "@/lib/data"

export function TransactionTable() {
    const [searchTerm, setSearchTerm] = useState("")
    const [sortConfig, setSortConfig] = useState<{ key: keyof Transaction; direction: 'asc' | 'desc' } | null>(null)

    const handleSort = (key: keyof Transaction) => {
        let direction: 'asc' | 'desc' = 'asc'
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc'
        }
        setSortConfig({ key, direction })
    }

    const filteredTransactions = MOCK_TRANSACTIONS.filter((t) =>
        t.merchant.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.category.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort((a, b) => {
        if (!sortConfig) return 0

        const aValue = a[sortConfig.key]
        const bValue = b[sortConfig.key]

        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1
        return 0
    })

    return (
        <div className="space-y-4">
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search transactions..."
                        className="w-full rounded-lg border border-input bg-background py-2 pl-9 pr-4 text-sm outline-none focus:ring-2 focus:ring-ring"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 rounded-lg border border-input bg-background px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                        <Filter className="h-4 w-4" />
                        Filter
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="rounded-xl border border-border bg-card overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="border-b border-border bg-muted/50">
                                <th
                                    className="cursor-pointer px-4 py-3 font-medium text-muted-foreground hover:text-foreground"
                                    onClick={() => handleSort('date')}
                                >
                                    <div className="flex items-center gap-1">Date <ArrowUpDown className="h-3 w-3" /></div>
                                </th>
                                <th
                                    className="cursor-pointer px-4 py-3 font-medium text-muted-foreground hover:text-foreground"
                                    onClick={() => handleSort('merchant')}
                                >
                                    <div className="flex items-center gap-1">Merchant <ArrowUpDown className="h-3 w-3" /></div>
                                </th>
                                <th
                                    className="cursor-pointer px-4 py-3 font-medium text-muted-foreground hover:text-foreground"
                                    onClick={() => handleSort('category')}
                                >
                                    <div className="flex items-center gap-1">Category <ArrowUpDown className="h-3 w-3" /></div>
                                </th>
                                <th
                                    className="cursor-pointer px-4 py-3 font-medium text-muted-foreground hover:text-foreground text-right"
                                    onClick={() => handleSort('amount')}
                                >
                                    <div className="flex items-center justify-end gap-1">Amount <ArrowUpDown className="h-3 w-3" /></div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {filteredTransactions.map((t) => (
                                <tr key={t.id} className="hover:bg-accent/50 transition-colors">
                                    <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{t.date}</td>
                                    <td className="px-4 py-3 font-medium text-foreground">{t.merchant}</td>
                                    <td className="px-4 py-3">
                                        <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                                            {t.category}
                                        </span>
                                    </td>
                                    <td className={cn(
                                        "px-4 py-3 text-right font-medium",
                                        t.type === 'income' ? "text-success" : "text-foreground"
                                    )}>
                                        {t.type === 'income' ? '+' : ''}{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(t.amount)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {filteredTransactions.length === 0 && (
                        <div className="p-8 text-center text-muted-foreground">
                            No transactions found.
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
