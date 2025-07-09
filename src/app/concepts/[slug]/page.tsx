import { notFound } from "next/navigation";
import { ArrowLeft, Atom, Zap, Calculator, Waves, Info, BookOpen, Settings, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

// Concept data - in a real app this would come from a database
const conceptData = {
    "electric-charge": {
        id: "electric-charge",
        name: "Electric Charge",
        description: "The fundamental property of matter that causes electrical phenomena",
        category: "Fundamental Concepts",
        icon: <Atom className="h-8 w-8" />,
        difficulty: "Beginner",
        overview: "Electric charge is a fundamental property of matter that gives rise to all electrical phenomena. It is the source of electric fields and the driving force behind electric current. Understanding charge is essential for comprehending how electronic devices work.",
        keyPrinciples: [
            "Like charges repel, unlike charges attract",
            "Charge is conserved in isolated systems",
            "Charge is quantized in units of elementary charge",
            "Electric force follows the inverse square law"
        ],
        formulas: {
            "Coulomb's Law": "F = k(q₁q₂)/r²",
            "Elementary Charge": "e = 1.602 × 10⁻¹⁹ C",
            "Charge Quantization": "Q = ne",
            "Electric Field": "E = F/q = kQ/r²"
        },
        details: [
            "Positive charges are associated with protons in atomic nuclei",
            "Negative charges are carried by electrons",
            "Materials can be charged by friction, contact, or induction",
            "The SI unit of charge is the coulomb (C)"
        ],
        applications: [
            "Capacitors store energy by separating charges",
            "Static electricity in everyday phenomena",
            "Ion flow in batteries and solutions",
            "Electronic devices rely on controlled charge movement"
        ],
        relatedConcepts: [
            "Electric Current",
            "Electric Field",
            "Capacitance"
        ]
    },
    "electric-current": {
        id: "electric-current",
        name: "Electric Current",
        description: "The flow of electric charge through a conductor",
        category: "Fundamental Concepts",
        icon: <Atom className="h-8 w-8" />,
        difficulty: "Beginner",
        overview: "Electric current is the rate of flow of electric charge through a cross-sectional area. It is the foundation of all electrical circuits and electronic devices, representing how charge moves to transfer energy and information.",
        keyPrinciples: [
            "Current is the rate of charge flow",
            "Conventional current flows from positive to negative",
            "Electron flow is opposite to conventional current",
            "Current requires a complete circuit path"
        ],
        formulas: {
            "Current Definition": "I = Q/t",
            "Microscopic Current": "I = nAve",
            "Current Density": "J = I/A",
            "Ohm's Law": "I = V/R"
        },
        details: [
            "Direct Current (DC) flows in one direction constantly",
            "Alternating Current (AC) periodically reverses direction",
            "Current density describes current per unit area",
            "The SI unit of current is the ampere (A)"
        ],
        applications: [
            "Power transmission and distribution",
            "Electronic circuit operation",
            "Motor and generator function",
            "Signal processing in communication"
        ],
        relatedConcepts: [
            "Voltage",
            "Resistance",
            "Electric Power"
        ]
    },
    "voltage": {
        id: "voltage",
        name: "Voltage (Potential Difference)",
        description: "The electrical potential energy difference per unit charge",
        category: "Fundamental Concepts",
        icon: <Atom className="h-8 w-8" />,
        difficulty: "Beginner",
        overview: "Voltage, or potential difference, represents the energy per unit charge available to drive current through a circuit. It is the 'electrical pressure' that pushes charges through conductors and is fundamental to understanding circuit behavior.",
        keyPrinciples: [
            "Voltage is energy per unit charge",
            "It represents the potential to do work",
            "Voltage is always measured between two points",
            "Higher voltage can drive more current through the same resistance"
        ],
        formulas: {
            "Voltage Definition": "V = W/Q",
            "Electric Field Voltage": "V = E·d",
            "Power Relation": "P = VI",
            "Ohm's Law": "V = IR"
        },
        details: [
            "EMF (Electromotive Force) is the voltage generated by sources",
            "Ground serves as a reference point (zero potential)",
            "Voltage drop occurs across resistive elements",
            "The SI unit of voltage is the volt (V)"
        ],
        applications: [
            "Battery and power supply operation",
            "Signal processing and amplification",
            "Sensor measurements",
            "Power transmission systems"
        ],
        relatedConcepts: [
            "Electric Current",
            "Electric Power",
            "Electric Field"
        ]
    },
    "resistance": {
        id: "resistance",
        name: "Resistance",
        description: "Opposition to the flow of electric current",
        category: "Fundamental Concepts",
        icon: <Atom className="h-8 w-8" />,
        difficulty: "Beginner",
        overview: "Resistance is the property of materials that opposes the flow of electric current. It converts electrical energy into heat and is fundamental to controlling current flow in circuits. Understanding resistance is crucial for circuit design and analysis.",
        keyPrinciples: [
            "Resistance opposes current flow",
            "It follows Ohm's law for ohmic materials",
            "Resistance depends on material, geometry, and temperature",
            "Higher resistance reduces current for a given voltage"
        ],
        formulas: {
            "Ohm's Law": "R = V/I",
            "Resistivity Formula": "R = ρl/A",
            "Temperature Coefficient": "R(T) = R₀[1 + α(T-T₀)]",
            "Conductance": "G = 1/R"
        },
        details: [
            "Resistivity is an intrinsic material property",
            "Length increases resistance, area decreases it",
            "Temperature typically increases resistance in metals",
            "The SI unit of resistance is the ohm (Ω)"
        ],
        applications: [
            "Current limiting in LED circuits",
            "Voltage division networks",
            "Heating elements and heaters",
            "Precision measurement circuits"
        ],
        relatedConcepts: [
            "Ohm's Law",
            "Electric Power",
            "Temperature Effects"
        ]
    },
    "electrical-power": {
        id: "electrical-power",
        name: "Electrical Power",
        description: "Rate of energy conversion or consumption",
        category: "Energy and Power",
        icon: <Zap className="h-8 w-8" />,
        difficulty: "Intermediate",
        overview: "Electrical power represents the rate at which electrical energy is converted to other forms of energy or consumed by devices. It is crucial for understanding energy efficiency, device ratings, and electrical system design.",
        keyPrinciples: [
            "Power is the rate of energy transfer",
            "It can be calculated multiple ways using V, I, and R",
            "Maximum power transfer occurs at matched impedances",
            "Efficiency is the ratio of useful output to total input power"
        ],
        formulas: {
            "Basic Power": "P = VI",
            "Resistive Power": "P = I²R = V²/R",
            "Efficiency": "η = Pout/Pin × 100%",
            "AC Power": "P = VrmsIrms cos φ"
        },
        details: [
            "Real power does useful work (measured in watts)",
            "Reactive power is stored and returned (measured in VARs)",
            "Apparent power is the total power (measured in VA)",
            "Power factor relates real to apparent power in AC circuits"
        ],
        applications: [
            "Device power ratings and consumption",
            "Electrical billing and energy management",
            "Heat dissipation calculations",
            "Efficiency optimization in power systems"
        ],
        relatedConcepts: [
            "Energy Storage",
            "AC Analysis",
            "Efficiency"
        ]
    },
    "ac-waveforms": {
        id: "ac-waveforms",
        name: "AC Waveforms",
        description: "Mathematical representation of alternating current signals",
        category: "AC Circuit Analysis",
        icon: <Waves className="h-8 w-8" />,
        difficulty: "Intermediate",
        overview: "AC waveforms represent signals that vary with time, typically sinusoidally. Understanding these waveforms is essential for AC circuit analysis, signal processing, and power systems. They form the basis for understanding how AC circuits behave.",
        keyPrinciples: [
            "Sinusoidal waveforms are characterized by amplitude, frequency, and phase",
            "RMS values provide equivalent DC values for power calculations",
            "Phase relationships determine how signals combine",
            "Frequency content affects circuit impedance"
        ],
        formulas: {
            "Sinusoidal Function": "v(t) = Vm sin(ωt + φ)",
            "RMS Value": "Vrms = Vm/√2",
            "Frequency": "f = 1/T = ω/(2π)",
            "Average Power": "P = VrmsIrms cos φ"
        },
        details: [
            "Amplitude is the peak value of the waveform",
            "Frequency is cycles per second (Hz)",
            "Phase angle represents timing relationship",
            "Period is the time for one complete cycle"
        ],
        applications: [
            "AC power distribution systems",
            "Audio and radio signal processing",
            "Function generators and oscillators",
            "Communication system carriers"
        ],
        relatedConcepts: [
            "Impedance",
            "Phasor Analysis",
            "Fourier Analysis"
        ]
    },
    "energy-storage": {
        id: "energy-storage",
        name: "Energy Storage",
        description: "Storing electrical energy in electric and magnetic fields",
        category: "Energy and Power",
        icon: <Zap className="h-8 w-8" />,
        difficulty: "Intermediate",
        overview: "Energy storage in electrical systems involves storing electrical energy in electric and magnetic fields using capacitors and inductors. This concept is fundamental to power supplies, timing circuits, and energy management systems.",
        keyPrinciples: [
            "Capacitors store energy in electric fields",
            "Inductors store energy in magnetic fields",
            "Energy density depends on field strength and material properties",
            "Stored energy can be rapidly released when needed"
        ],
        formulas: {
            "Capacitor Energy": "E = ½CV²",
            "Inductor Energy": "E = ½LI²",
            "Energy Density": "u = ½εE² (electric), u = ½μH² (magnetic)",
            "Power Relation": "P = dE/dt"
        },
        details: [
            "Capacitors use dielectric materials to increase energy storage",
            "Inductors use magnetic cores to enhance energy storage",
            "Energy storage capacity affects circuit time constants",
            "Energy can be stored and released multiple times"
        ],
        applications: [
            "Power supply filtering and regulation",
            "Pulse power applications",
            "Energy harvesting systems",
            "Timing and oscillator circuits"
        ],
        relatedConcepts: [
            "Electrical Power",
            "Capacitance",
            "Inductance"
        ]
    },
    "impedance": {
        id: "impedance",
        name: "Impedance",
        description: "Opposition to alternating current in complex circuits",
        category: "AC Circuit Analysis",
        icon: <Waves className="h-8 w-8" />,
        difficulty: "Advanced",
        overview: "Impedance extends the concept of resistance to AC circuits, incorporating the effects of capacitance and inductance. It is represented as a complex number and is fundamental to AC circuit analysis and design.",
        keyPrinciples: [
            "Impedance combines resistance and reactance",
            "It is frequency-dependent in reactive circuits",
            "Complex notation simplifies AC analysis",
            "Impedance matching maximizes power transfer"
        ],
        formulas: {
            "Impedance": "Z = R + jX",
            "Magnitude": "|Z| = √(R² + X²)",
            "Phase Angle": "φ = arctan(X/R)",
            "Reactance": "XL = ωL, XC = 1/(ωC)"
        },
        details: [
            "Inductive reactance increases with frequency",
            "Capacitive reactance decreases with frequency",
            "Impedance determines current amplitude and phase",
            "Resonance occurs when inductive and capacitive reactances cancel"
        ],
        applications: [
            "Filter design and frequency response",
            "Impedance matching networks",
            "Transmission line analysis",
            "Audio and RF circuit design"
        ],
        relatedConcepts: [
            "AC Waveforms",
            "Resonance",
            "Phasor Analysis"
        ]
    },
    "resonance": {
        id: "resonance",
        name: "Resonance",
        description: "Frequency-dependent behavior in LC circuits",
        category: "AC Circuit Analysis",
        icon: <Waves className="h-8 w-8" />,
        difficulty: "Advanced",
        overview: "Resonance occurs in circuits containing both inductance and capacitance when the inductive and capacitive reactances are equal. At resonance, circuits exhibit unique behavior useful for filtering, tuning, and oscillation.",
        keyPrinciples: [
            "Resonance occurs when XL = XC",
            "Impedance is minimum in series resonance",
            "Quality factor determines resonance sharpness",
            "Bandwidth is inversely related to Q factor"
        ],
        formulas: {
            "Resonant Frequency": "f₀ = 1/(2π√LC)",
            "Quality Factor": "Q = ωL/R = 1/(ωRC)",
            "Bandwidth": "BW = f₀/Q",
            "Series Impedance": "Z = R (at resonance)"
        },
        details: [
            "Series resonance minimizes impedance",
            "Parallel resonance maximizes impedance",
            "Energy oscillates between electric and magnetic fields",
            "High Q circuits have sharp frequency response"
        ],
        applications: [
            "Radio tuning circuits",
            "Bandpass and bandstop filters",
            "Oscillator circuits",
            "Wireless power transfer systems"
        ],
        relatedConcepts: [
            "Impedance",
            "Quality Factor",
            "Filter Design"
        ]
    },
    "electromagnetic-fields": {
        id: "electromagnetic-fields",
        name: "Electromagnetic Fields",
        description: "Electric and magnetic field interactions",
        category: "Advanced Concepts",
        icon: <Calculator className="h-8 w-8" />,
        difficulty: "Advanced",
        overview: "Electromagnetic fields describe the fundamental interaction between electric and magnetic phenomena. Maxwell's equations govern these fields and form the basis for understanding wave propagation, antenna theory, and electromagnetic compatibility.",
        keyPrinciples: [
            "Electric and magnetic fields are interconnected",
            "Changing electric fields create magnetic fields",
            "Changing magnetic fields create electric fields",
            "Fields propagate as electromagnetic waves"
        ],
        formulas: {
            "Maxwell's Equations": "∇·E = ρ/ε, ∇·B = 0, ∇×E = -∂B/∂t, ∇×B = μJ + με∂E/∂t",
            "Wave Equation": "∇²E = με∂²E/∂t²",
            "Wave Speed": "c = 1/√(μ₀ε₀)",
            "Poynting Vector": "S = E × H"
        },
        details: [
            "Electric fields exert forces on charges",
            "Magnetic fields exert forces on moving charges",
            "Field energy density depends on field strength",
            "Electromagnetic waves carry energy and momentum"
        ],
        applications: [
            "Antenna design and analysis",
            "Electromagnetic interference (EMI) control",
            "Wireless communication systems",
            "Transformer and motor design"
        ],
        relatedConcepts: [
            "Wave Propagation",
            "Antenna Theory",
            "EMC Analysis"
        ]
    },
    "semiconductor-physics": {
        id: "semiconductor-physics",
        name: "Semiconductor Physics",
        description: "Behavior of electrons and holes in semiconductor materials",
        category: "Advanced Concepts",
        icon: <Calculator className="h-8 w-8" />,
        difficulty: "Advanced",
        overview: "Semiconductor physics explains how electrons and holes behave in semiconductor materials and how doping creates PN junctions. This understanding is fundamental to all modern electronic devices including diodes, transistors, and integrated circuits.",
        keyPrinciples: [
            "Pure semiconductors have equal electrons and holes",
            "Doping creates excess carriers (electrons or holes)",
            "PN junctions create depletion regions",
            "Forward bias reduces barrier, reverse bias increases it"
        ],
        formulas: {
            "Carrier Concentration": "np = ni²",
            "Junction Current": "I = Is(e^(qV/kT) - 1)",
            "Depletion Width": "W = √(2ε(Vbi + VR)/qNA)",
            "Mobility": "μ = vd/E"
        },
        details: [
            "Band theory explains electrical properties",
            "Fermi level determines carrier concentrations",
            "Temperature affects carrier generation and mobility",
            "Crystal defects affect device performance"
        ],
        applications: [
            "Diode rectification and voltage regulation",
            "Transistor amplification and switching",
            "Solar cell energy conversion",
            "Integrated circuit fabrication"
        ],
        relatedConcepts: [
            "PN Junction",
            "Transistor Operation",
            "Band Theory"
        ]
    },
    "feedback-systems": {
        id: "feedback-systems",
        name: "Feedback Systems",
        description: "Control systems using output to modify input",
        category: "Advanced Concepts",
        icon: <Calculator className="h-8 w-8" />,
        difficulty: "Advanced",
        overview: "Feedback systems use a portion of the output signal to modify the input, creating closed-loop control. This concept is fundamental to amplifier design, voltage regulation, and automatic control systems.",
        keyPrinciples: [
            "Negative feedback improves stability and reduces distortion",
            "Positive feedback can cause oscillation",
            "Loop gain determines feedback effectiveness",
            "Phase margin affects stability"
        ],
        formulas: {
            "Closed Loop Gain": "A = G/(1 + GH)",
            "Loop Gain": "T = GH",
            "Sensitivity": "S = 1/(1 + T)",
            "Stability Criterion": "Phase margin > 45°"
        },
        details: [
            "Negative feedback reduces gain but improves performance",
            "Bandwidth typically increases with negative feedback",
            "Input and output impedances are modified",
            "Stability analysis prevents oscillation"
        ],
        applications: [
            "Operational amplifier circuits",
            "Voltage regulator design",
            "Automatic control systems",
            "Audio amplifier linearization"
        ],
        relatedConcepts: [
            "Amplifier Design",
            "Control Theory",
            "Stability Analysis"
        ]
    }
};

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ConceptDetailPage({ params }: PageProps) {
    const concept = conceptData[(await params).slug as keyof typeof conceptData];

    if (!concept) {
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
                    <Link href="/concepts">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Concepts
                    </Link>
                </Button>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Concept Header */}
                    <div className="flex items-start gap-4">
                        <div className="rounded-full bg-primary/10 p-4">
                            {concept.icon}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm text-muted-foreground">
                                    {concept.category}
                                </span>
                                <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(concept.difficulty)}`}>
                                    {concept.difficulty}
                                </span>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight mb-4">
                                {concept.name}
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                {concept.description}
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
                                {concept.overview}
                            </p>
                        </CardContent>
                    </Card>

                    {/* Key Principles */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Lightbulb className="h-5 w-5" />
                                Key Principles
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {concept.keyPrinciples.map((principle, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <div className="rounded-full bg-primary/20 w-2 h-2 mt-2 flex-shrink-0" />
                                        <span className="text-sm">{principle}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Mathematical Formulas */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calculator className="h-5 w-5" />
                                Key Formulas
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4 md:grid-cols-2">
                                {Object.entries(concept.formulas).map(([name, formula]) => (
                                    <div key={name} className="border rounded-lg p-4">
                                        <h4 className="font-semibold mb-2">{name}</h4>
                                        <code className="text-sm bg-muted px-2 py-1 rounded block">
                                            {formula}
                                        </code>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Detailed Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <BookOpen className="h-5 w-5" />
                                Detailed Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {concept.details.map((detail, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <div className="rounded-full bg-blue-500/20 w-2 h-2 mt-2 flex-shrink-0" />
                                        <span className="text-sm">{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Applications */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Settings className="h-5 w-5" />
                                Practical Applications
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-2 md:grid-cols-2">
                                {concept.applications.map((app, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className="rounded-full bg-green-500/20 w-2 h-2 flex-shrink-0" />
                                        <span className="text-sm">{app}</span>
                                    </div>
                                ))}
                            </div>
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
                                    <div className="text-sm text-muted-foreground">{concept.category}</div>
                                </div>
                                <div className="border-b border-border/50 pb-2">
                                    <div className="text-sm font-medium">Difficulty</div>
                                    <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(concept.difficulty)}`}>
                                        {concept.difficulty}
                                    </span>
                                </div>
                                <div>
                                    <div className="text-sm font-medium">Applications</div>
                                    <div className="text-sm text-muted-foreground">
                                        {concept.applications.length} practical uses
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Related Concepts */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Related Concepts</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            {concept.relatedConcepts.map((related, index) => (
                                <div key={index} className="text-sm p-2 bg-muted rounded hover:bg-muted/80 transition-colors">
                                    {related}
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Quick Actions */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Explore More</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                                <Link href="/components">
                                    View Related Components
                                </Link>
                            </Button>
                            <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                                <Link href="/circuits">
                                    See Practical Circuits
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Study Tips */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Study Tips</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>• Start with basic definitions</p>
                                <p>• Practice with simple examples</p>
                                <p>• Connect theory to real applications</p>
                                <p>• Use simulation tools to visualize</p>
                                <p>• Build simple experimental circuits</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
