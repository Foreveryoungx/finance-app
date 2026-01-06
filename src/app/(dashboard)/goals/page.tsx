import { GoalCard } from "@/components/goals/GoalCard"
import { MOCK_GOALS } from "@/lib/data"
import { Plus } from "lucide-react"

export default function GoalsPage() {
    const totalTarget = MOCK_GOALS.reduce((acc, curr) => acc + curr.targetAmount, 0)
    const totalSaved = MOCK_GOALS.reduce((acc, curr) => acc + curr.currentAmount, 0)

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Financial Goals</h1>
                    <p className="text-muted-foreground">Track your progress towards your dreams.</p>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm">
                        <Plus className="h-4 w-4" />
                        New Goal
                    </button>
                </div>
            </div>

            {/* Summary */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-1">
                    <h2 className="text-xl font-bold text-foreground">Total Savings Progress</h2>
                    <p className="text-muted-foreground">You're making great progress on your goals!</p>
                </div>
                <div className="flex items-center gap-8 text-right">
                    <div>
                        <div className="text-sm text-muted-foreground">Total Saved</div>
                        <div className="text-3xl font-bold text-foreground">
                            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(totalSaved)}
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-12 bg-border"></div>
                    <div>
                        <div className="text-sm text-muted-foreground">Total Target</div>
                        <div className="text-3xl font-bold text-muted-foreground">
                            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(totalTarget)}
                        </div>
                    </div>
                </div>
            </div>

            {/* Goals Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {MOCK_GOALS.map((goal) => (
                    <GoalCard key={goal.id} goal={goal} />
                ))}

                {/* Add New Goal Card Placeholder */}
                <button className="rounded-xl border-2 border-dashed border-border p-6 flex flex-col items-center justify-center gap-4 text-muted-foreground hover:border-primary hover:text-primary transition-all h-full min-h-[200px]">
                    <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                        <Plus className="h-6 w-6" />
                    </div>
                    <span className="font-medium">Create a new goal</span>
                </button>
            </div>
        </div>
    )
}
