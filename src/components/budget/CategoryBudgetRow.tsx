"use client"

import { cn } from "@/lib/utils"
import { BudgetCategory } from "@/lib/data"
import { AlertCircle, CheckCircle2 } from "lucide-react"

interface CategoryBudgetRowProps {
    category: BudgetCategory
}

export function CategoryBudgetRow({ category }: CategoryBudgetRowProps) {
    const percentage = Math.min((category.spent / category.assigned) * 100, 100)
    const isOverBudget = category.spent > category.assigned
    const remaining = category.assigned - category.spent

    return (
        <div className="flex items-center gap-4 py-4 hover:bg-accent/50 p-4 rounded-lg transition-colors">
            <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">{category.name}</span>
                        {isOverBudget && (
                            <span className="inline-flex items-center rounded-full bg-destructive/10 px-2 py-0.5 text-xs font-medium text-destructive">
                                <AlertCircle className="mr-1 h-3 w-3" />
                                Over
                            </span>
                        )}
                        {!isOverBudget && category.spent > 0 && (
                            <span className="inline-flex items-center rounded-full bg-success/10 px-2 py-0.5 text-xs font-medium text-success">
                                <CheckCircle2 className="mr-1 h-3 w-3" />
                                On Track
                            </span>
                        )}
                    </div>
                    <div className="text-sm">
                        <span className={cn("font-medium", isOverBudget ? "text-destructive" : "text-foreground")}>
                            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(category.spent)}
                        </span>
                        <span className="text-muted-foreground mx-1">of</span>
                        <span className="text-muted-foreground">
                            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(category.assigned)}
                        </span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                    <div
                        className={cn("h-full rounded-full transition-all duration-500",
                            isOverBudget ? "bg-destructive" : "bg-success"
                        )}
                        style={{ width: `${percentage}%` }}
                    />
                </div>

                <div className="flex justify-end text-xs">
                    <span className={cn(
                        isOverBudget ? "text-destructive" : "text-muted-foreground"
                    )}>
                        {isOverBudget
                            ? `${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Math.abs(remaining))} over`
                            : `${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(remaining)} left`
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}
