import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Bath, Beaker, Droplets, Package } from 'lucide-react';

// SAP Values for oils
const SAP_VALUES = {
  olive: 0.134,
  coconut: 0.191,
  almond: 0.136,
  palm: 0.141,
  avocado: 0.133,
  shea: 0.128
};

// Predefined soap recipes
const SOAP_RECIPES = {
  basic: {
    name: "Basic Soap (All Skin Types)",
    description: "Perfect for daily use on all skin types",
    oils: { olive: 117.5, almond: 47.15, palm: 93.9, coconut: 117.75 },
    essentialOil: "8-15ml"
  },
  castile: {
    name: "Castile Soap (Dry Skin)",
    description: "Gentle and moisturizing for dry skin",
    oils: { olive: 443.6, palm: 147.9, coconut: 147.9 },
    essentialOil: "15ml"
  },
  shea: {
    name: "Shea Butter Soap (Sensitive/Babies)",
    description: "Ultra-gentle for sensitive skin and babies",
    oils: { olive: 141.75, shea: 90.72, coconut: 141.75, palm: 85.05 },
    essentialOil: "15ml"
  },
  avocado: {
    name: "Avocado Soap",
    description: "Nourishing and hydrating",
    oils: { olive: 311.85, avocado: 141.75 },
    essentialOil: "15ml"
  },
  almond: {
    name: "Almond Soap",
    description: "Softening and conditioning",
    oils: { palm: 340.28, almond: 113.4 },
    essentialOil: "8-15ml"
  }
};

