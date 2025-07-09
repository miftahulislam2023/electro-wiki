import { notFound } from "next/navigation";
import { ArrowLeft, Cpu, Gauge, Shield, Zap, Info, BookOpen, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import type { ReactElement } from "react";

// Type definitions for component data
interface ComponentType {
    name: string;
    description: string;
    characteristics: string[];
}

interface ColorCode {
    colors: string[];
    values: number[];
    multipliers: string[];
}

interface ComponentData {
    id: string;
    name: string;
    description: string;
    category: string;
    icon: ReactElement;
    overview: string;
    specifications: Record<string, string>;
    types: ComponentType[];
    applications: string[];
    designConsiderations: string[];
    colorCode?: ColorCode;
}

// Component data - in a real app this would come from a database
const componentData: Record<string, ComponentData> = {
    "resistors": {
        id: "resistors",
        name: "Resistors",
        description: "Control current flow and voltage division in circuits",
        category: "Passive Components",
        icon: <Gauge className="h-8 w-8" />,
        overview: "Resistors are passive electronic components that oppose the flow of electric current. They are one of the most fundamental and widely used components in electronic circuits, serving various purposes from current limiting to voltage division.",
        specifications: {
            "Resistance Range": "1Ω to 10MΩ+",
            "Power Ratings": "1/8W, 1/4W, 1/2W, 1W, 2W, 5W, 10W+",
            "Tolerance": "±1%, ±5%, ±10%, ±20%",
            "Temperature Coefficient": "±50ppm/°C to ±200ppm/°C",
            "Voltage Rating": "50V to 1000V+",
            "Operating Temperature": "-55°C to +155°C"
        },
        types: [
            {
                name: "Carbon Film Resistors",
                description: "General purpose, low cost",
                characteristics: ["Good stability", "Low noise", "Wide range of values"]
            },
            {
                name: "Metal Film Resistors",
                description: "High precision, low noise",
                characteristics: ["Better tolerance", "Lower temperature coefficient", "Higher stability"]
            },
            {
                name: "Wirewound Resistors",
                description: "High power applications",
                characteristics: ["High power rating", "Excellent heat dissipation", "Low resistance values"]
            },
            {
                name: "Variable Resistors",
                description: "Adjustable resistance values",
                characteristics: ["Potentiometers", "Rheostats", "Trimmers"]
            }
        ],
        applications: [
            "Voltage dividers",
            "Current limiting circuits",
            "Pull-up/pull-down resistors",
            "Bias networks",
            "Timing circuits (with capacitors)",
            "Filter circuits",
            "Temperature sensors (RTDs)",
            "Load resistors"
        ],
        colorCode: {
            colors: ["Black", "Brown", "Red", "Orange", "Yellow", "Green", "Blue", "Violet", "Gray", "White"],
            values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            multipliers: ["×1", "×10", "×100", "×1K", "×10K", "×100K", "×1M", "×10M", "×100M", "×1G"]
        },
        designConsiderations: [
            "Power dissipation must not exceed rating",
            "Operating temperature affects resistance value",
            "Parasitic inductance and capacitance at high frequencies",
            "Voltage coefficient effects in high voltage applications",
            "Moisture and environmental protection requirements"
        ]
    },
    "capacitors": {
        id: "capacitors",
        name: "Capacitors",
        description: "Store and release electrical energy",
        category: "Passive Components",
        icon: <Gauge className="h-8 w-8" />,
        overview: "Capacitors are passive components that store electrical energy in an electric field. They consist of two conductive plates separated by an insulating material called a dielectric. Capacitors can store and release energy quickly, making them essential for filtering, timing, and energy storage applications.",
        specifications: {
            "Capacitance Range": "1pF to 1F+",
            "Voltage Ratings": "6.3V to 1000V+",
            "Tolerance": "±1%, ±5%, ±10%, ±20%",
            "Temperature Coefficient": "±30ppm/°C to ±750ppm/°C",
            "ESR (Equivalent Series Resistance)": "0.01Ω to 10Ω+",
            "Operating Temperature": "-55°C to +125°C"
        },
        types: [
            {
                name: "Ceramic Capacitors",
                description: "Small, stable, non-polarized",
                characteristics: ["Wide frequency range", "Low cost", "Good temperature stability"]
            },
            {
                name: "Electrolytic Capacitors",
                description: "High capacitance, polarized",
                characteristics: ["Large capacitance values", "Polarized operation", "Limited frequency range"]
            },
            {
                name: "Film Capacitors",
                description: "Stable, precise, reliable",
                characteristics: ["Excellent stability", "Low loss", "Self-healing properties"]
            },
            {
                name: "Tantalum Capacitors",
                description: "Compact, stable, polarized",
                characteristics: ["High capacitance density", "Good frequency response", "Stable over temperature"]
            }
        ],
        applications: [
            "Power supply filtering",
            "Decoupling/bypass circuits",
            "Timing circuits",
            "AC coupling",
            "Energy storage",
            "Tuned circuits",
            "Motor starting",
            "Power factor correction"
        ],
        designConsiderations: [
            "Voltage derating (typically 50-80% of rated voltage)",
            "Temperature effects on capacitance",
            "ESR considerations in switching circuits",
            "Dielectric absorption in precision applications",
            "Polarized vs non-polarized selection",
            "Frequency response characteristics"
        ]
    },
    "inductors": {
        id: "inductors",
        name: "Inductors",
        description: "Store energy in magnetic fields",
        category: "Passive Components",
        icon: <Gauge className="h-8 w-8" />,
        overview: "Inductors are passive components that store energy in a magnetic field when electric current flows through them. They oppose changes in current flow and are essential in filtering, energy storage, and frequency-selective applications.",
        specifications: {
            "Inductance Range": "1nH to 1H+",
            "Current Ratings": "10mA to 100A+",
            "DC Resistance": "0.01Ω to 100Ω+",
            "Q Factor": "10 to 200+",
            "Self-Resonant Frequency": "1MHz to 10GHz+",
            "Operating Temperature": "-40°C to +125°C"
        },
        types: [
            {
                name: "Air Core Inductors",
                description: "High frequency, no saturation",
                characteristics: ["No magnetic saturation", "High Q factor", "Stable over temperature"]
            },
            {
                name: "Iron Core Inductors",
                description: "High inductance, power applications",
                characteristics: ["High permeability", "Large inductance values", "Power applications"]
            },
            {
                name: "Ferrite Core Inductors",
                description: "RF applications, high frequency",
                characteristics: ["Good high frequency performance", "Low losses", "Compact size"]
            },
            {
                name: "Toroidal Inductors",
                description: "Low EMI, efficient",
                characteristics: ["Minimal electromagnetic radiation", "High efficiency", "Compact design"]
            }
        ],
        applications: [
            "Filter circuits (low-pass, high-pass)",
            "Energy storage (switching regulators)",
            "Transformers",
            "Chokes (RF filtering)",
            "Oscillator circuits",
            "Impedance matching",
            "Motor windings",
            "Antenna tuning"
        ],
        designConsiderations: [
            "Current rating vs inductance value",
            "Core saturation at high currents",
            "Frequency response and self-resonance",
            "DC resistance affecting efficiency",
            "Temperature coefficient of inductance",
            "Magnetic coupling and shielding requirements"
        ]
    },
    "transistors": {
        id: "transistors",
        name: "Transistors",
        description: "Amplify or switch electrical signals",
        category: "Active Components",
        icon: <Cpu className="h-8 w-8" />,
        overview: "Transistors are active semiconductor devices that can amplify signals or act as electronic switches. They are the fundamental building blocks of modern electronics, enabling everything from simple amplifiers to complex digital processors.",
        specifications: {
            "Voltage Ratings": "5V to 1000V+",
            "Current Ratings": "1mA to 100A+",
            "Power Dissipation": "0.1W to 100W+",
            "Gain (hFE/β)": "10 to 1000+",
            "Frequency Response": "DC to 10GHz+",
            "Operating Temperature": "-65°C to +175°C"
        },
        types: [
            {
                name: "BJT (Bipolar Junction Transistors)",
                description: "Current-controlled devices",
                characteristics: ["NPN and PNP types", "High gain", "Good linearity"]
            },
            {
                name: "MOSFET (Metal-Oxide-Semiconductor FET)",
                description: "Voltage-controlled devices",
                characteristics: ["High input impedance", "Fast switching", "Low power consumption"]
            },
            {
                name: "JFET (Junction Field-Effect Transistor)",
                description: "Voltage-controlled, simple structure",
                characteristics: ["High input impedance", "Low noise", "Depletion mode operation"]
            },
            {
                name: "Power Transistors",
                description: "High current/voltage handling",
                characteristics: ["High power dissipation", "Thermal management required", "Switching applications"]
            }
        ],
        applications: [
            "Signal amplification",
            "Electronic switches",
            "Voltage regulators",
            "Oscillators",
            "Digital logic gates",
            "Motor drivers",
            "Power conversion",
            "RF amplifiers"
        ],
        designConsiderations: [
            "Biasing for proper operating point",
            "Thermal management and heat sinking",
            "Frequency response limitations",
            "Input/output impedance matching",
            "Safe operating area (SOA)",
            "Protection against overcurrent/overvoltage"
        ]
    },
    "diodes": {
        id: "diodes",
        name: "Diodes",
        description: "Allow current flow in one direction",
        category: "Active Components",
        icon: <Cpu className="h-8 w-8" />,
        overview: "Diodes are semiconductor devices that allow current to flow in only one direction. They are essential for rectification, voltage regulation, protection, and signal processing applications.",
        specifications: {
            "Forward Voltage Drop": "0.3V to 3.5V",
            "Reverse Voltage Rating": "5V to 1000V+",
            "Forward Current": "1mA to 100A+",
            "Reverse Recovery Time": "1ns to 1µs",
            "Junction Capacitance": "1pF to 100pF",
            "Operating Temperature": "-65°C to +175°C"
        },
        types: [
            {
                name: "Silicon Diodes",
                description: "General purpose rectification",
                characteristics: ["0.7V forward drop", "High reverse voltage", "General purpose"]
            },
            {
                name: "Schottky Diodes",
                description: "Fast switching, low voltage drop",
                characteristics: ["0.3V forward drop", "Fast recovery", "High frequency"]
            },
            {
                name: "Zener Diodes",
                description: "Voltage regulation",
                characteristics: ["Precise breakdown voltage", "Voltage reference", "Avalanche breakdown"]
            },
            {
                name: "LED (Light Emitting Diodes)",
                description: "Light emission",
                characteristics: ["Various colors", "High efficiency", "Long lifespan"]
            }
        ],
        applications: [
            "AC to DC rectification",
            "Voltage regulation (Zener)",
            "Reverse polarity protection",
            "Clipping and clamping circuits",
            "Signal demodulation",
            "ESD protection",
            "Light emission (LEDs)",
            "Voltage references"
        ],
        designConsiderations: [
            "Forward voltage drop affects efficiency",
            "Reverse recovery time in switching circuits",
            "Thermal considerations at high currents",
            "Peak inverse voltage rating",
            "Surge current capability",
            "Temperature coefficient of breakdown voltage"
        ]
    },
    "integrated-circuits": {
        id: "integrated-circuits",
        name: "Integrated Circuits",
        description: "Complex circuits on a single chip",
        category: "Active Components",
        icon: <Cpu className="h-8 w-8" />,
        overview: "Integrated Circuits (ICs) are complex electronic circuits fabricated on a single semiconductor chip. They can contain thousands to billions of transistors, resistors, and capacitors, enabling sophisticated functionality in a compact package.",
        specifications: {
            "Supply Voltage": "1.8V to 24V+",
            "Operating Current": "µA to A",
            "Package Types": "DIP, SOIC, QFP, BGA, CSP",
            "Pin Count": "4 to 1000+ pins",
            "Operating Speed": "DC to GHz",
            "Operating Temperature": "-40°C to +125°C"
        },
        types: [
            {
                name: "Operational Amplifiers",
                description: "High-gain differential amplifiers",
                characteristics: ["High input impedance", "Low output impedance", "Versatile configurations"]
            },
            {
                name: "Microcontrollers",
                description: "Programmable control units",
                characteristics: ["CPU, memory, I/O on chip", "Programmable", "Various peripherals"]
            },
            {
                name: "Logic Gates",
                description: "Digital signal processing",
                characteristics: ["Boolean logic functions", "Fast switching", "Low power versions available"]
            },
            {
                name: "Voltage Regulators",
                description: "Power supply stabilization",
                characteristics: ["Stable output voltage", "Current limiting", "Thermal protection"]
            }
        ],
        applications: [
            "Signal conditioning",
            "Digital processing",
            "Power management",
            "Communication interfaces",
            "Sensor interfaces",
            "Motor control",
            "Audio/video processing",
            "Embedded systems"
        ],
        designConsiderations: [
            "Power supply requirements and decoupling",
            "Heat dissipation and thermal management",
            "Signal integrity and EMI considerations",
            "Package selection for manufacturing",
            "Programming and configuration requirements",
            "Interface voltage levels and compatibility"
        ]
    },
    "fuses": {
        id: "fuses",
        name: "Fuses",
        description: "Overcurrent protection devices",
        category: "Protection Components",
        icon: <Shield className="h-8 w-8" />,
        overview: "Fuses are safety devices designed to protect electrical circuits from overcurrent conditions. They contain a metal wire or strip that melts when excessive current flows through it, thereby interrupting the circuit and preventing damage to other components.",
        specifications: {
            "Current Ratings": "100mA to 1000A+",
            "Voltage Ratings": "32V to 1000V+",
            "Breaking Capacity": "10A to 100kA",
            "Time-Current Characteristics": "Fast, Medium, Slow blow",
            "Operating Temperature": "-55°C to +125°C",
            "Response Time": "µs to minutes"
        },
        types: [
            {
                name: "Glass Tube Fuses",
                description: "Visual indication of failure",
                characteristics: ["Transparent body", "Easy inspection", "General purpose"]
            },
            {
                name: "Ceramic Fuses",
                description: "High breaking capacity",
                characteristics: ["High fault current interruption", "Arc suppression", "High temperature rating"]
            },
            {
                name: "Blade Fuses",
                description: "Automotive applications",
                characteristics: ["Easy replacement", "Color coding", "Compact design"]
            },
            {
                name: "Surface Mount Fuses",
                description: "PCB applications",
                characteristics: ["Automatic assembly", "Space saving", "Precise current ratings"]
            }
        ],
        applications: [
            "Circuit protection",
            "Equipment protection",
            "Automotive systems",
            "Power supplies",
            "Motor protection",
            "Transformer protection",
            "Electronic equipment",
            "Safety systems"
        ],
        designConsiderations: [
            "Current rating vs normal operating current",
            "Voltage rating must exceed circuit voltage",
            "Time-current characteristics for application",
            "Breaking capacity for fault currents",
            "Environmental conditions and enclosure",
            "Replacement accessibility and indication"
        ]
    },
    "varistors": {
        id: "varistors",
        name: "Varistors",
        description: "Voltage surge protection",
        category: "Protection Components",
        icon: <Shield className="h-8 w-8" />,
        overview: "Varistors (Variable Resistors) are voltage-dependent resistors that provide protection against voltage surges and transients. Their resistance decreases dramatically when the voltage across them exceeds a specific threshold, effectively clamping dangerous voltages.",
        specifications: {
            "Varistor Voltage": "18V to 1800V+",
            "Maximum Current": "1A to 70kA",
            "Energy Rating": "0.1J to 1000J+",
            "Response Time": "<25ns",
            "Clamping Ratio": "1.5 to 3.0",
            "Operating Temperature": "-40°C to +125°C"
        },
        types: [
            {
                name: "Metal Oxide Varistors (MOV)",
                description: "AC line protection",
                characteristics: ["High energy absorption", "Fast response", "Bidirectional protection"]
            },
            {
                name: "Silicon Carbide Varistors",
                description: "High energy absorption",
                characteristics: ["Very high energy rating", "Linear voltage-current characteristic", "High temperature operation"]
            },
            {
                name: "Zinc Oxide Varistors",
                description: "Fast response time",
                characteristics: ["Excellent clamping", "Low leakage current", "Wide voltage range"]
            },
            {
                name: "Polymer Varistors",
                description: "Resettable protection",
                characteristics: ["Self-healing", "Low capacitance", "Compact size"]
            }
        ],
        applications: [
            "AC line surge protection",
            "Transient voltage suppression",
            "Equipment protection",
            "Automotive electronics",
            "Data line protection",
            "Power supply protection",
            "Lightning protection",
            "ESD protection"
        ],
        designConsiderations: [
            "Varistor voltage selection vs operating voltage",
            "Energy rating for expected surge levels",
            "Clamping voltage vs protected device ratings",
            "Degradation with repeated surges",
            "Capacitance effects in high-frequency circuits",
            "Thermal fusing for catastrophic failure protection"
        ]
    }
};

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ComponentDetailPage({ params }: PageProps) {
    const component = componentData[(await params).slug as keyof typeof componentData];

    if (!component) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <Button variant="outline" size="sm" asChild>
                    <Link href="/components">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Components
                    </Link>
                </Button>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Component Header */}
                    <div className="flex items-start gap-4">
                        <div className="rounded-full bg-primary/10 p-4">
                            {component.icon}
                        </div>
                        <div className="flex-1">
                            <div className="text-sm text-muted-foreground mb-1">
                                {component.category}
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight mb-4">
                                {component.name}
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                {component.description}
                            </p>
                        </div>
                    </div>

                    {/* Overview */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Info className="h-5 w-5" />
                                Overview
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                {component.overview}
                            </p>
                        </CardContent>
                    </Card>

                    {/* Types */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <BookOpen className="h-5 w-5" />
                                Types & Variants
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4 md:grid-cols-2">
                                {component.types.map((type, index) => (
                                    <div key={index} className="border rounded-lg p-4">
                                        <h4 className="font-semibold mb-2">{type.name}</h4>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            {type.description}
                                        </p>
                                        <ul className="space-y-1">
                                            {type.characteristics.map((char, charIndex) => (
                                                <li key={charIndex} className="text-sm flex items-start gap-2">
                                                    <div className="rounded-full bg-primary/20 w-1.5 h-1.5 mt-2 flex-shrink-0" />
                                                    <span>{char}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Applications */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Zap className="h-5 w-5" />
                                Applications
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-2 md:grid-cols-2">
                                {component.applications.map((app, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className="rounded-full bg-primary/20 w-2 h-2 flex-shrink-0" />
                                        <span className="text-sm">{app}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Design Considerations */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Settings className="h-5 w-5" />
                                Design Considerations
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {component.designConsiderations.map((consideration, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <div className="rounded-full bg-orange-500/20 w-1.5 h-1.5 mt-2 flex-shrink-0" />
                                        <span className="text-sm">{consideration}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Specifications */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Specifications</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {Object.entries(component.specifications).map(([key, value]) => (
                                    <div key={key} className="border-b border-border/50 pb-2 last:border-b-0">
                                        <div className="text-sm font-medium">{key}</div>
                                        <div className="text-sm text-muted-foreground">{value}</div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Color Code for Resistors */}
                    {component.id === "resistors" && component.colorCode && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Color Code</CardTitle>
                                <CardDescription>
                                    Standard resistor color coding system
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                        {component.colorCode.colors.map((color: string, index: number) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <div
                                                    className="w-4 h-4 rounded border"
                                                    style={{
                                                        backgroundColor: color.toLowerCase() === 'black' ? '#000' :
                                                            color.toLowerCase() === 'brown' ? '#8B4513' :
                                                                color.toLowerCase() === 'red' ? '#FF0000' :
                                                                    color.toLowerCase() === 'orange' ? '#FFA500' :
                                                                        color.toLowerCase() === 'yellow' ? '#FFFF00' :
                                                                            color.toLowerCase() === 'green' ? '#008000' :
                                                                                color.toLowerCase() === 'blue' ? '#0000FF' :
                                                                                    color.toLowerCase() === 'violet' ? '#8B00FF' :
                                                                                        color.toLowerCase() === 'gray' ? '#808080' :
                                                                                            color.toLowerCase() === 'white' ? '#FFFFFF' : '#000'
                                                    }}
                                                />
                                                <span>{color} = {index}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Quick Actions */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Related Topics</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                                <Link href="/circuits">
                                    View Related Circuits
                                </Link>
                            </Button>
                            <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                                <Link href="/concepts">
                                    Learn Basic Concepts
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
