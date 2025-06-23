import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Bath, Beaker, Droplets, Package, Flower, Moon, Sun, Heart, Star, Leaf, Users, Clock } from 'lucide-react';

// SAP Values for oils with sacred properties
const SAP_VALUES = {
  olive: 0.134,
  coconut: 0.191,
  almond: 0.136,
  palm: 0.141,
  avocado: 0.133,
  shea: 0.128,
  sesame: 0.133,
  neem: 0.139
};

// Sacred Ayurvedic soap recipes with spiritual significance
const SACRED_RECIPES = {
  sunrise: {
    name: "Surya Namaskara (Sun Salutation)",
    description: "Morning purification blend for awakening the solar plexus chakra",
    meditation: "Chant 'Om Surya Namaha' 108 times while mixing",
    oils: { olive: 200, coconut: 150, sesame: 100, almond: 50 },
    herbs: "Turmeric powder, Orange peel, Calendula",
    essentialOil: "15ml Orange & Frankincense",
    chakra: "Manipura (Solar Plexus)",
    element: "Fire (Agni)",
    process: "Begin at sunrise, face east while preparing"
  },
  moonlight: {
    name: "Chandra Shanti (Moon Peace)",
    description: "Evening cleansing for calming Vata dosha and promoting sleep",
    meditation: "Practice Chandra Bhedana pranayama during preparation",
    oils: { olive: 250, shea: 150, avocado: 100 },
    herbs: "Lavender buds, Chamomile, Rose petals",
    essentialOil: "15ml Lavender & Sandalwood",
    chakra: "Sahasrara (Crown)",
    element: "Water (Jal)",
    process: "Prepare during full moon for enhanced potency"
  },
  lotus: {
    name: "Padma Sudhi (Lotus Purification)",
    description: "Sacred temple soap for spiritual cleansing and heart opening",
    meditation: "Visualize thousand-petaled lotus blooming in your heart",
    oils: { olive: 180, coconut: 120, almond: 100, sesame: 100 },
    herbs: "Lotus petals, Rose powder, Sacred Basil",
    essentialOil: "15ml Rose & Lotus absolute",
    chakra: "Anahata (Heart)",
    element: "Air (Vayu)",
    process: "Infuse oils with mantras for 24 hours before use"
  },
  neem: {
    name: "Neem Raksha (Divine Protection)",
    description: "Protective soap blessed with neem's purifying energy",
    meditation: "Recite Mahamrityunjaya mantra during preparation",
    oils: { olive: 200, coconut: 150, neem: 100, palm: 50 },
    herbs: "Neem leaves powder, Tulsi, Multani mitti",
    essentialOil: "10ml Tea tree & Eucalyptus",
    chakra: "Muladhara (Root)",
    element: "Earth (Prithvi)",
    process: "Prepare during Ekadashi for spiritual protection"
  },
  sandalwood: {
    name: "Chandan Moksha (Sandalwood Liberation)",
    description: "Premium ceremonial soap for meditation and spiritual practices",
    meditation: "Enter deep samadhi state while crafting",
    oils: { olive: 300, coconut: 100, almond: 100 },
    herbs: "Sandalwood powder, Saffron, Rose",
    essentialOil: "20ml Pure Sandalwood oil",
    chakra: "Ajna (Third Eye)",
    element: "Ether (Akasha)",
    process: "Consecrate with sacred fire ceremony"
  }
};

// Meditation practices for soap making
const MEDITATION_PRACTICES = {
  preparation: "Begin with 5 minutes of pranayama breathing to center your energy",
  mixing: "Maintain mindful awareness while stirring, infusing love and healing intention",
  molding: "Visualize golden light emanating from your hands into the soap",
  curing: "Place crystals around curing soaps and chant healing mantras daily"
};