const Index = () => {
  const [batchSize, setBatchSize] = useState([500]);
  const [oils, setOils] = useState({
    olive: 0,
    coconut: 0,
    almond: 0,
    palm: 0,
    avocado: 0,
    shea: 0
  });
  const [results, setResults] = useState({ lye: 0, water: 0, totalOils: 0 });

  // Calculate lye and water requirements
  const calculateSoap = () => {
    const totalOilWeight = Object.values(oils).reduce((sum, weight) => sum + weight, 0);
    
    let totalLye = 0;
    Object.entries(oils).forEach(([oil, weight]) => {
      totalLye += weight * SAP_VALUES[oil as keyof typeof SAP_VALUES];
    });
    
    const water = (6 / 16) * totalOilWeight;
    
    setResults({
      lye: Math.round(totalLye * 100) / 100,
      water: Math.round(water * 100) / 100,
      totalOils: Math.round(totalOilWeight * 100) / 100
    });
  };

  // Load predefined recipe
  const loadRecipe = (recipeKey: string) => {
    const recipe = SOAP_RECIPES[recipeKey as keyof typeof SOAP_RECIPES];
    const scaleFactor = batchSize[0] / Object.values(recipe.oils).reduce((sum, weight) => sum + weight, 0);
    
    const scaledOils = Object.entries(recipe.oils).reduce((acc, [oil, weight]) => {
      acc[oil as keyof typeof oils] = Math.round(weight * scaleFactor * 100) / 100;
      return acc;
    }, {} as typeof oils);
    
    setOils({ ...oils, ...scaledOils });
  };

  // Update oil quantity
  const updateOil = (oil: keyof typeof oils, value: string) => {
    const numValue = parseFloat(value) || 0;
    setOils(prev => ({ ...prev, [oil]: numValue }));
  };

  // Auto-calculate when oils change
  useEffect(() => {
    calculateSoap();
  }, [oils]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Bath size={48} className="text-green-100" />
            <h1 className="text-5xl font-bold">Aura Sudhi</h1>
          </div>
          <p className="text-xl text-green-100">Cleansing the Body's Subtle Energy Field</p>
          <p className="text-lg text-green-200 mt-2">Cold Process Soap Recipe Generator</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="calculator" className="flex items-center gap-2">
              <Beaker size={20} />
              Calculator
            </TabsTrigger>
            <TabsTrigger value="recipes" className="flex items-center gap-2">
              <Bath size={20} />
              Recipes
            </TabsTrigger>
            <TabsTrigger value="guide" className="flex items-center gap-2">
              <Droplets size={20} />
              Safety Guide
            </TabsTrigger>
          </TabsList>

          <TabsContent value="calculator">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Batch Size & Oil Inputs */}
              <div className="lg:col-span-2 space-y-6">
                {/* Batch Size */}
                <Card className="bg-white/70 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package size={24} className="text-green-600" />
                      Batch Size: {batchSize[0]}g
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Slider
                      value={batchSize}
                      onValueChange={setBatchSize}
                      max={5000}
                      min={100}
                      step={50}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>100g</span>
                      <span>5000g</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Oil Inputs */}
                <Card className="bg-white/70 backdrop-blur">
                  <CardHeader>
                    <CardTitle>Oil Quantities (grams)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {Object.entries(oils).map(([oil, weight]) => (
                        <div key={oil} className="space-y-2">
                          <Label htmlFor={oil} className="capitalize font-medium">
                            {oil === 'shea' ? 'Shea Butter' : `${oil} Oil`}
                            <Badge variant="outline" className="ml-2 text-xs">
                              SAP: {SAP_VALUES[oil as keyof typeof SAP_VALUES]}
                            </Badge>
                          </Label>
                          <Input
                            id={oil}
                            type="number"
                            placeholder="0"
                            value={weight || ''}
                            onChange={(e) => updateOil(oil as keyof typeof oils, e.target.value)}
                            className="bg-white"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-green-100 to-teal-100 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-green-800">Lye & Water Calculator</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center p-4 bg-white/50 rounded-lg">
                      <div className="text-2xl font-bold text-green-700">{results.totalOils}g</div>
                      <div className="text-sm text-green-600">Total Oils</div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-200">
                        <span className="font-medium text-red-800">Lye (NaOH)</span>
                        <span className="text-xl font-bold text-red-700">{results.lye}g</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <span className="font-medium text-blue-800">Water</span>
                        <span className="text-xl font-bold text-blue-700">{results.water}g</span>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <p className="text-xs text-yellow-800 font-medium">
                        ⚠️ Safety First: Always add lye to water, never water to lye!
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Formula Reference */}
                <Card className="bg-white/70 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-sm">Formula Reference</CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs space-y-2">
                    <div>Lye = Oil Weight × SAP Value</div>
                    <div>Water = (6/16) × Total Oil Weight</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="recipes">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(SOAP_RECIPES).map(([key, recipe]) => (
                <Card key={key} className="bg-white/70 backdrop-blur hover:bg-white/90 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg">{recipe.name}</CardTitle>
                    <p className="text-sm text-gray-600">{recipe.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Oil Composition:</h4>
                      {Object.entries(recipe.oils).map(([oil, weight]) => (
                        <div key={oil} className="flex justify-between text-sm">
                          <span className="capitalize">{oil === 'shea' ? 'Shea Butter' : `${oil} Oil`}</span>
                          <span>{weight}g</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-sm">
                      <strong>Essential Oil:</strong> {recipe.essentialOil}
                    </div>
                    <Button 
                      onClick={() => loadRecipe(key)}
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      Load Recipe
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="guide">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-white/70 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-red-600">Safety Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Essential Safety Rules:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Always wear safety goggles and gloves</li>
                      <li>• Work in a well-ventilated area</li>
                      <li>• Always add lye to water, NEVER water to lye</li>
                      <li>• Use stainless steel or heat-resistant plastic</li>
                      <li>• Keep vinegar nearby for spills</li>
                      <li>• Never leave lye solution unattended</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-green-600">Process Steps</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Cold Process Method:</h4>
                    <ol className="space-y-1 text-sm">
                      <li>1. Measure and melt solid oils</li>
                      <li>2. Prepare lye solution (add lye to water)</li>
                      <li>3. Cool both to 100-110°F (38-43°C)</li>
                      <li>4. Slowly add lye solution to oils</li>
                      <li>5. Blend to trace</li>
                      <li>6. Add essential oils and colors</li>
                      <li>7. Pour into molds</li>
                      <li>8. Cure for 4-6 weeks</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
