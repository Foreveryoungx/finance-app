"use client"

import { PortfolioSummary } from "@/components/investments/PortfolioSummary"
import { AssetAllocationChart } from "@/components/investments/AssetAllocationChart"
import { HoldingsTable } from "@/components/investments/HoldingsTable"
import { MOCK_ASSETS, MOCK_HOLDINGS } from "@/lib/data"

export default function InvestmentsPage() {
    const totalValue = MOCK_ASSETS.reduce((acc, curr) => acc + curr.value, 0);
    const dayChange = 1240.50; // Mock change
    const dayChangePercent = 0.85;

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Investments</h1>
                    <p className="text-muted-foreground">Monitor your portfolio performance and allocation.</p>
                </div>
                <div className="flex gap-2">
                    <button className="rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors">
                        Sync Accounts
                    </button>
                </div>
            </div>

            <PortfolioSummary
                totalValue={totalValue}
                dayChange={dayChange}
                dayChangePercent={dayChangePercent}
            />

            <div className="grid gap-6 lg:grid-cols-3">
                {/* Chart Section - 1 Column */}
                <div className="lg:col-span-1">
                    <AssetAllocationChart assets={MOCK_ASSETS} />
                </div>

                {/* Holdings Section - 2 Columns */}
                <div className="lg:col-span-2">
                    <HoldingsTable holdings={MOCK_HOLDINGS} />
                </div>
            </div>
        </div>
    )
}
