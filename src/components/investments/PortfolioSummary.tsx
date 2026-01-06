"use client"

import { TrendingUp, TrendingDown, DollarSign, Activity } from "lucide-react"
import { cn } from "@/lib/utils"

interface PortfolioSummaryProps {
    totalValue: number;
    dayChange: number;
    dayChangePercent: number;
}

export function PortfolioSummary({ totalValue, dayChange, dayChangePercent }: PortfolioSummaryProps) {
    const isPositive = dayChange >= 0;

    return (
        <div className="grid gap-6 md:grid-cols-3">
            {/* Total Value Card */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-muted-foreground">Total Portfolio Value</h3>
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                        <DollarSign className="h-4 w-4" />
                    </div>
                </div>
                <div className="mt-4">
                    <div className="text-3xl font-bold text-foreground">
                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalValue)}
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                        <span className={cn(
                            "flex items-center text-sm font-medium",
                            isPositive ? "text-success" : "text-destructive"
                        )}>
                            {isPositive ? <TrendingUp className="mr-1 h-3 w-3" /> : <TrendingDown className="mr-1 h-3 w-3" />}
                            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Math.abs(dayChange))}
                            <span className="ml-1">({dayChangePercent}%)</span>
                        </span>
                        <span className="text-xs text-muted-foreground">Today</span>
                    </div>
                </div>
            </div>

            {/* Performance Card (Placeholder for now) */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-muted-foreground">Total Returns</h3>
                    <div className="rounded-full bg-success/10 p-2 text-success">
                        <Activity className="h-4 w-4" />
                    </div>
                </div>
                <div className="mt-4">
                    <div className="text-3xl font-bold text-foreground">
                        +24.5%
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">All time weighted return</p>
                </div>
            </div>

            {/* Cash Balance */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-muted-foreground">Available Cash</h3>
                    <div className="rounded-full bg-secondary text-secondary-foreground p-2">
                        <DollarSign className="h-4 w-4" />
                    </div>
                </div>
                <div className="mt-4">
                    <div className="text-3xl font-bold text-foreground">
                        $12,500.00
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Ready to invest</p>
                </div>
            </div>
        </div>
    )
}
