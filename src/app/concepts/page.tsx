import { Lightbulb, Zap, Atom, Calculator, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ConceptsPage() {
    const concepts = [
        {
            id: "electric-charge",
            name: "Electric Charge",
            description: "The fundamental property of matter that causes electrical phenomena",
            category: "Fundamental Concepts",
            icon: <Atom className="h-6 w-6" />,
            difficulty: "Beginner",
            keyPoints: ["Positive and negative charges", "Coulomb's Law", "Conservation of charge"],
            applications: ["Static electricity", "Capacitor operation", "Ion flow in solutions"]
        },
        {
            id: "electric-current",
            name: "Electric Current",
            description: "The flow of electric charge through a conductor",
            category: "Fundamental Concepts",
            icon: <Atom className="h-6 w-6" />,
            difficulty: "Beginner",
            keyPoints: ["Conventional vs electron flow", "DC and AC current", "Current density"],
            applications: ["Circuit analysis", "Motor operation", "Electronic devices"]
        },
        {
            id: "voltage",
            name: "Voltage (Potential Difference)",
            description: "The electrical potential energy difference per unit charge",
            category: "Fundamental Concepts",
            icon: <Atom className="h-6 w-6" />,
            difficulty: "Beginner",
            keyPoints: ["Work done per charge", "EMF sources", "Ground reference"],
            applications: ["Battery operation", "Power transmission", "Signal processing"]
        },
        {
            id: "resistance",
            name: "Resistance",
            description: "Opposition to the flow of electric current",
            category: "Fundamental Concepts",
            icon: <Atom className="h-6 w-6" />,
            difficulty: "Beginner",
            keyPoints: ["Ohm's Law", "Material resistivity", "Temperature effects"],
            applications: ["Current limiting", "Voltage division", "Heating elements"]
        },
        {
            id: "electrical-power",
            name: "Electrical Power",
            description: "Rate of energy conversion or consumption",
            category: "Energy and Power",
            icon: <Zap className="h-6 w-6" />,
            difficulty: "Intermediate",
            keyPoints: ["Power formulas", "Efficiency concepts", "Power factor"],
            applications: ["Power rating", "Energy billing", "Motor sizing"]
        },
        {
            id: "energy-storage",
            name: "Energy Storage",
            description: "Storing electrical energy in electric and magnetic fields",
            category: "Energy and Power",
            icon: <Zap className="h-6 w-6" />,
            difficulty: "Intermediate",
            keyPoints: ["Capacitor energy", "Inductor energy", "Energy density"],
            applications: ["Power supplies", "Pulse circuits", "Energy harvesting"]
        },
        {
            id: "ac-waveforms",
            name: "AC Waveforms",
            description: "Mathematical representation of alternating current signals",
            category: "AC Circuit Analysis",
            icon: <Waves className="h-6 w-6" />,
            difficulty: "Intermediate",
            keyPoints: ["Sinusoidal functions", "RMS values", "Phase relationships"],
            applications: ["Power systems", "Signal processing", "Audio systems"]
        },
        {
            id: "impedance",
            name: "Impedance",
            description: "Opposition to alternating current in complex circuits",
            category: "AC Circuit Analysis",
            icon: <Waves className="h-6 w-6" />,
            difficulty: "Advanced",
            keyPoints: ["Complex numbers", "Reactance", "Phasor analysis"],
            applications: ["Filter design", "Matching networks", "Transmission lines"]
        },
        {
            id: "resonance",
            name: "Resonance",
            description: "Frequency-dependent behavior in LC circuits",
            category: "AC Circuit Analysis",
            icon: <Waves className="h-6 w-6" />,
            difficulty: "Advanced",
            keyPoints: ["Natural frequency", "Quality factor", "Bandwidth"],
            applications: ["Tuned circuits", "Filters", "Oscillators"]
        },
        {
            id: "electromagnetic-fields",
            name: "Electromagnetic Fields",
            description: "Electric and magnetic field interactions",
            category: "Advanced Concepts",
            icon: <Calculator className="h-6 w-6" />,
            difficulty: "Advanced",
            keyPoints: ["Maxwell's equations", "Wave propagation", "Field coupling"],
            applications: ["Antenna design", "EMI analysis", "Transformer operation"]
        },
        {
            id: "semiconductor-physics",
            name: "Semiconductor Physics",
            description: "Behavior of electrons and holes in semiconductor materials",
            category: "Advanced Concepts",
            icon: <Calculator className="h-6 w-6" />,
            difficulty: "Advanced",
            keyPoints: ["PN junctions", "Doping", "Band theory"],
            applications: ["Diode operation", "Transistor function", "Solar cells"]
        },
        {
            id: "feedback-systems",
            name: "Feedback Systems",
            description: "Control systems using output to modify input",
            category: "Advanced Concepts",
            icon: <Calculator className="h-6 w-6" />,
            difficulty: "Advanced",
            keyPoints: ["Negative feedback", "Stability", "Transfer functions"],
            applications: ["Voltage regulators", "Amplifier design", "Control systems"]
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
                        <Lightbulb className="h-8 w-8 text-primary" />
                    </div>
                </div>
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                    Concepts
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Master the fundamental principles that govern electronic circuits and systems.
                    Click on any concept to dive deeper into the theory and applications.
                </p>
            </div>

            {/* Concepts Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
                {concepts.map((concept) => (
                    <Link
                        key={concept.id}
                        href={`/concepts/${concept.id}`}
                        className="group block"
                    >
                        <Card className="h-full hover:shadow-lg transition-shadow duration-200 cursor-pointer border-2 group-hover:border-primary/50">
                            <CardHeader className="pb-4">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="rounded-full bg-primary/10 p-2 group-hover:bg-primary/20 transition-colors">
                                            {concept.icon}
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            {concept.category}
                                        </div>
                                    </div>
                                    <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(concept.difficulty)}`}>
                                        {concept.difficulty}
                                    </span>
                                </div>
                                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                    {concept.name}
                                </CardTitle>
                                <CardDescription className="text-sm">
                                    {concept.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <div className="space-y-3">
                                    <div>
                                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Key Points</h4>
                                        <div className="space-y-1">
                                            {concept.keyPoints.slice(0, 2).map((point, index) => (
                                                <p key={index} className="text-xs text-muted-foreground">
                                                    • {point}
                                                </p>
                                            ))}
                                            {concept.keyPoints.length > 2 && (
                                                <p className="text-xs text-muted-foreground">
                                                    +{concept.keyPoints.length - 2} more points
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Applications</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {concept.applications.slice(0, 2).map((app, index) => (
                                                <span
                                                    key={index}
                                                    className="text-xs bg-muted px-2 py-1 rounded"
                                                >
                                                    {app}
                                                </span>
                                            ))}
                                            {concept.applications.length > 2 && (
                                                <span className="text-xs text-muted-foreground">
                                                    +{concept.applications.length - 2} more
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

            {/* Learning Path */}
            <div className="bg-muted/30 rounded-lg p-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Recommended Learning Path</h2>
                    <p className="text-muted-foreground">
                        Build your understanding progressively with these concept categories
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="bg-card rounded-lg p-4 border">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="rounded-full bg-green-100 text-green-800 px-2 py-1 text-xs font-medium">1</div>
                            <h3 className="font-semibold">Fundamentals</h3>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Electric charge</li>
                            <li>• Current and voltage</li>
                            <li>• Resistance and Ohm&apos;s law</li>
                            <li>• Basic circuit laws</li>
                        </ul>
                    </div>

                    <div className="bg-card rounded-lg p-4 border">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="rounded-full bg-yellow-100 text-yellow-800 px-2 py-1 text-xs font-medium">2</div>
                            <h3 className="font-semibold">Energy & Power</h3>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Electrical power</li>
                            <li>• Energy storage</li>
                            <li>• Efficiency concepts</li>
                            <li>• Power calculations</li>
                        </ul>
                    </div>

                    <div className="bg-card rounded-lg p-4 border">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="rounded-full bg-blue-100 text-blue-800 px-2 py-1 text-xs font-medium">3</div>
                            <h3 className="font-semibold">AC Analysis</h3>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Sinusoidal waveforms</li>
                            <li>• Phasor analysis</li>
                            <li>• Impedance concepts</li>
                            <li>• Resonance phenomena</li>
                        </ul>
                    </div>

                    <div className="bg-card rounded-lg p-4 border">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="rounded-full bg-red-100 text-red-800 px-2 py-1 text-xs font-medium">4</div>
                            <h3 className="font-semibold">Advanced Topics</h3>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Electromagnetic fields</li>
                            <li>• Semiconductor physics</li>
                            <li>• Feedback systems</li>
                            <li>• Advanced analysis</li>
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
                    <Link href="/circuits">
                        ← View Circuits
                    </Link>
                </Button>
            </div>
        </div>
    );
}
