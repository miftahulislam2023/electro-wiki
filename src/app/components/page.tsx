import { Cpu, Zap, Gauge, Shield, Lightbulb, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ComponentsPage() {
    const componentCategories = [
        {
            title: "Passive Components",
            icon: <Gauge className="h-6 w-6" />,
            description: "Components that don't actively control current flow",
            components: [
                {
                    name: "Resistors",
                    description: "Control current flow and voltage division",
                    details: [
                        "Fixed resistors - Carbon, metal film, wirewound",
                        "Variable resistors - Potentiometers, rheostats",
                        "Color code identification system",
                        "Power ratings: 1/8W, 1/4W, 1/2W, 1W, 2W, 5W+"
                    ]
                },
                {
                    name: "Capacitors",
                    description: "Store and release electrical energy",
                    details: [
                        "Electrolytic capacitors - High capacity, polarized",
                        "Ceramic capacitors - Small values, non-polarized",
                        "Film capacitors - Stable, precise values",
                        "Tantalum capacitors - Compact, stable"
                    ]
                },
                {
                    name: "Inductors",
                    description: "Store energy in magnetic fields",
                    details: [
                        "Air core inductors - High frequency applications",
                        "Iron core inductors - Power applications",
                        "Ferrite core inductors - RF applications",
                        "Toroidal inductors - Low EMI"
                    ]
                }
            ]
        },
        {
            title: "Active Components",
            icon: <Cpu className="h-6 w-6" />,
            description: "Components that actively control electrical signals",
            components: [
                {
                    name: "Transistors",
                    description: "Amplify or switch electrical signals",
                    details: [
                        "BJT (Bipolar Junction Transistors) - NPN and PNP types",
                        "FET (Field Effect Transistors) - JFET and MOSFET",
                        "Power transistors - High current/voltage applications",
                        "Small signal transistors - Low power amplification"
                    ]
                },
                {
                    name: "Diodes",
                    description: "Allow current flow in one direction",
                    details: [
                        "Silicon diodes - General purpose rectification",
                        "Zener diodes - Voltage regulation",
                        "LED (Light Emitting Diodes) - Light emission",
                        "Schottky diodes - Fast switching, low voltage drop"
                    ]
                },
                {
                    name: "Integrated Circuits",
                    description: "Complex circuits on a single chip",
                    details: [
                        "Operational Amplifiers - Signal amplification",
                        "Microcontrollers - Programmable control",
                        "Logic gates - Digital signal processing",
                        "Voltage regulators - Power supply stabilization"
                    ]
                }
            ]
        },
        {
            title: "Protection Components",
            icon: <Shield className="h-6 w-6" />,
            description: "Components that protect circuits from damage",
            components: [
                {
                    name: "Fuses",
                    description: "Overcurrent protection devices",
                    details: [
                        "Glass tube fuses - Visual indication of failure",
                        "Ceramic fuses - High breaking capacity",
                        "Blade fuses - Automotive applications",
                        "Surface mount fuses - PCB applications"
                    ]
                },
                {
                    name: "Varistors",
                    description: "Voltage surge protection",
                    details: [
                        "Metal Oxide Varistors (MOV) - AC line protection",
                        "Silicon Carbide - High energy absorption",
                        "Zinc Oxide - Fast response time",
                        "Polymer varistors - Resettable protection"
                    ]
                }
            ]
        }
    ];

    return (
        <div className="container mx-auto px-20 py-8">
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
                    Explore the building blocks of electronic circuits. From basic passive components
                    to complex integrated circuits, understand their functions and applications.
                </p>
            </div>

            {/* Component Categories */}
            <div className="space-y-12">
                {componentCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="bg-card rounded-lg border p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="rounded-full bg-primary/10 p-2">
                                {category.icon}
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold">{category.title}</h2>
                                <p className="text-muted-foreground">{category.description}</p>
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {category.components.map((component, componentIndex) => (
                                <div key={componentIndex} className="bg-muted/20 rounded-lg p-4 border">
                                    <h3 className="text-lg font-semibold mb-2">{component.name}</h3>
                                    <p className="text-muted-foreground mb-3">{component.description}</p>
                                    <ul className="space-y-1 text-sm">
                                        {component.details.map((detail, detailIndex) => (
                                            <li key={detailIndex} className="flex items-start gap-2">
                                                <div className="rounded-full bg-primary/20 w-1.5 h-1.5 mt-2 flex-shrink-0" />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Reference */}
            <div className="mt-16 bg-muted/30 rounded-lg p-8">
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
