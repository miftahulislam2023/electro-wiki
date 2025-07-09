import { notFound } from "next/navigation";
import { ArrowLeft, Battery, Cpu, Gauge, Zap, Info, BookOpen, Settings, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

// Circuit data - in a real app this would come from a database
const circuitData = {
    "series-circuit": {
        id: "series-circuit",
        name: "Series Circuit",
        description: "Components connected end-to-end in a single path",
        category: "Basic Circuits",
        icon: <Battery className="h-8 w-8" />,
        difficulty: "Beginner",
        overview: "A series circuit is the simplest type of electric circuit where components are connected end-to-end in a single path. Current flows through each component sequentially, making it easy to understand but limiting in practical applications.",
        characteristics: [
            "Same current flows through all components",
            "Total voltage equals sum of individual voltage drops",
            "Total resistance equals sum of individual resistances",
            "If one component fails, entire circuit stops working"
        ],
        analysis: {
            "Current": "I = V_total / R_total",
            "Voltage": "V_total = V1 + V2 + V3 + ...",
            "Resistance": "R_total = R1 + R2 + R3 + ...",
            "Power": "P_total = P1 + P2 + P3 + ..."
        },
        components: [
            "Resistors for current limiting",
            "LEDs for indication",
            "Switches for control",
            "Fuses for protection"
        ],
        applications: [
            "String lights (Christmas lights)",
            "Battery packs in series",
            "Voltage divider circuits",
            "Simple LED circuits"
        ],
        designConsiderations: [
            "Voltage rating of each component",
            "Power dissipation in each element",
            "Reliability concerns (single point of failure)",
            "Cost vs performance trade-offs"
        ]
    },
    "parallel-circuit": {
        id: "parallel-circuit",
        name: "Parallel Circuit",
        description: "Components connected across common points",
        category: "Basic Circuits",
        icon: <Battery className="h-8 w-8" />,
        difficulty: "Beginner",
        overview: "Parallel circuits connect components across common voltage points, allowing each component to operate independently. This configuration is fundamental to most practical electrical systems.",
        characteristics: [
            "Same voltage across all components",
            "Total current equals sum of individual currents",
            "Total resistance is less than smallest individual resistance",
            "Components operate independently"
        ],
        analysis: {
            "Voltage": "V = V1 = V2 = V3 = ...",
            "Current": "I_total = I1 + I2 + I3 + ...",
            "Resistance": "1/R_total = 1/R1 + 1/R2 + 1/R3 + ...",
            "Power": "P_total = P1 + P2 + P3 + ..."
        },
        components: [
            "Resistors for current division",
            "Multiple loads at same voltage",
            "Individual switches per branch",
            "Circuit breakers for protection"
        ],
        applications: [
            "Household electrical wiring",
            "Car headlight circuits",
            "Computer power distribution",
            "Audio speaker systems"
        ],
        designConsiderations: [
            "Current capacity of main conductors",
            "Individual component protection",
            "Load balancing across branches",
            "Wire sizing for each branch"
        ]
    },
    "amplifier-circuits": {
        id: "amplifier-circuits",
        name: "Amplifier Circuits",
        description: "Increase the amplitude of input signals",
        category: "Analog Circuits",
        icon: <Gauge className="h-8 w-8" />,
        difficulty: "Intermediate",
        overview: "Amplifier circuits increase the amplitude of electrical signals while preserving their waveform. They are essential building blocks in audio systems, sensor interfaces, and communication equipment.",
        characteristics: [
            "Voltage gain, current gain, or both",
            "Input and output impedance considerations",
            "Frequency response characteristics",
            "Linear and non-linear operation modes"
        ],
        analysis: {
            "Voltage Gain": "Av = Vout / Vin",
            "Current Gain": "Ai = Iout / Iin",
            "Power Gain": "Ap = Pout / Pin = Av × Ai",
            "Input Impedance": "Zin = Vin / Iin"
        },
        components: [
            "Transistors (BJT, FET)",
            "Operational amplifiers",
            "Biasing resistors",
            "Coupling capacitors"
        ],
        applications: [
            "Audio amplification systems",
            "Sensor signal conditioning",
            "RF communication equipment",
            "Medical instrumentation"
        ],
        designConsiderations: [
            "Gain-bandwidth product limitations",
            "Thermal stability and bias point",
            "Distortion and noise specifications",
            "Power supply requirements"
        ]
    },
    "filter-circuits": {
        id: "filter-circuits",
        name: "Filter Circuits",
        description: "Select or reject specific frequency ranges",
        category: "Analog Circuits",
        icon: <Gauge className="h-8 w-8" />,
        difficulty: "Intermediate",
        overview: "Filter circuits selectively pass or reject signals based on their frequency content. They are fundamental to signal processing, power supplies, and communication systems.",
        characteristics: [
            "Frequency-dependent attenuation",
            "Phase response characteristics",
            "Passive (R,L,C) or active (with amplifiers)",
            "Various response shapes (Butterworth, Chebyshev, etc.)"
        ],
        analysis: {
            "Cutoff Frequency": "fc = 1/(2π√LC) or 1/(2πRC)",
            "Quality Factor": "Q = fc / Bandwidth",
            "Transfer Function": "H(jω) = Vout/Vin",
            "Attenuation": "A(dB) = 20log|H(jω)|"
        },
        components: [
            "Resistors for damping",
            "Capacitors for high-frequency filtering",
            "Inductors for low-frequency filtering",
            "Op-amps for active filters"
        ],
        applications: [
            "Audio crossover networks",
            "Power supply ripple filtering",
            "Anti-aliasing in data acquisition",
            "EMI/RFI suppression"
        ],
        designConsiderations: [
            "Required attenuation characteristics",
            "Component tolerance effects",
            "Temperature stability",
            "Cost vs performance optimization"
        ]
    },
    "logic-gates": {
        id: "logic-gates",
        name: "Logic Gates",
        description: "Basic building blocks of digital systems",
        category: "Digital Circuits",
        icon: <Cpu className="h-8 w-8" />,
        difficulty: "Beginner",
        overview: "Logic gates are the fundamental building blocks of digital electronics. They perform basic logical functions that are the basis for digital circuits and computer systems.",
        characteristics: [
            "Boolean logic operations",
            "Digital voltage levels (HIGH/LOW)",
            "Fast switching characteristics",
            "Noise immunity in digital operation"
        ],
        analysis: {
            "AND Gate": "Y = A · B",
            "OR Gate": "Y = A + B",
            "NOT Gate": "Y = Ā",
            "NAND Gate": "Y = (A · B)'"
        },
        components: [
            "Transistors in switching mode",
            "Diodes for logic functions",
            "Resistors for biasing",
            "Integrated circuit packages"
        ],
        applications: [
            "Digital processors and controllers",
            "Memory systems",
            "Digital signal processing",
            "Computer arithmetic units"
        ],
        designConsiderations: [
            "Logic voltage levels and noise margins",
            "Propagation delay and timing",
            "Power consumption per gate",
            "Fan-out capabilities"
        ]
    },
    "power-supplies": {
        id: "power-supplies",
        name: "Power Supply Circuits",
        description: "Convert and regulate electrical power",
        category: "Power Circuits",
        icon: <Zap className="h-8 w-8" />,
        difficulty: "Advanced",
        overview: "Power supply circuits convert electrical energy from one form to another and regulate voltage/current to provide stable power for electronic systems. They are critical for reliable operation of all electronic devices.",
        characteristics: [
            "AC to DC conversion (rectification)",
            "Voltage regulation and stabilization",
            "Efficiency optimization",
            "Ripple and noise reduction"
        ],
        analysis: {
            "Rectifier Output": "Vdc = 0.637 × Vpeak (half-wave)",
            "Ripple Factor": "r = Vripple / Vdc",
            "Regulation": "Reg% = (VNL - VFL)/VFL × 100",
            "Efficiency": "η = Pout / Pin × 100%"
        },
        components: [
            "Transformers for voltage conversion",
            "Diodes for rectification",
            "Capacitors for filtering",
            "Voltage regulators (linear/switching)"
        ],
        applications: [
            "Computer and laptop chargers",
            "LED drivers and lighting",
            "Battery charging systems",
            "Industrial power systems"
        ],
        designConsiderations: [
            "Efficiency vs size trade-offs",
            "Thermal management requirements",
            "EMI/EMC compliance",
            "Safety isolation requirements"
        ]
    }
};

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function CircuitDetailPage({ params }: PageProps) {
    const circuit = circuitData[(await params).slug as keyof typeof circuitData];

    if (!circuit) {
        notFound();
    }

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
            <div className="flex items-center gap-4 mb-8">
                <Button variant="outline" size="sm" asChild>
                    <Link href="/circuits">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Circuits
                    </Link>
                </Button>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Circuit Header */}
                    <div className="flex items-start gap-4">
                        <div className="rounded-full bg-primary/10 p-4">
                            {circuit.icon}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm text-muted-foreground">
                                    {circuit.category}
                                </span>
                                <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(circuit.difficulty)}`}>
                                    {circuit.difficulty}
                                </span>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight mb-4">
                                {circuit.name}
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                {circuit.description}
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
                                {circuit.overview}
                            </p>
                        </CardContent>
                    </Card>

                    {/* Key Characteristics */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <BookOpen className="h-5 w-5" />
                                Key Characteristics
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {circuit.characteristics.map((char, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <div className="rounded-full bg-primary/20 w-2 h-2 mt-2 flex-shrink-0" />
                                        <span className="text-sm">{char}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Circuit Analysis */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calculator className="h-5 w-5" />
                                Circuit Analysis
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4 md:grid-cols-2">
                                {Object.entries(circuit.analysis).map(([parameter, formula]) => (
                                    <div key={parameter} className="border rounded-lg p-4">
                                        <h4 className="font-semibold mb-2">{parameter}</h4>
                                        <code className="text-sm bg-muted px-2 py-1 rounded">
                                            {formula}
                                        </code>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Components */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Settings className="h-5 w-5" />
                                Typical Components
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-2 md:grid-cols-2">
                                {circuit.components.map((component, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className="rounded-full bg-primary/20 w-2 h-2 flex-shrink-0" />
                                        <span className="text-sm">{component}</span>
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
                                {circuit.applications.map((app, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className="rounded-full bg-blue-500/20 w-2 h-2 flex-shrink-0" />
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
                                {circuit.designConsiderations.map((consideration, index) => (
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
                    {/* Quick Info */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Quick Info</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <div className="border-b border-border/50 pb-2">
                                    <div className="text-sm font-medium">Category</div>
                                    <div className="text-sm text-muted-foreground">{circuit.category}</div>
                                </div>
                                <div className="border-b border-border/50 pb-2">
                                    <div className="text-sm font-medium">Difficulty</div>
                                    <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(circuit.difficulty)}`}>
                                        {circuit.difficulty}
                                    </span>
                                </div>
                                <div>
                                    <div className="text-sm font-medium">Applications</div>
                                    <div className="text-sm text-muted-foreground">
                                        {circuit.applications.length} common uses
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Quick Actions */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Related Topics</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                                <Link href="/components">
                                    View Related Components
                                </Link>
                            </Button>
                            <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                                <Link href="/concepts">
                                    Learn Basic Concepts
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Circuit Tips */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Design Tips</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>• Start with theoretical calculations</p>
                                <p>• Use simulation software for verification</p>
                                <p>• Consider component tolerances</p>
                                <p>• Plan for thermal management</p>
                                <p>• Test with actual components</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
