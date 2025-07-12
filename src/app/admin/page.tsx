import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle, Zap, Cpu, Brain, BarChart3, Users, Settings } from "lucide-react"

export default function AdminPage() {
    const stats = [
        { name: "Total Components", value: "127", icon: Cpu },
        { name: "Total Circuits", value: "45", icon: Zap },
        { name: "Total Concepts", value: "89", icon: Brain },
        { name: "Active Users", value: "1,234", icon: Users },
    ]

    const recentItems = [
        { id: 1, title: "Op-Amp LM741", type: "Component", createdAt: "2025-01-10" },
        { id: 2, title: "Basic Amplifier Circuit", type: "Circuit", createdAt: "2025-01-09" },
        { id: 3, title: "Ohm's Law", type: "Concept", createdAt: "2025-01-08" },
        { id: 4, title: "555 Timer IC", type: "Component", createdAt: "2025-01-07" },
        { id: 5, title: "RC Low Pass Filter", type: "Circuit", createdAt: "2025-01-06" },
    ]

    return (
        <div className="container mx-auto p-6 space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                    <p className="text-muted-foreground">
                        Manage your electronics knowledge base
                    </p>
                </div>
                <div className="flex gap-2">
                    <Link href="/admin/create">
                        <Button>
                            <PlusCircle className="w-4 h-4 mr-2" />
                            Create New Item
                        </Button>
                    </Link>
                    <Button variant="outline">
                        <Settings className="w-4 h-4 mr-2" />
                        Settings
                    </Button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.name}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.name}</CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground">
                                +20.1% from last month
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Quick Actions */}
                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>
                            Common administrative tasks
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <Link href="/admin/create">
                            <Button variant="outline" className="w-full justify-start">
                                <Cpu className="w-4 h-4 mr-2" />
                                Add New Component
                            </Button>
                        </Link>
                        <Link href="/admin/create">
                            <Button variant="outline" className="w-full justify-start">
                                <Zap className="w-4 h-4 mr-2" />
                                Add New Circuit
                            </Button>
                        </Link>
                        <Link href="/admin/create">
                            <Button variant="outline" className="w-full justify-start">
                                <Brain className="w-4 h-4 mr-2" />
                                Add New Concept
                            </Button>
                        </Link>
                        <Button variant="outline" className="w-full justify-start">
                            <BarChart3 className="w-4 h-4 mr-2" />
                            View Analytics
                        </Button>
                    </CardContent>
                </Card>

                {/* Recent Items */}
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Items</CardTitle>
                        <CardDescription>
                            Latest additions to your knowledge base
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recentItems.map((item) => (
                                <div key={item.id} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                            {item.type === "Component" && <Cpu className="w-4 h-4" />}
                                            {item.type === "Circuit" && <Zap className="w-4 h-4" />}
                                            {item.type === "Concept" && <Brain className="w-4 h-4" />}
                                        </div>
                                        <div>
                                            <p className="font-medium">{item.title}</p>
                                            <p className="text-sm text-muted-foreground">{item.type}</p>
                                        </div>
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {item.createdAt}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Content Management */}
            <Card>
                <CardHeader>
                    <CardTitle>Content Management</CardTitle>
                    <CardDescription>
                        Manage your electronics knowledge base content
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="text-center p-6 border rounded-lg">
                            <Cpu className="w-12 h-12 mx-auto mb-4 text-primary" />
                            <h3 className="font-semibold mb-2">Components</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Electronic components library
                            </p>
                            <Button variant="outline" size="sm">
                                Manage Components
                            </Button>
                        </div>
                        <div className="text-center p-6 border rounded-lg">
                            <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                            <h3 className="font-semibold mb-2">Circuits</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Circuit designs and schematics
                            </p>
                            <Button variant="outline" size="sm">
                                Manage Circuits
                            </Button>
                        </div>
                        <div className="text-center p-6 border rounded-lg">
                            <Brain className="w-12 h-12 mx-auto mb-4 text-primary" />
                            <h3 className="font-semibold mb-2">Concepts</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Theoretical concepts and principles
                            </p>
                            <Button variant="outline" size="sm">
                                Manage Concepts
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
