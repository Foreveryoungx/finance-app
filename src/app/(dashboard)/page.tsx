import { NetWorthCard } from "@/components/dashboard/NetWorthCard"
import { RecentTransactions } from "@/components/dashboard/RecentTransactions"
import { SpendingChart } from "@/components/dashboard/SpendingChart"

export default function DashboardPage() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
                    <p className="text-muted-foreground">Welcome back, User</p>
                </div>
                <div className="flex gap-2">
                    <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm">
                        Add Transaction
                    </button>
                </div>
            </div>

            {/* Top Stats Row */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <NetWorthCard total={124592} change={2.5} changeType="positive" />
                <NetWorthCard total={14250} change={-1.2} changeType="negative" />
                {/* Placeholder cards for other stats */}
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                    <h3 className="text-sm font-medium text-muted-foreground">Monthly Inflow</h3>
                    <div className="mt-4 text-2xl font-bold text-success">+$8,450.00</div>
                </div>
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                    <h3 className="text-sm font-medium text-muted-foreground">Monthly Outflow</h3>
                    <div className="mt-4 text-2xl font-bold text-destructive">-$4,520.00</div>
                </div>
            </div>

            {/* Main Grid */}
            <div className="grid gap-6 lg:grid-cols-3 lg:grid-rows-1 h-auto lg:h-[500px]">
                {/* Chart Section - Takes up 2 columns */}
                <div className="lg:col-span-2 h-full">
                    <SpendingChart />
                </div>

                {/* Transactions Section - Takes up 1 column */}
                <div className="lg:col-span-1 h-full">
                    <RecentTransactions />
                </div>
            </div>
        </div>
    )
}
