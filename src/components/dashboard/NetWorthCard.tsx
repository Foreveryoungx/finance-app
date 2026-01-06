"use client"

import { TrendingUp, TrendingDown, DollarSign } from "lucide-react"
import { cn } from "@/lib/utils"

interface NetWorthCardProps {
    total: number
    change: number
    changeType: "positive" | "negative"
}

export function NetWorthCard({ total, change, changeType }: NetWorthCardProps) {
    return (
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-muted-foreground">Net Worth</h3>
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <DollarSign className="h-4 w-4" />
                </div>
            </div>

            <div className="mt-4">
                <div className="text-3xl font-bold text-foreground">
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total)}
                </div>

                <div className="mt-1 flex items-center gap-2">
                    <span className={cn(
                        "flex items-center text-sm font-medium",
                        changeType === "positive" ? "text-success" : "text-destructive"
                    )}>
                        {changeType === "positive" ? <TrendingUp className="mr-1 h-3 w-3" /> : <TrendingDown className="mr-1 h-3 w-3" />}
                        {change}%
                    </span>
                    <span className="text-xs text-muted-foreground">vs last month</span>
                </div>
            </div>
        </div>
    )
}
