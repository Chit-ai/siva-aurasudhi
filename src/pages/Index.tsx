
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Flower, Beaker, Heart, Droplets } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ScrollToTop from '@/components/ScrollToTop';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import ProcessSteps from '@/components/ProcessSteps';
import FeaturedIngredients from '@/components/FeaturedIngredients';
import Testimonials from '@/components/Testimonials';
import CommunityStats from '@/components/CommunityStats';
import SacredRecipes from '@/components/SacredRecipes';
import Calculator from '@/components/Calculator';
import Meditation from '@/components/Meditation';
import AncientWisdom from '@/components/AncientWisdom';
import { SAP_VALUES, OilType } from '@/data/sapValues';
import { SACRED_RECIPES } from '@/data/recipeData';

const Index = () => {
  const [batchSize, setBatchSize] = useState([500]);
  const [oils, setOils] = useState<Record<OilType, number>>({
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
    
    // If no oils are entered, use the batch size as the total oil weight for demonstration
    const effectiveOilWeight = totalOilWeight > 0 ? totalOilWeight : batchSize[0];
    
    let totalLye = 0;
    if (totalOilWeight > 0) {
      // Calculate based on actual oil inputs
      Object.entries(oils).forEach(([oil, weight]) => {
        totalLye += weight * SAP_VALUES[oil as OilType];
      });
    } else {
      // If no specific oils, use a default SAP calculation based on olive oil
      totalLye = effectiveOilWeight * SAP_VALUES.olive;
    }
    
    const water = (6 / 16) * effectiveOilWeight;
    
    setResults({
      lye: Math.round(totalLye * 100) / 100,
      water: Math.round(water * 100) / 100,
      totalOils: Math.round(effectiveOilWeight * 100) / 100
    });
  };

  // Load sacred recipe
  const loadSacredRecipe = (recipeKey: string) => {
    const recipe = SACRED_RECIPES[recipeKey as keyof typeof SACRED_RECIPES];
    const recipeTotal = Object.values(recipe.oils).reduce((sum, weight) => sum + weight, 0);
    const scaleFactor = batchSize[0] / recipeTotal;
    
    // Reset all oils to 0 first
    const resetOils: Record<OilType, number> = {
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
      if (oil in acc) {
        acc[oil as OilType] = Math.round(weight * scaleFactor * 100) / 100;
      }
      return acc;
    }, resetOils);
    
    setOils(scaledOils);
  };

  // Update oil quantity
  const updateOil = (oil: OilType, value: string) => {
    const numValue = parseFloat(value) || 0;
    setOils(prev => ({ ...prev, [oil]: numValue }));
  };

  // Auto-calculate when oils or batch size change
  useEffect(() => {
    calculateSoap();
  }, [oils, batchSize]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-purple-50">
      <Navigation />
      <ScrollToTop />
      
      <Hero />
      
      <Gallery />
      
      <div className="container mx-auto px-4">
        <ProcessSteps />
        <FeaturedIngredients />
        <Testimonials />
        <CommunityStats />
      </div>

      <div id="tabs" className="container mx-auto px-4 py-8">
        <Tabs defaultValue="sacred-recipes" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-4xl grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="sacred-recipes" className="flex items-center gap-2 text-xs md:text-sm">
                <Flower size={16} />
                <span className="hidden sm:inline">Sacred Recipes</span>
                <span className="sm:hidden">Recipes</span>
              </TabsTrigger>
              <TabsTrigger value="calculator" className="flex items-center gap-2 text-xs md:text-sm">
                <Beaker size={16} />
                <span className="hidden sm:inline">Calculator</span>
                <span className="sm:hidden">Calc</span>
              </TabsTrigger>
              <TabsTrigger value="meditation" className="flex items-center gap-2 text-xs md:text-sm">
                <Heart size={16} />
                <span className="hidden sm:inline">Meditation</span>
                <span className="sm:hidden">Med</span>
              </TabsTrigger>
              <TabsTrigger value="wisdom" className="flex items-center gap-2 text-xs md:text-sm">
                <Droplets size={16} />
                <span className="hidden sm:inline">Ancient Wisdom</span>
                <span className="sm:hidden">Wisdom</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="sacred-recipes">
            <SacredRecipes batchSize={batchSize[0]} loadSacredRecipe={loadSacredRecipe} />
          </TabsContent>

          <TabsContent value="calculator">
            <Calculator 
              batchSize={batchSize}
              setBatchSize={setBatchSize}
              oils={oils}
              updateOil={updateOil}
              results={results}
              calculateSoap={calculateSoap}
            />
          </TabsContent>

          <TabsContent value="meditation">
            <Meditation />
          </TabsContent>

          <TabsContent value="wisdom">
            <AncientWisdom />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
