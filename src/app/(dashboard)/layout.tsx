import { Sidebar } from "@/components/layout/Sidebar"
import { Menu } from "lucide-react"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen bg-background text-foreground">
            {/* Sidebar - Desktop */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Mobile Header */}
                <header className="md:hidden flex h-16 items-center px-4 border-b border-border bg-card">
                    <button className="p-2 text-muted-foreground">
                        <Menu className="h-6 w-6" />
                    </button>
                    <div className="ml-4 font-bold text-lg text-primary">Finance App</div>
                </header>

                <main className="flex-1 overflow-auto p-4 md:p-8">
                    <div className="mx-auto max-w-7xl">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
