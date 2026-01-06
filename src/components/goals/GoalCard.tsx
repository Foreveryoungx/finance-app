"use client"

import { Goal } from "@/lib/data"
import { Calendar, Target } from "lucide-react"

interface GoalCardProps {
    goal: Goal
}

export function GoalCard({ goal }: GoalCardProps) {
    const percentage = Math.min((goal.currentAmount / goal.targetAmount) * 100, 100)

    return (
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col h-full transition-all hover:shadow-md">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h3 className="font-semibold text-lg text-foreground">{goal.name}</h3>
                    {goal.deadline && (
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                            <Calendar className="h-3 w-3" />
                            <span>Target: {new Date(goal.deadline).toLocaleDateString()}</span>
                        </div>
                    )}
                </div>
                <div
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary"
                    style={{ color: goal.color, backgroundColor: `${goal.color}15` }}
                >
                    <Target className="h-5 w-5" />
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-end gap-2">
                <div className="flex items-baseline justify-between text-sm">
                    <span className="font-bold text-2xl text-foreground">
                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(goal.currentAmount)}
                    </span>
                    <span className="text-muted-foreground">
                        of {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(goal.targetAmount)}
                    </span>
                </div>

                {/* Progress Bar */}
                <div className="h-2.5 w-full rounded-full bg-secondary overflow-hidden">
                    <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%`, backgroundColor: goal.color }}
                    />
                </div>

                <div className="flex justify-between items-center mt-1">
                    <span className="text-xs font-medium" style={{ color: goal.color }}>
                        {percentage.toFixed(0)}%
                    </span>
                    <span className="text-xs text-muted-foreground">
                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(goal.targetAmount - goal.currentAmount)} to go
                    </span>
                </div>
            </div>
        </div>
    )
}