const Index = () => {
  const [batchSize, setBatchSize] = useState([500]);
  const [oils, setOils] = useState({
    olive: 0,
    coconut: 0,
    almond: 0,
    palm: 0,
    avocado: 0,
    shea: 0,
    sesame: 0,
    neem: 0
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

  // Load sacred recipe
  const loadSacredRecipe = (recipeKey: string) => {
    const recipe = SACRED_RECIPES[recipeKey as keyof typeof SACRED_RECIPES];
    const recipeTotal = Object.values(recipe.oils).reduce((sum, weight) => sum + weight, 0);
    const scaleFactor = batchSize[0] / recipeTotal;
    
    // Reset all oils to 0 first
    const resetOils = {
      olive: 0,
      coconut: 0,
      almond: 0,
      palm: 0,
      avocado: 0,
      shea: 0,
      sesame: 0,
      neem: 0
    };
    
    // Then apply the recipe oils with scaling
    const scaledOils = Object.entries(recipe.oils).reduce((acc, [oil, weight]) => {
      acc[oil as keyof typeof oils] = Math.round(weight * scaleFactor * 100) / 100;
      return acc;
    }, resetOils);
    
    setOils(scaledOils);
  };

  // Update oil quantity
  const updateOil = (oil: keyof typeof oils, value: string) => {
    const numValue = parseFloat(value) || 0;
    setOils(prev => ({ ...prev, [oil]: numValue }));
  };

  // Auto-calculate when oils or batch size change
  useEffect(() => {
    calculateSoap();
  }, [oils, batchSize]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-purple-50">
      {/* Sacred Header */}
      <div className="bg-gradient-to-r from-orange-600 via-red-500 to-purple-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Flower size={56} className="text-orange-100 animate-pulse" />
            <h1 className="text-6xl font-bold tracking-wide">Aura Sudhi</h1>
            <Flower size={56} className="text-orange-100 animate-pulse" />
          </div>
          <p className="text-2xl text-orange-100 mb-2">आत्मा शुद्धि - Cleansing the Soul's Energy Field</p>
          <p className="text-lg text-orange-200">Sacred Ayurvedic Soap Alchemy for Yogis</p>
          <div className="mt-4 flex items-center justify-center gap-8 text-orange-200">
            <div className="flex items-center gap-2">
              <Sun size={20} />
              <span>Solar Energy</span>
            </div>
            <div className="flex items-center gap-2">
              <Moon size={20} />
              <span>Lunar Blessings</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart size={20} />
              <span>Divine Love</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sacred Gallery Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-900 mb-4">Sacred Soap Making Journey</h2>
          <p className="text-lg text-orange-700 max-w-3xl mx-auto">
            Experience the divine art of Ayurvedic soap crafting through ancient wisdom and modern mindfulness
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/80 backdrop-blur border-orange-200 overflow-hidden">
            <div className="h-64 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1523712999610-f77fbcfc3843)'}}>
              <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Sacred Forest Ingredients</h3>
                  <p className="text-sm opacity-90">Harvested with reverence from nature's temple</p>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur border-orange-200 overflow-hidden">
            <div className="h-64 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1500375592092-40eb2168fd21)'}}>
              <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Ocean's Purifying Energy</h3>
                  <p className="text-sm opacity-90">Infused with the cleansing power of water element</p>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur border-orange-200 overflow-hidden">
            <div className="h-64 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05)'}}>
              <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Mountain Meditation</h3>
                  <p className="text-sm opacity-90">Crafted in harmony with earth's highest vibrations</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Sacred Process Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-orange-900 text-center mb-12">The Sacred Process</h2>
          <div className="grid lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-orange-200 text-center">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun size={40} className="text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-orange-900 mb-2">1. Dawn Preparation</h3>
                <p className="text-sm text-orange-700">Begin at sunrise with pranayama breathing and intention setting</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-green-200 text-center">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf size={40} className="text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-green-900 mb-2">2. Sacred Mixing</h3>
                <p className="text-sm text-green-700">Blend oils with mindful awareness and healing mantras</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 text-center">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart size={40} className="text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-purple-900 mb-2">3. Love Infusion</h3>
                <p className="text-sm text-purple-700">Pour divine love energy into every molecular bond</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 text-center">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Moon size={40} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">4. Lunar Curing</h3>
                <p className="text-sm text-blue-700">Allow 28 days of moon cycles for perfect saponification</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Featured Sacred Ingredients */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-orange-900 text-center mb-12">Sacred Ingredients from Mother Earth</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/80 backdrop-blur border-orange-200 overflow-hidden">
              <div className="h-32 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb)'}}>
              </div>
              <CardContent className="p-4">
                <h4 className="font-bold text-orange-900 mb-1">Sacred Olive</h4>
                <p className="text-xs text-orange-700">Ancient wisdom of the Mediterranean</p>
                <Badge variant="outline" className="mt-2 text-xs">Heart Chakra</Badge>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur border-orange-200 overflow-hidden">
              <div className="h-32 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1501854140801-50d01698950b)'}}>
              </div>
              <CardContent className="p-4">
                <h4 className="font-bold text-orange-900 mb-1">Himalayan Herbs</h4>
                <p className="text-xs text-orange-700">Blessed by mountain spirits</p>
                <Badge variant="outline" className="mt-2 text-xs">Crown Chakra</Badge>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur border-orange-200 overflow-hidden">
              <div className="h-32 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1500673922987-e212871fec22)'}}>
              </div>
              <CardContent className="p-4">
                <h4 className="font-bold text-orange-900 mb-1">Sacred Neem</h4>
                <p className="text-xs text-orange-700">Divine protection and purification</p>
                <Badge variant="outline" className="mt-2 text-xs">Root Chakra</Badge>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur border-orange-200 overflow-hidden">
              <div className="h-32 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1615729947596-a598e5de0ab3)'}}>
              </div>
              <CardContent className="p-4">
                <h4 className="font-bold text-orange-900 mb-1">Lotus Essence</h4>
                <p className="text-xs text-orange-700">Symbol of spiritual awakening</p>
                <Badge variant="outline" className="mt-2 text-xs">Thousand Petals</Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials from Yogis */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-orange-900 text-center mb-12">Voices from Our Sacred Community</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-cover bg-center rounded-full border-2 border-purple-200" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158)'}}>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-purple-900">Priya Sharma</h4>
                    <p className="text-sm text-purple-700">Kundalini Yoga Teacher</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-purple-800 italic">
                  "These sacred soaps have transformed my daily cleansing ritual into a beautiful meditation. The energy is palpable!"
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-cover bg-center rounded-full border-2 border-orange-200" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1649972904349-6e44c42644a7)'}}>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-orange-900">Swami Ananda</h4>
                    <p className="text-sm text-orange-700">Ashram Director</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-orange-800 italic">
                  "Our entire ashram community uses these blessed soaps. They align perfectly with our Ayurvedic principles."
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-cover bg-center rounded-full border-2 border-green-200" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1518770660439-4636190af475)'}}>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-green-900">Maya Devi</h4>
                    <p className="text-sm text-green-700">Ayurveda Practitioner</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-green-800 italic">
                  "The ancient recipes and meditation practices create soaps that heal not just the body, but the spirit too."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Community Stats */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-orange-600 to-purple-600 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <CardContent className="p-8 relative z-10">
              <h2 className="text-3xl font-bold text-center mb-8">Our Sacred Community</h2>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">108+</div>
                  <div className="text-orange-100">Sacred Recipes</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">5000+</div>
                  <div className="text-orange-100">Yogi Community</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">28</div>
                  <div className="text-orange-100">Days Curing Cycle</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">7</div>
                  <div className="text-orange-100">Chakra Alignments</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="sacred-recipes" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="sacred-recipes" className="flex items-center gap-2">
              <Flower size={20} />
              Sacred Recipes
            </TabsTrigger>
            <TabsTrigger value="calculator" className="flex items-center gap-2">
              <Beaker size={20} />
              Calculator
            </TabsTrigger>
            <TabsTrigger value="meditation" className="flex items-center gap-2">
              <Heart size={20} />
              Meditation
            </TabsTrigger>
            <TabsTrigger value="wisdom" className="flex items-center gap-2">
              <Droplets size={20} />
              Ancient Wisdom
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sacred-recipes">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {Object.entries(SACRED_RECIPES).map(([key, recipe]) => (
                <Card key={key} className="bg-gradient-to-br from-white/80 to-orange-50/80 backdrop-blur border-orange-200 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="relative">
                    <div className="absolute top-2 right-2">
                      <Badge variant="outline" className="bg-orange-100 text-orange-800 border-orange-300">
                        {recipe.chakra}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-orange-900">{recipe.name}</CardTitle>
                    <p className="text-sm text-orange-700 italic">{recipe.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-3 rounded-lg border border-orange-200">
                      <h4 className="font-medium text-orange-900 mb-2 flex items-center gap-2">
                        <Flower size={16} />
                        Sacred Oils & Proportions:
                      </h4>
                      {Object.entries(recipe.oils).map(([oil, weight]) => (
                        <div key={oil} className="flex justify-between text-sm text-orange-800">
                          <span className="capitalize">{oil === 'shea' ? 'Shea Butter' : `${oil} Oil`}</span>
                          <span className="font-medium">{weight}g</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div><strong className="text-purple-700">Sacred Herbs:</strong> {recipe.herbs}</div>
                      <div><strong className="text-purple-700">Essential Oils:</strong> {recipe.essentialOil}</div>
                      <div><strong className="text-purple-700">Element:</strong> {recipe.element}</div>
                    </div>

                    <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                      <h5 className="font-medium text-purple-900 mb-1">Meditation Practice:</h5>
                      <p className="text-xs text-purple-800 italic">{recipe.meditation}</p>
                    </div>

                    <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-200">
                      <h5 className="font-medium text-indigo-900 mb-1">Sacred Process:</h5>
                      <p className="text-xs text-indigo-800">{recipe.process}</p>
                    </div>
                    
                    <Button 
                      onClick={() => loadSacredRecipe(key)}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                    >
                      Manifest This Recipe
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="calculator">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Batch Size & Oil Inputs */}
              <div className="lg:col-span-2 space-y-6">
                {/* Batch Size */}
                <Card className="bg-white/70 backdrop-blur border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-900">
                      <Package size={24} className="text-orange-600" />
                      Sacred Batch Size: {batchSize[0]}g
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
                    <div className="flex justify-between text-sm text-orange-600 mt-2">
                      <span>100g</span>
                      <span>5000g</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Sacred Oil Inputs */}
                <Card className="bg-white/70 backdrop-blur border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-900">Sacred Oil Quantities (grams)</CardTitle>
                    <p className="text-sm text-orange-700">Each oil carries unique vibrational properties</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {Object.entries(oils).map(([oil, weight]) => (
                        <div key={oil} className="space-y-2">
                          <Label htmlFor={oil} className="capitalize font-medium text-orange-900">
                            {oil === 'shea' ? 'Shea Butter' : oil === 'neem' ? 'Sacred Neem' : oil === 'sesame' ? 'Til (Sesame)' : `${oil} Oil`}
                            <Badge variant="outline" className="ml-2 text-xs bg-orange-100 border-orange-300">
                              SAP: {SAP_VALUES[oil as keyof typeof SAP_VALUES]}
                            </Badge>
                          </Label>
                          <Input
                            id={oil}
                            type="number"
                            placeholder="0"
                            value={weight || ''}
                            onChange={(e) => updateOil(oil as keyof typeof oils, e.target.value)}
                            className="bg-white border-orange-200 focus:border-orange-400"
                          />
                        </div>
                      ))}
                    </div>
                    
                    {/* Manifest Button */}
                    <div className="mt-6 text-center">
                      <Button 
                        onClick={calculateSoap}
                        className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg font-medium"
                        size="lg"
                      >
                        <Beaker size={20} className="mr-2" />
                        Manifest Sacred Soap
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sacred Results */}
              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-orange-100 to-red-100 border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-900">Sacred Alchemy Calculator</CardTitle>
                    <p className="text-sm text-orange-700">Divine proportions for perfect saponification</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center p-4 bg-white/50 rounded-lg border border-orange-200">
                      <div className="text-2xl font-bold text-orange-700">{results.totalOils}g</div>
                      <div className="text-sm text-orange-600">Total Sacred Oils</div>
                    </div>
                    
                    <Separator className="bg-orange-300" />
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-200">
                        <span className="font-medium text-red-800">Lye (NaOH) - Handle with Reverence</span>
                        <span className="text-xl font-bold text-red-700">{results.lye}g</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <span className="font-medium text-blue-800">Sacred Water</span>
                        <span className="text-xl font-bold text-blue-700">{results.water}g</span>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <p className="text-xs text-yellow-800 font-medium">
                        🙏 Sacred Reminder: Always add lye to water with mindful intention, never reverse!
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Sacred Timing */}
                <Card className="bg-white/70 backdrop-blur border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-sm text-purple-900">Auspicious Timing</CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs space-y-2 text-purple-800">
                    <div>🌅 Dawn: Solar-charged soaps (5-7 AM)</div>
                    <div>🌙 Dusk: Lunar-blessed soaps (6-8 PM)</div>
                    <div>🌕 Full Moon: Maximum potency</div>
                    <div>🆕 New Moon: New beginnings</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="meditation">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-900 flex items-center gap-2">
                    <Heart size={24} />
                    Sacred Soap-Making Meditation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-purple-800">
                  <div className="space-y-3">
                    <h4 className="font-medium">1. Preparation Phase (5 minutes)</h4>
                    <p className="text-sm pl-4">{MEDITATION_PRACTICES.preparation}</p>
                    
                    <h4 className="font-medium">2. Oil Blessing Ritual</h4>
                    <p className="text-sm pl-4">Hold each oil container, visualize golden light entering. Chant: "Om Gam Ganapataye Namaha" for removing obstacles.</p>
                    
                    <h4 className="font-medium">3. Mixing Meditation</h4>
                    <p className="text-sm pl-4">{MEDITATION_PRACTICES.mixing}</p>
                    
                    <h4 className="font-medium">4. Molding Blessing</h4>
                    <p className="text-sm pl-4">{MEDITATION_PRACTICES.molding}</p>
                    
                    <h4 className="font-medium">5. Curing Ceremony</h4>
                    <p className="text-sm pl-4">{MEDITATION_PRACTICES.curing}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-900">Sacred Mantras for Soap Making</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-orange-800">
                  <div className="space-y-3 text-sm">
                    <div className="bg-white/50 p-3 rounded-lg">
                      <h5 className="font-medium">For Purification:</h5>
                      <p className="italic">"Om Pavaka Namaha" (Fire element activation)</p>
                    </div>
                    <div className="bg-white/50 p-3 rounded-lg">
                      <h5 className="font-medium">For Healing Properties:</h5>
                      <p className="italic">"Om Tryambakam Yajamahe" (Mahamrityunjaya)</p>
                    </div>
                    <div className="bg-white/50 p-3 rounded-lg">
                      <h5 className="font-medium">For Love & Compassion:</h5>
                      <p className="italic">"Om Mani Padme Hum" (Lotus of compassion)</p>
                    </div>
                    <div className="bg-white/50 p-3 rounded-lg">
                      <h5 className="font-medium">For Protection:</h5>
                      <p className="italic">"Om Gam Ganapataye Namaha" (Ganesha protection)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="wisdom">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900">Ancient Ayurvedic Wisdom</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-amber-800">
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-medium mb-2">📜 From Charaka Samhita:</h4>
                      <p className="italic pl-4">"The body temple must be cleansed with substances that harmonize the three doshas - Vata, Pitta, and Kapha."</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">🕉️ Vedic Cleansing Principles:</h4>
                      <ul className="pl-4 space-y-1">
                        <li>• Coconut oil balances Pitta (fire element)</li>
                        <li>• Sesame oil grounds Vata (air element)</li>
                        <li>• Olive oil nurtures Kapha (earth element)</li>
                        <li>• Neem provides divine protection</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">⚖️ Sacred Proportions:</h4>
                      <p className="pl-4">Ancient texts speak of balancing elements in ratios that mirror cosmic harmony - 3:2:1 representing Sat-Chit-Ananda.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-900">Sacred Safety & Ethics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-green-800">
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-medium mb-2">🙏 Ahimsa (Non-Violence) Guidelines:</h4>
                      <ul className="pl-4 space-y-1">
                        <li>• Use only cruelty-free, ethically sourced oils</li>
                        <li>• Handle lye with respect and caution</li>
                        <li>• Work in harmony with natural cycles</li>
                        <li>• Offer gratitude to plant spirits</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">🛡️ Protective Practices:</h4>
                      <ul className="pl-4 space-y-1">
                        <li>• Always wear protective gear as spiritual armor</li>
                        <li>• Work in well-ventilated sacred space</li>
                        <li>• Keep emergency vinegar for karmic cleansing</li>
                        <li>• Never rush the divine process</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">🌿 Sustainable Dharma:</h4>
                      <p className="pl-4">Source ingredients mindfully, considering the impact on Mother Earth and supporting communities that honor traditional cultivation methods.</p>
                    </div>
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
