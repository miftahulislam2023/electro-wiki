import { Cpu, Zap, Gauge, Shield, Lightbulb, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ComponentsPage() {
    const components = [
        {
            id: "resistors",
            name: "Resistors",
            description: "Control current flow and voltage division in circuits",
            category: "Passive Components",
            icon: <Gauge className="h-6 w-6" />,
            specs: "1/8W to 5W+, Carbon/Metal Film",
            applications: ["Voltage dividers", "Current limiting", "Pull-up/down circuits"]
        },
        {
            id: "capacitors",
            name: "Capacitors",
            description: "Store and release electrical energy",
            category: "Passive Components",
            icon: <Gauge className="h-6 w-6" />,
            specs: "pF to mF, Ceramic/Electrolytic/Film",
            applications: ["Power supply filtering", "Timing circuits", "Coupling/decoupling"]
        },
        {
            id: "inductors",
            name: "Inductors",
            description: "Store energy in magnetic fields",
            category: "Passive Components",
            icon: <Gauge className="h-6 w-6" />,
            specs: "µH to H, Air/Iron/Ferrite core",
            applications: ["Filters", "Transformers", "Energy storage"]
        },
        {
            id: "transistors",
            name: "Transistors",
            description: "Amplify or switch electrical signals",
            category: "Active Components",
            icon: <Cpu className="h-6 w-6" />,
            specs: "BJT/FET, NPN/PNP, Small signal/Power",
            applications: ["Amplifiers", "Switches", "Oscillators"]
        },
        {
            id: "diodes",
            name: "Diodes",
            description: "Allow current flow in one direction",
            category: "Active Components",
            icon: <Cpu className="h-6 w-6" />,
            specs: "Silicon/Schottky/Zener/LED",
            applications: ["Rectification", "Voltage regulation", "Protection"]
        },
        {
            id: "integrated-circuits",
            name: "Integrated Circuits",
            description: "Complex circuits on a single chip",
            category: "Active Components",
            icon: <Cpu className="h-6 w-6" />,
            specs: "Op-amps, MCUs, Logic gates, Regulators",
            applications: ["Signal processing", "Control systems", "Digital logic"]
        },
        {
            id: "fuses",
            name: "Fuses",
            description: "Overcurrent protection devices",
            category: "Protection Components",
            icon: <Shield className="h-6 w-6" />,
            specs: "Glass/Ceramic/Blade, Various current ratings",
            applications: ["Circuit protection", "Safety systems", "Automotive"]
        },
        {
            id: "varistors",
            name: "Varistors",
            description: "Voltage surge protection",
            category: "Protection Components",
            icon: <Shield className="h-6 w-6" />,
            specs: "MOV/SiC/ZnO, Various voltage ratings",
            applications: ["Surge protection", "AC line protection", "Transient suppression"]
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-12">
                <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-primary/10 p-4">
                        <Cpu className="h-8 w-8 text-primary" />
                    </div>
                </div>
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                    Electronic Components
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Explore the building blocks of electronic circuits. Click on any component
                    to learn more about its properties, applications, and specifications.
                </p>
            </div>

            {/* Components Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
                {components.map((component) => (
                    <Link
                        key={component.id}
                        href={`/components/${component.id}`}
                        className="group block"
                    >
                        <Card className="h-full hover:shadow-lg transition-shadow duration-200 cursor-pointer border-2 group-hover:border-primary/50">
                            <CardHeader className="pb-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="rounded-full bg-primary/10 p-2 group-hover:bg-primary/20 transition-colors">
                                        {component.icon}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        {component.category}
                                    </div>
                                </div>
                                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                    {component.name}
                                </CardTitle>
                                <CardDescription className="text-sm">
                                    {component.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <div className="space-y-3">
                                    <div>
                                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Specifications</h4>
                                        <p className="text-sm">{component.specs}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Applications</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {component.applications.slice(0, 2).map((app, index) => (
                                                <span
                                                    key={index}
                                                    className="text-xs bg-muted px-2 py-1 rounded"
                                                >
                                                    {app}
                                                </span>
                                            ))}
                                            {component.applications.length > 2 && (
                                                <span className="text-xs text-muted-foreground">
                                                    +{component.applications.length - 2} more
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>

            {/* Quick Reference */}
            <div className="bg-muted/30 rounded-lg p-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Component Selection Guide</h2>
                    <p className="text-muted-foreground">
                        Key considerations when choosing electronic components
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-card rounded-lg p-4 border">
                        <div className="flex items-center gap-2 mb-3">
                            <Zap className="h-5 w-5 text-primary" />
                            <h3 className="font-semibold">Electrical Parameters</h3>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Voltage rating</li>
                            <li>• Current capacity</li>
                            <li>• Power dissipation</li>
                            <li>• Frequency response</li>
                            <li>• Tolerance values</li>
                        </ul>
                    </div>

                    <div className="bg-card rounded-lg p-4 border">
                        <div className="flex items-center gap-2 mb-3">
                            <Activity className="h-5 w-5 text-primary" />
                            <h3 className="font-semibold">Environmental Factors</h3>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Operating temperature range</li>
                            <li>• Humidity resistance</li>
                            <li>• Vibration tolerance</li>
                            <li>• Chemical resistance</li>
                            <li>• Radiation hardness</li>
                        </ul>
                    </div>

                    <div className="bg-card rounded-lg p-4 border">
                        <div className="flex items-center gap-2 mb-3">
                            <Lightbulb className="h-5 w-5 text-primary" />
                            <h3 className="font-semibold">Design Considerations</h3>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Package size and type</li>
                            <li>• Mounting method</li>
                            <li>• Cost effectiveness</li>
                            <li>• Availability and sourcing</li>
                            <li>• Reliability requirements</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-12">
                <Button asChild variant="outline">
                    <Link href="/circuits">
                        Explore Circuits →
                    </Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href="/concepts">
                        Learn Concepts →
                    </Link>
                </Button>
            </div>
        </div>
    );
}
