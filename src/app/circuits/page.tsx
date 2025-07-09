import { Zap, Battery, Gauge, Radio, Cpu, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CircuitsPage() {
    const circuitCategories = [
        {
            title: "Basic Circuits",
            icon: <Battery className="h-6 w-6" />,
            description: "Fundamental circuit configurations and principles",
            circuits: [
                {
                    name: "Series Circuit",
                    description: "Components connected end-to-end in a single path",
                    characteristics: [
                        "Same current flows through all components",
                        "Total voltage = sum of individual voltages",
                        "Total resistance = sum of individual resistances",
                        "If one component fails, entire circuit stops"
                    ],
                    applications: ["String lights", "Battery packs", "Voltage dividers"]
                },
                {
                    name: "Parallel Circuit",
                    description: "Components connected across common points",
                    characteristics: [
                        "Same voltage across all components",
                        "Total current = sum of individual currents",
                        "1/Rtotal = 1/R1 + 1/R2 + 1/R3...",
                        "Components operate independently"
                    ],
                    applications: ["Household wiring", "Car headlights", "Computer circuits"]
                },
                {
                    name: "Series-Parallel Circuit",
                    description: "Combination of series and parallel connections",
                    characteristics: [
                        "Complex current and voltage distribution",
                        "Requires analysis techniques (KVL, KCL)",
                        "Most practical circuits use this configuration",
                        "Allows for optimized design trade-offs"
                    ],
                    applications: ["Power distribution", "Audio systems", "Control circuits"]
                }
            ]
        },
        {
            title: "Analog Circuits",
            icon: <Gauge className="h-6 w-6" />,
            description: "Circuits that process continuous analog signals",
            circuits: [
                {
                    name: "Amplifier Circuits",
                    description: "Increase the amplitude of input signals",
                    characteristics: [
                        "Common Emitter - High voltage gain",
                        "Common Collector - Current gain, low output impedance",
                        "Common Base - High frequency response",
                        "Operational amplifier configurations"
                    ],
                    applications: ["Audio systems", "Sensor interfaces", "RF communication"]
                },
                {
                    name: "Filter Circuits",
                    description: "Select or reject specific frequency ranges",
                    characteristics: [
                        "Low-pass filters - Allow low frequencies",
                        "High-pass filters - Allow high frequencies",
                        "Band-pass filters - Allow specific frequency range",
                        "Band-stop filters - Reject specific frequencies"
                    ],
                    applications: ["Audio crossovers", "Power supplies", "Signal processing"]
                },
                {
                    name: "Oscillator Circuits",
                    description: "Generate periodic waveforms",
                    characteristics: [
                        "RC oscillators - Audio frequency range",
                        "LC oscillators - Radio frequency range",
                        "Crystal oscillators - High precision timing",
                        "Relaxation oscillators - Non-sinusoidal waves"
                    ],
                    applications: ["Clock generation", "Signal sources", "Timing circuits"]
                }
            ]
        },
        {
            title: "Digital Circuits",
            icon: <Cpu className="h-6 w-6" />,
            description: "Circuits that process discrete digital signals",
            circuits: [
                {
                    name: "Logic Gates",
                    description: "Basic building blocks of digital systems",
                    characteristics: [
                        "AND gate - Output high when all inputs high",
                        "OR gate - Output high when any input high",
                        "NOT gate - Output opposite of input",
                        "NAND, NOR, XOR gates - Composite functions"
                    ],
                    applications: ["Computer processors", "Digital controllers", "Logic circuits"]
                },
                {
                    name: "Flip-Flops and Latches",
                    description: "Memory elements that store binary information",
                    characteristics: [
                        "SR Latch - Set-Reset memory element",
                        "D Flip-Flop - Data storage with clock",
                        "JK Flip-Flop - No forbidden states",
                        "T Flip-Flop - Toggle operation"
                    ],
                    applications: ["Registers", "Counters", "State machines"]
                },
                {
                    name: "Combinational Circuits",
                    description: "Output depends only on current inputs",
                    characteristics: [
                        "Encoders - Multiple inputs to coded output",
                        "Decoders - Coded input to multiple outputs",
                        "Multiplexers - Select one of many inputs",
                        "Demultiplexers - Route input to selected output"
                    ],
                    applications: ["Data routing", "Address decoding", "Display drivers"]
                }
            ]
        },
        {
            title: "Power Circuits",
            icon: <Zap className="h-6 w-6" />,
            description: "Circuits for power conversion and control",
            circuits: [
                {
                    name: "Rectifier Circuits",
                    description: "Convert AC to DC voltage",
                    characteristics: [
                        "Half-wave rectifier - Simple, low efficiency",
                        "Full-wave rectifier - Better efficiency",
                        "Bridge rectifier - No center-tapped transformer",
                        "Voltage multiplier - Higher output voltage"
                    ],
                    applications: ["Power supplies", "DC motor drives", "Battery chargers"]
                },
                {
                    name: "Switching Regulators",
                    description: "Efficient voltage regulation using switching",
                    characteristics: [
                        "Buck converter - Step-down voltage",
                        "Boost converter - Step-up voltage",
                        "Buck-boost converter - Either direction",
                        "Flyback converter - Isolated output"
                    ],
                    applications: ["Computer power supplies", "LED drivers", "Solar inverters"]
                }
            ]
        },
        {
            title: "Communication Circuits",
            icon: <Radio className="h-6 w-6" />,
            description: "Circuits for signal transmission and reception",
            circuits: [
                {
                    name: "Modulation Circuits",
                    description: "Encode information onto carrier signals",
                    characteristics: [
                        "Amplitude Modulation (AM) - Vary carrier amplitude",
                        "Frequency Modulation (FM) - Vary carrier frequency",
                        "Phase Modulation (PM) - Vary carrier phase",
                        "Digital modulation - PSK, FSK, QAM"
                    ],
                    applications: ["Radio broadcasting", "WiFi systems", "Cellular networks"]
                },
                {
                    name: "Antenna Circuits",
                    description: "Convert electrical signals to electromagnetic waves",
                    characteristics: [
                        "Dipole antennas - Simple, bidirectional",
                        "Monopole antennas - Ground plane required",
                        "Patch antennas - Compact, directional",
                        "Array antennas - High gain, steerable"
                    ],
                    applications: ["Wireless communication", "Radar systems", "Satellite links"]
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
                        <Zap className="h-8 w-8 text-primary" />
                    </div>
                </div>
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                    Electronic Circuits
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Discover circuit designs and configurations for various applications.
                    From basic series-parallel circuits to complex digital and communication systems.
                </p>
            </div>

            {/* Circuit Categories */}
            <div className="space-y-12">
                {circuitCategories.map((category, categoryIndex) => (
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

                        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                            {category.circuits.map((circuit, circuitIndex) => (
                                <div key={circuitIndex} className="bg-muted/20 rounded-lg p-6 border">
                                    <h3 className="text-lg font-semibold mb-2">{circuit.name}</h3>
                                    <p className="text-muted-foreground mb-4">{circuit.description}</p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Key Characteristics:</h4>
                                        <ul className="space-y-1 text-sm">
                                            {circuit.characteristics.map((char, charIndex) => (
                                                <li key={charIndex} className="flex items-start gap-2">
                                                    <div className="rounded-full bg-primary/20 w-1.5 h-1.5 mt-2 flex-shrink-0" />
                                                    <span>{char}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Applications:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {circuit.applications.map((app, appIndex) => (
                                                <span
                                                    key={appIndex}
                                                    className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs"
                                                >
                                                    {app}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Circuit Analysis Methods */}
            <div className="mt-16 bg-muted/30 rounded-lg p-8">
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
                            <li>• Phasor representation</li>
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
                        ← Components
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
