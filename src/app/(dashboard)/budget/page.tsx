import { BudgetOverview } from "@/components/budget/BudgetOverview"
import { CategoryBudgetRow } from "@/components/budget/CategoryBudgetRow"
import { MOCK_BUDGET } from "@/lib/data"

export default function BudgetPage() {
    const totalBudgeted = MOCK_BUDGET.reduce((acc, curr) => acc + curr.assigned, 0)
    const totalSpent = MOCK_BUDGET.reduce((acc, curr) => acc + curr.spent, 0)
    // Assuming a static income for mock purposes, typically this would come from a data source
    const totalIncome = 5800

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Budget</h1>
                    <p className="text-muted-foreground">Plan and track your monthly spending.</p>
                </div>
                <div className="flex gap-2">
                    <button className="rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors">
                        Edit Budget
                    </button>
                </div>
            </div>

            <BudgetOverview
                totalIncome={totalIncome}
                totalExpenses={totalSpent}
                totalBudgeted={totalBudgeted}
            />

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-semibold text-card-foreground mb-4">Categories</h3>
                <div className="divide-y divide-border">
                    {MOCK_BUDGET.map((category) => (
                        <CategoryBudgetRow key={category.id} category={category} />
                    ))}
                </div>
            </div>
        </div>
    )
}
