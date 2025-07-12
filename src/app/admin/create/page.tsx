"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Save, Upload, Eye, FileText, ImageIcon, Link2 } from "lucide-react"

export default function CreateItemPage() {
    const [itemType, setItemType] = useState("component")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [specifications, setSpecifications] = useState("")
    const [applications, setApplications] = useState("")
    const [tags, setTags] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [schematicUrl, setSchematicUrl] = useState("")
    const [dataSheetUrl, setDataSheetUrl] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Demo: Just log the form data
        console.log("Creating new item:", {
            type: itemType,
            title,
            description,
            category,
            specifications,
            applications,
            tags,
            imageUrl,
            schematicUrl,
            dataSheetUrl
        })
        alert("Item created successfully! (Demo)")
    }

    return (
        <div className="container mx-auto p-6 max-w-4xl">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin">
                    <Button variant="ghost" size="sm">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Admin
                    </Button>
                </Link>
                <div>
                    <h1 className="text-3xl font-bold">Create New Item</h1>
                    <p className="text-muted-foreground">
                        Add a new component, circuit, or concept to your knowledge base
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Item Type Selection */}
                <Card>
                    <CardHeader>
                        <CardTitle>Item Type</CardTitle>
                        <CardDescription>
                            Select the type of item you want to create
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-4">
                            <div
                                className={`flex-1 p-4 border rounded-lg cursor-pointer transition-colors ${itemType === "component"
                                        ? "border-primary bg-primary/5"
                                        : "border-border hover:border-primary/50"
                                    }`}
                                onClick={() => setItemType("component")}
                            >
                                <div className="text-center">
                                    <div className="w-8 h-8 mx-auto mb-2 bg-primary/10 rounded-full flex items-center justify-center">
                                        <span className="text-primary">🔧</span>
                                    </div>
                                    <h3 className="font-semibold">Component</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Electronic components and parts
                                    </p>
                                </div>
                            </div>

                            <div
                                className={`flex-1 p-4 border rounded-lg cursor-pointer transition-colors ${itemType === "circuit"
                                        ? "border-primary bg-primary/5"
                                        : "border-border hover:border-primary/50"
                                    }`}
                                onClick={() => setItemType("circuit")}
                            >
                                <div className="text-center">
                                    <div className="w-8 h-8 mx-auto mb-2 bg-primary/10 rounded-full flex items-center justify-center">
                                        <span className="text-primary">⚡</span>
                                    </div>
                                    <h3 className="font-semibold">Circuit</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Circuit designs and schematics
                                    </p>
                                </div>
                            </div>

                            <div
                                className={`flex-1 p-4 border rounded-lg cursor-pointer transition-colors ${itemType === "concept"
                                        ? "border-primary bg-primary/5"
                                        : "border-border hover:border-primary/50"
                                    }`}
                                onClick={() => setItemType("concept")}
                            >
                                <div className="text-center">
                                    <div className="w-8 h-8 mx-auto mb-2 bg-primary/10 rounded-full flex items-center justify-center">
                                        <span className="text-primary">🧠</span>
                                    </div>
                                    <h3 className="font-semibold">Concept</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Theoretical concepts and principles
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Basic Information */}
                <Card>
                    <CardHeader>
                        <CardTitle>Basic Information</CardTitle>
                        <CardDescription>
                            Provide the essential details about your {itemType}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div>
                                <Label htmlFor="title">Title *</Label>
                                <Input
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder={`Enter ${itemType} title`}
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="category">Category</Label>
                                <Input
                                    id="category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    placeholder={
                                        itemType === "component" ? "e.g., Analog IC, Passive" :
                                            itemType === "circuit" ? "e.g., Amplifier, Filter" :
                                                "e.g., Basic Theory, Advanced"
                                    }
                                />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="description">Description *</Label>
                            <Textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder={`Describe the ${itemType} in detail...`}
                                rows={4}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="tags">Tags</Label>
                            <Input
                                id="tags"
                                value={tags}
                                onChange={(e) => setTags(e.target.value)}
                                placeholder="electronics, analog, amplifier (comma-separated)"
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Technical Details */}
                <Card>
                    <CardHeader>
                        <CardTitle>Technical Details</CardTitle>
                        <CardDescription>
                            Add technical specifications and applications
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="specifications">
                                {itemType === "component" ? "Specifications" :
                                    itemType === "circuit" ? "Circuit Parameters" :
                                        "Key Points"}
                            </Label>
                            <Textarea
                                id="specifications"
                                value={specifications}
                                onChange={(e) => setSpecifications(e.target.value)}
                                placeholder={
                                    itemType === "component" ? "Voltage range, current rating, package type, etc." :
                                        itemType === "circuit" ? "Input/output voltages, frequency response, gain, etc." :
                                            "Important concepts, formulas, relationships, etc."
                                }
                                rows={3}
                            />
                        </div>

                        <div>
                            <Label htmlFor="applications">
                                {itemType === "component" ? "Applications" :
                                    itemType === "circuit" ? "Use Cases" :
                                        "Applications"}
                            </Label>
                            <Textarea
                                id="applications"
                                value={applications}
                                onChange={(e) => setApplications(e.target.value)}
                                placeholder={
                                    itemType === "component" ? "Where and how this component is typically used..." :
                                        itemType === "circuit" ? "Common applications and use cases..." :
                                            "Real-world applications of this concept..."
                                }
                                rows={3}
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Media and Resources */}
                <Card>
                    <CardHeader>
                        <CardTitle>Media & Resources</CardTitle>
                        <CardDescription>
                            Add images, schematics, and reference materials
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="imageUrl">Image URL</Label>
                            <div className="flex gap-2">
                                <Input
                                    id="imageUrl"
                                    value={imageUrl}
                                    onChange={(e) => setImageUrl(e.target.value)}
                                    placeholder="https://example.com/image.jpg"
                                />
                                <Button type="button" variant="outline" size="sm">
                                    <Upload className="w-4 h-4 mr-2" />
                                    Upload
                                </Button>
                            </div>
                        </div>

                        {itemType === "circuit" && (
                            <div>
                                <Label htmlFor="schematicUrl">Schematic URL</Label>
                                <div className="flex gap-2">
                                    <Input
                                        id="schematicUrl"
                                        value={schematicUrl}
                                        onChange={(e) => setSchematicUrl(e.target.value)}
                                        placeholder="https://example.com/schematic.png"
                                    />
                                    <Button type="button" variant="outline" size="sm">
                                        <Upload className="w-4 h-4 mr-2" />
                                        Upload
                                    </Button>
                                </div>
                            </div>
                        )}

                        <div>
                            <Label htmlFor="dataSheetUrl">
                                {itemType === "component" ? "Datasheet URL" :
                                    itemType === "circuit" ? "Reference Document URL" :
                                        "Reference Material URL"}
                            </Label>
                            <div className="flex gap-2">
                                <Input
                                    id="dataSheetUrl"
                                    value={dataSheetUrl}
                                    onChange={(e) => setDataSheetUrl(e.target.value)}
                                    placeholder="https://example.com/datasheet.pdf"
                                />
                                <Button type="button" variant="outline" size="sm">
                                    <Link2 className="w-4 h-4 mr-2" />
                                    Link
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Preview Card */}
                <Card>
                    <CardHeader>
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>
                            This is how your {itemType} will appear in the knowledge base
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="border rounded-lg p-4 bg-muted/30">
                            <div className="flex items-start gap-4">
                                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                                    {imageUrl ? (
                                        <ImageIcon className="w-8 h-8 text-primary" />
                                    ) : (
                                        <span className="text-2xl">
                                            {itemType === "component" ? "🔧" :
                                                itemType === "circuit" ? "⚡" : "🧠"}
                                        </span>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg">
                                        {title || `Sample ${itemType.charAt(0).toUpperCase() + itemType.slice(1)}`}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        {category || "Category"} • {itemType}
                                    </p>
                                    <p className="text-sm mb-2">
                                        {description || `This is a sample ${itemType} description that will appear in the knowledge base.`}
                                    </p>
                                    <div className="flex gap-2">
                                        {tags.split(",").filter(tag => tag.trim()).map((tag, index) => (
                                            <span key={index} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                                                {tag.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Form Actions */}
                <div className="flex justify-end gap-4">
                    <Button type="button" variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                    </Button>
                    <Button type="button" variant="outline">
                        <FileText className="w-4 h-4 mr-2" />
                        Save as Draft
                    </Button>
                    <Button type="submit">
                        <Save className="w-4 h-4 mr-2" />
                        Create {itemType.charAt(0).toUpperCase() + itemType.slice(1)}
                    </Button>
                </div>
            </form>
        </div>
    )
}
