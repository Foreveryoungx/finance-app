import { TransactionTable } from "@/components/transactions/TransactionTable"

export default function TransactionsPage() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Transactions</h1>
                    <p className="text-muted-foreground">Manage and categorize your financial activity.</p>
                </div>
            </div>

            <TransactionTable />
        </div>
    )
}
