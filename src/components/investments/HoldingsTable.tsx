"use client"

import { Holding } from "@/lib/data"
import { cn } from "@/lib/utils"

interface HoldingsTableProps {
    holdings: Holding[]
}

export function HoldingsTable({ holdings }: HoldingsTableProps) {
    return (
        <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border">
                <h3 className="font-semibold text-card-foreground">Holdings</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="border-b border-border bg-muted/50">
                            <th className="px-6 py-3 font-medium text-muted-foreground">Symbol</th>
                            <th className="px-6 py-3 font-medium text-muted-foreground">Name</th>
                            <th className="px-6 py-3 font-medium text-muted-foreground text-right">Price</th>
                            <th className="px-6 py-3 font-medium text-muted-foreground text-right">Change</th>
                            <th className="px-6 py-3 font-medium text-muted-foreground text-right">Value</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {holdings.map((holding) => (
                            <tr key={holding.id} className="hover:bg-accent/50 transition-colors">
                                <td className="px-6 py-4 font-medium text-foreground">{holding.symbol}</td>
                                <td className="px-6 py-4 text-muted-foreground">{holding.name}</td>
                                <td className="px-6 py-4 text-right text-foreground">
                                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(holding.price)}
                                </td>
                                <td className={cn(
                                    "px-6 py-4 text-right font-medium",
                                    holding.change >= 0 ? "text-success" : "text-destructive"
                                )}>
                                    {holding.change >= 0 ? '+' : ''}{holding.change}%
                                </td>
                                <td className="px-6 py-4 text-right font-medium text-foreground">
                                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(holding.marketValue)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
