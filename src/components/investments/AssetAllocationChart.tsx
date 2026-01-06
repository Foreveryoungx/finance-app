"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { Asset } from "@/lib/data"

interface AssetAllocationChartProps {
    assets: Asset[]
}

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="bg-popover border border-border p-3 rounded-lg shadow-lg">
                <p className="font-medium text-popover-foreground">{data.name}</p>
                <p className="text-sm text-primary">
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data.value)}
                </p>
            </div>
        );
    }
    return null;
};

export function AssetAllocationChart({ assets }: AssetAllocationChartProps) {
    return (
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm h-[400px] flex flex-col">
            <h3 className="font-semibold text-card-foreground mb-4">Asset Allocation</h3>
            <div className="flex-1 w-full min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={assets}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {assets.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend
                            verticalAlign="middle"
                            layout="vertical"
                            align="right"
                            wrapperStyle={{ fontSize: '12px', color: '#94a3b8' }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
