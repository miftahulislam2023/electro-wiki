import { Lightbulb, Zap, Gauge, Atom, Calculator, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ConceptsPage() {
    const conceptCategories = [
        {
            title: "Fundamental Concepts",
            icon: <Atom className="h-6 w-6" />,
            description: "Core principles of electricity and electronics",
            concepts: [
                {
                    name: "Electric Charge",
                    description: "The fundamental property of matter that causes electrical phenomena",
                    details: [
                        "Positive and negative charges - Like charges repel, unlike attract",
                        "Coulomb&apos;s Law - Force between charges inversely proportional to distance squared",
                        "Conservation of charge - Total charge in isolated system remains constant",
                        "Elementary charge (e) = 1.602 × 10⁻¹⁹ coulombs"
                    ],
                    formulas: ["F = k(q₁q₂)/r²", "Q = ne"]
                },
                {
                    name: "Electric Current",
                    description: "The flow of electric charge through a conductor",
                    details: [
                        "Conventional current - Positive charge flow (opposite to electron flow)",
                        "Direct Current (DC) - Constant direction and magnitude",
                        "Alternating Current (AC) - Periodically changes direction",
                        "Current density - Current per unit cross-sectional area"
                    ],
                    formulas: ["I = Q/t", "I = nAve", "J = I/A"]
                },
                {
                    name: "Voltage (Potential Difference)",
                    description: "The electrical potential energy difference per unit charge",
                    details: [
                        "Work done to move charge between two points",
                        "Measured in volts (V) - joules per coulomb",
                        "EMF (Electromotive Force) - Voltage source in circuit",
                        "Ground reference - Zero potential reference point"
                    ],
                    formulas: ["V = W/Q", "V = E·d", "P = VI"]
                },
                {
                    name: "Resistance",
                    description: "Opposition to the flow of electric current",
                    details: [
                        "Ohmic materials - Linear relationship between V and I",
                        "Temperature coefficient - Resistance change with temperature",
                        "Resistivity - Material property affecting resistance",
                        "Conductance - Reciprocal of resistance (G = 1/R)"
                    ],
                    formulas: ["R = V/I", "R = ρl/A", "G = 1/R"]
                }
            ]
        },
        {
            title: "Energy and Power",
            icon: <Zap className="h-6 w-6" />,
            description: "Energy storage, transfer, and power dissipation",
            concepts: [
                {
                    name: "Electrical Power",
                    description: "Rate of energy conversion or consumption",
                    details: [
                        "Power dissipation in resistors - Converts electrical to heat energy",
                        "Power factor - Relationship between real and apparent power (AC)",
                        "Maximum power transfer - Load resistance equals source resistance",
                        "Efficiency - Ratio of useful output power to input power"
                    ],
                    formulas: ["P = VI", "P = I²R", "P = V²/R", "η = Pout/Pin"]
                },
                {
                    name: "Energy Storage",
                    description: "Storing electrical energy in electric and magnetic fields",
                    details: [
                        "Capacitor energy - Stored in electric field between plates",
                        "Inductor energy - Stored in magnetic field around conductor",
                        "Energy density - Energy per unit volume",
                        "Battery energy - Chemical to electrical energy conversion"
                    ],
                    formulas: ["Ec = ½CV²", "EL = ½LI²", "u = ½εE²"]
                }
            ]
        },
        {
            title: "AC Circuit Analysis",
            icon: <Waves className="h-6 w-6" />,
            description: "Alternating current circuit behavior and analysis",
            concepts: [
                {
                    name: "Sinusoidal Waveforms",
                    description: "Mathematical representation of AC signals",
                    details: [
                        "Amplitude - Peak value of the waveform",
                        "Frequency - Number of cycles per second (Hz)",
                        "Phase - Angular displacement between waveforms",
                        "RMS value - Effective value for power calculations"
                    ],
                    formulas: ["v(t) = Vm sin(ωt + φ)", "Vrms = Vm/√2", "f = 1/T"]
                },
                {
                    name: "Impedance",
                    description: "AC opposition to current flow (magnitude and phase)",
                    details: [
                        "Resistance - Real component, no phase shift",
                        "Reactance - Imaginary component, 90° phase shift",
                        "Capacitive reactance - Decreases with frequency",
                        "Inductive reactance - Increases with frequency"
                    ],
                    formulas: ["Z = R + jX", "XL = ωL", "XC = 1/(ωC)"]
                },
                {
                    name: "Resonance",
                    description: "Condition where reactive components cancel each other",
                    details: [
                        "Series resonance - Minimum impedance, maximum current",
                        "Parallel resonance - Maximum impedance, minimum current",
                        "Quality factor (Q) - Measure of resonance sharpness",
                        "Bandwidth - Frequency range of effective operation"
                    ],
                    formulas: ["fr = 1/(2π√LC)", "Q = ωL/R", "BW = fr/Q"]
                }
            ]
        },
        {
            title: "Semiconductor Physics",
            icon: <Calculator className="h-6 w-6" />,
            description: "Principles of semiconductor devices and materials",
            concepts: [
                {
                    name: "PN Junction",
                    description: "Interface between P-type and N-type semiconductor materials",
                    details: [
                        "Depletion region - Area depleted of mobile charge carriers",
                        "Built-in potential - Voltage across unbiased junction",
                        "Forward bias - Reduces depletion width, allows current flow",
                        "Reverse bias - Increases depletion width, blocks current flow"
                    ],
                    formulas: ["I = Is(e^(qV/kT) - 1)", "Vbi = (kT/q)ln(NaNd/ni²)"]
                },
                {
                    name: "Transistor Operation",
                    description: "Current control and amplification in transistor devices",
                    details: [
                        "BJT operation - Current-controlled current source",
                        "FET operation - Voltage-controlled current source",
                        "Amplification regions - Active, saturation, cutoff",
                        "Small-signal models - Linear analysis for small variations"
                    ],
                    formulas: ["IC = βIB", "gm = IC/VT", "ro = VA/IC"]
                }
            ]
        },
        {
            title: "Digital Logic",
            icon: <Gauge className="h-6 w-6" />,
            description: "Binary systems and digital signal processing",
            concepts: [
                {
                    name: "Boolean Algebra",
                    description: "Mathematical system for digital logic operations",
                    details: [
                        "Logic variables - Binary values (0 and 1)",
                        "Basic operations - AND, OR, NOT",
                        "De Morgan&apos;s laws - Relationship between AND/OR operations",
                        "Logic minimization - Simplifying Boolean expressions"
                    ],
                    formulas: ["A·B = A AND B", "A+B = A OR B", "Ā = NOT A"]
                },
                {
                    name: "Number Systems",
                    description: "Different bases for representing digital information",
                    details: [
                        "Binary system - Base 2 (0, 1)",
                        "Decimal system - Base 10 (0-9)",
                        "Hexadecimal system - Base 16 (0-9, A-F)",
                        "Two&apos;s complement - Signed binary representation"
                    ],
                    formulas: ["(1010)₂ = (10)₁₀", "(FF)₁₆ = (255)₁₀"]
                }
            ]
        },
        {
            title: "Signal Processing",
            icon: <Waves className="h-6 w-6" />,
            description: "Analysis and manipulation of electrical signals",
            concepts: [
                {
                    name: "Fourier Analysis",
                    description: "Decomposition of signals into frequency components",
                    details: [
                        "Fourier series - Periodic signal decomposition",
                        "Fourier transform - Non-periodic signal analysis",
                        "Frequency domain - Signal representation vs frequency",
                        "Spectral analysis - Understanding signal frequency content"
                    ],
                    formulas: ["X(ω) = ∫x(t)e^(-jωt)dt", "x(t) = (1/2π)∫X(ω)e^(jωt)dω"]
                },
                {
                    name: "Filtering",
                    description: "Selective frequency response modification",
                    details: [
                        "Transfer function - Input-output relationship",
                        "Frequency response - Magnitude and phase vs frequency",
                        "Pole-zero analysis - Stability and response characteristics",
                        "Filter types - Low-pass, high-pass, band-pass, band-stop"
                    ],
                    formulas: ["H(jω) = Vout/Vin", "|H(jω)| = magnitude response"]
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
                        <Lightbulb className="h-8 w-8 text-primary" />
                    </div>
                </div>
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                    Electrical & Electronics Concepts
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Master the fundamental theories and principles that govern electrical and electronic systems.
                    From basic circuit laws to advanced signal processing concepts.
                </p>
            </div>

            {/* Concept Categories */}
            <div className="space-y-12">
                {conceptCategories.map((category, categoryIndex) => (
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
                            {category.concepts.map((concept, conceptIndex) => (
                                <div key={conceptIndex} className="bg-muted/20 rounded-lg p-6 border">
                                    <h3 className="text-lg font-semibold mb-2">{concept.name}</h3>
                                    <p className="text-muted-foreground mb-4">{concept.description}</p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Key Points:</h4>
                                        <ul className="space-y-1 text-sm">
                                            {concept.details.map((detail, detailIndex) => (
                                                <li key={detailIndex} className="flex items-start gap-2">
                                                    <div className="rounded-full bg-primary/20 w-1.5 h-1.5 mt-2 flex-shrink-0" />
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {concept.formulas && (
                                        <div>
                                            <h4 className="font-medium mb-2">Key Formulas:</h4>
                                            <div className="space-y-1">
                                                {concept.formulas.map((formula, formulaIndex) => (
                                                    <div
                                                        key={formulaIndex}
                                                        className="bg-muted/40 border rounded px-3 py-1 font-mono text-sm"
                                                    >
                                                        {formula}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Study Tips */}
            <div className="mt-16 bg-muted/30 rounded-lg p-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Study Guidelines</h2>
                    <p className="text-muted-foreground">
                        Effective approaches to mastering electrical and electronics concepts
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-card rounded-lg p-4 border">
                        <div className="flex items-center gap-2 mb-3">
                            <Calculator className="h-5 w-5 text-primary" />
                            <h3 className="font-semibold">Mathematical Foundation</h3>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Master complex numbers and phasors</li>
                            <li>• Practice differential equations</li>
                            <li>• Understand Fourier transforms</li>
                            <li>• Learn matrix algebra for circuits</li>
                        </ul>
                    </div>

                    <div className="bg-card rounded-lg p-4 border">
                        <div className="flex items-center gap-2 mb-3">
                            <Lightbulb className="h-5 w-5 text-primary" />
                            <h3 className="font-semibold">Practical Application</h3>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Build physical circuits</li>
                            <li>• Use simulation software</li>
                            <li>• Measure with oscilloscopes</li>
                            <li>• Design real-world projects</li>
                        </ul>
                    </div>

                    <div className="bg-card rounded-lg p-4 border">
                        <div className="flex items-center gap-2 mb-3">
                            <Gauge className="h-5 w-5 text-primary" />
                            <h3 className="font-semibold">Problem Solving</h3>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Work through example problems</li>
                            <li>• Practice different analysis methods</li>
                            <li>• Verify results with multiple approaches</li>
                            <li>• Understand limiting cases</li>
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
                    <Link href="/circuits">
                        ← Circuits
                    </Link>
                </Button>
            </div>
        </div>
    );
}
