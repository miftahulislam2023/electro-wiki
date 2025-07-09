import { Zap, Battery, Gauge, Radio, Cpu, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function CircuitsPage() {
    const circuits = [
        {
            id: "series-circuit",
            name: "Series Circuit",
            description: "Components connected end-to-end in a single path",
            category: "Basic Circuits",
            icon: <Battery className="h-6 w-6" />,
            difficulty: "Beginner",
            characteristics: ["Same current through all components", "Voltage divides across components"],
            applications: ["String lights", "Battery packs", "Voltage dividers"]
        },
        {
            id: "parallel-circuit",
            name: "Parallel Circuit",
            description: "Components connected across common points",
            category: "Basic Circuits",
            icon: <Battery className="h-6 w-6" />,
            difficulty: "Beginner",
            characteristics: ["Same voltage across all components", "Current divides through branches"],
            applications: ["Household wiring", "Car headlights", "Computer circuits"]
        },
        {
            id: "series-parallel-circuit",
            name: "Series-Parallel Circuit",
            description: "Combination of series and parallel connections",
            category: "Basic Circuits",
            icon: <Battery className="h-6 w-6" />,
            difficulty: "Intermediate",
            characteristics: ["Complex analysis required", "Most practical circuits"],
            applications: ["Power distribution", "Audio systems", "Control circuits"]
        },
        {
            id: "amplifier-circuits",
            name: "Amplifier Circuits",
            description: "Increase the amplitude of input signals",
            category: "Analog Circuits",
            icon: <Gauge className="h-6 w-6" />,
            difficulty: "Intermediate",
            characteristics: ["Common Emitter/Base/Collector", "Op-amp configurations"],
            applications: ["Audio systems", "Sensor interfaces", "RF communication"]
        },
        {
            id: "filter-circuits",
            name: "Filter Circuits",
            description: "Select or reject specific frequency ranges",
            category: "Analog Circuits",
            icon: <Gauge className="h-6 w-6" />,
            difficulty: "Intermediate",
            characteristics: ["Low/High/Band-pass filters", "Active and passive types"],
            applications: ["Audio crossovers", "Power supplies", "Signal processing"]
        },
        {
            id: "oscillator-circuits",
            name: "Oscillator Circuits",
            description: "Generate periodic waveforms",
            category: "Analog Circuits",
            icon: <Gauge className="h-6 w-6" />,
            difficulty: "Advanced",
            characteristics: ["RC/LC/Crystal oscillators", "Various waveforms"],
            applications: ["Clock generation", "Signal sources", "Timing circuits"]
        },
        {
            id: "logic-gates",
            name: "Logic Gates",
            description: "Basic building blocks of digital systems",
            category: "Digital Circuits",
            icon: <Cpu className="h-6 w-6" />,
            difficulty: "Beginner",
            characteristics: ["AND/OR/NOT/NAND/NOR/XOR", "Boolean logic"],
            applications: ["Digital processors", "Logic circuits", "Computer systems"]
        },
        {
            id: "flip-flops",
            name: "Flip-Flops",
            description: "Memory elements in digital circuits",
            category: "Digital Circuits",
            icon: <Cpu className="h-6 w-6" />,
            difficulty: "Intermediate",
            characteristics: ["SR/D/JK/T flip-flops", "Clock-triggered"],
            applications: ["Memory storage", "Counters", "State machines"]
        },
        {
            id: "counters",
            name: "Counters",
            description: "Count digital pulses or events",
            category: "Digital Circuits",
            icon: <Cpu className="h-6 w-6" />,
            difficulty: "Intermediate",
            characteristics: ["Binary/Decade counters", "Up/Down counting"],
            applications: ["Frequency division", "Event counting", "Digital clocks"]
        },
        {
            id: "power-supplies",
            name: "Power Supply Circuits",
            description: "Convert and regulate electrical power",
            category: "Power Circuits",
            icon: <Zap className="h-6 w-6" />,
            difficulty: "Advanced",
            characteristics: ["Linear/Switching regulators", "AC/DC conversion"],
            applications: ["Electronic devices", "Battery chargers", "DC motors"]
        },
        {
            id: "motor-drives",
            name: "Motor Drive Circuits",
            description: "Control electric motors",
            category: "Power Circuits",
            icon: <Zap className="h-6 w-6" />,
            difficulty: "Advanced",
            characteristics: ["PWM control", "H-bridge circuits"],
            applications: ["Robotics", "Industrial automation", "Electric vehicles"]
        },
        {
            id: "rf-circuits",
            name: "RF Circuits",
            description: "Radio frequency signal processing",
            category: "RF Circuits",
            icon: <Radio className="h-6 w-6" />,
            difficulty: "Advanced",
            characteristics: ["High frequency effects", "Impedance matching"],
            applications: ["Wireless communication", "Radar systems", "Broadcasting"]
        }
    ];

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case "Beginner": return "bg-green-100 text-green-800";
            case "Intermediate": return "bg-yellow-100 text-yellow-800";
            case "Advanced": return "bg-red-100 text-red-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-12">
                <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-primary/10 p-4">
                        <Zap className="h-8 w-8 text-primary" />
                    </div>
                </div>
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                    Circuits
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Discover circuit designs and configurations for various applications.
                    Click on any circuit to learn more about its design and analysis.
                </p>
            </div>

            {/* Circuits Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
                {circuits.map((circuit) => (
                    <Link
                        key={circuit.id}
                        href={`/circuits/${circuit.id}`}
                        className="group block"
                    >
                        <Card className="h-full hover:shadow-lg transition-shadow duration-200 cursor-pointer border-2 group-hover:border-primary/50">
                            <CardHeader className="pb-4">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="rounded-full bg-primary/10 p-2 group-hover:bg-primary/20 transition-colors">
                                            {circuit.icon}
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            {circuit.category}
                                        </div>
                                    </div>
                                    <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(circuit.difficulty)}`}>
                                        {circuit.difficulty}
                                    </span>
                                </div>
                                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                    {circuit.name}
                                </CardTitle>
                                <CardDescription className="text-sm">
                                    {circuit.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <div className="space-y-3">
                                    <div>
                                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Key Features</h4>
                                        <div className="space-y-1">
                                            {circuit.characteristics.slice(0, 2).map((char, index) => (
                                                <p key={index} className="text-xs text-muted-foreground">
                                                    • {char}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Applications</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {circuit.applications.slice(0, 2).map((app, index) => (
                                                <span
                                                    key={index}
                                                    className="text-xs bg-muted px-2 py-1 rounded"
                                                >
                                                    {app}
                                                </span>
                                            ))}
                                            {circuit.applications.length > 2 && (
                                                <span className="text-xs text-muted-foreground">
                                                    +{circuit.applications.length - 2} more
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

            {/* Circuit Analysis Methods */}
            <div className="bg-muted/30 rounded-lg p-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Circuit Analysis Techniques</h2>
                    <p className="text-muted-foreground">
                        Essential methods for analyzing and designing electronic circuits
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-card rounded-lg p-4 border">
                        <div className="flex items-center gap-2 mb-3">
                            <Settings className="h-5 w-5 text-primary" />
                            <h3 className="font-semibold">Basic Laws</h3>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Ohm&apos;s Law (V = I × R)</li>
                            <li>• Kirchhoff&apos;s Voltage Law (KVL)</li>
                            <li>• Kirchhoff&apos;s Current Law (KCL)</li>
                            <li>• Power calculations (P = V × I)</li>
                        </ul>
                    </div>

                    <div className="bg-card rounded-lg p-4 border">
                        <div className="flex items-center gap-2 mb-3">
                            <Gauge className="h-5 w-5 text-primary" />
                            <h3 className="font-semibold">Network Theorems</h3>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Thevenin&apos;s Theorem</li>
                            <li>• Norton&apos;s Theorem</li>
                            <li>• Superposition Theorem</li>
                            <li>• Maximum Power Transfer</li>
                        </ul>
                    </div>

                    <div className="bg-card rounded-lg p-4 border">
                        <div className="flex items-center gap-2 mb-3">
                            <Radio className="h-5 w-5 text-primary" />
                            <h3 className="font-semibold">AC Analysis</h3>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Phasor analysis</li>
                            <li>• Impedance calculations</li>
                            <li>• Frequency response</li>
                            <li>• Resonance conditions</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-12">
                <Button asChild variant="outline">
                    <Link href="/components">
                        ← Explore Components
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
