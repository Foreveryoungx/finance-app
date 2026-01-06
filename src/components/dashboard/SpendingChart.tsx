"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from "recharts"

const data = [
    { name: "Rent", amount: 2400, budget: 2400, color: "#334155" },
    { name: "Groceries", amount: 850, budget: 600, color: "#ef4444" }, // Over budget
    { name: "Dining", amount: 420, budget: 300, color: "#ef4444" },
    { name: "Utils", amount: 180, budget: 200, color: "#10b981" },
    { name: "Transport", amount: 150, budget: 250, color: "#10b981" },
    { name: "Entertainment", amount: 320, budget: 200, color: "#ef4444" },
    { name: "Shopping", amount: 200, budget: 150, color: "#ef4444" }
]

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-popover border border-border p-3 rounded-lg shadow-lg">
                <p className="font-medium text-popover-foreground">{label}</p>
                <p className="text-sm text-primary">
                    Spent: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(payload[0].value)}
                </p>
            </div>
        );
    }
    return null;
};

export function SpendingChart() {
    return (
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm h-full flex flex-col">
            <div className="mb-4 flex items-center justify-between">
                <div>
                    <h3 className="font-semibold text-card-foreground">Budget Overview</h3>
                    <p className="text-sm text-muted-foreground">October 2024</p>
                </div>
                <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">$4,520</div>
                    <div className="text-sm text-muted-foreground">of $4,100 budget</div>
                </div>
            </div>

            <div className="flex-1 min-h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <XAxis
                            dataKey="name"
                            stroke="#64748b"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: '#334155', opacity: 0.1 }} />
                        <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.amount > entry.budget ? "#ef4444" : "#10b981"} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
