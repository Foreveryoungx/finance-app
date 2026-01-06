"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Receipt, PiggyBank, Target, Settings, LogOut, Wallet } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Transactions", href: "/transactions", icon: Receipt },
    { name: "Budget", href: "/budget", icon: PiggyBank },
    { name: "Goals", href: "/goals", icon: Target },
    { name: "Investments", href: "/investments", icon: Wallet },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="flex h-screen w-64 flex-col border-r border-border bg-card text-card-foreground hidden md:flex">
            <div className="flex h-16 items-center px-6 border-b border-border">
                <div className="flex items-center gap-2 font-bold text-xl text-primary">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                        M
                    </div>
                    Monarch Clone
                </div>
            </div>

            <div className="flex-1 flex flex-col gap-1 p-4">
                {navigation.map((item) => {
                    const isActive = pathname === item.href

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground",
                                isActive ? "bg-accent text-accent-foreground shadow-sm" : "text-muted-foreground"
                            )}
                        >
                            <item.icon className={cn("h-4 w-4", isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary")} />
                            {item.name}
                        </Link>
                    )
                })}
            </div>

            <div className="border-t border-border p-4">
                <Link
                    href="/settings"
                    className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
                >
                    <Settings className="h-4 w-4 group-hover:text-primary" />
                    Settings
                </Link>
                <button
                    className="group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:bg-destructive/10 hover:text-destructive"
                >
                    <LogOut className="h-4 w-4" />
                    Log out
                </button>
            </div>
        </div>
    )
}
