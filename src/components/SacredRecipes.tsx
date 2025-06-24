
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Flower } from 'lucide-react';
import { SACRED_RECIPES } from '@/data/recipeData';

interface SacredRecipesProps {
  batchSize: number;
  loadSacredRecipe: (recipeKey: string) => void;
}

const SacredRecipes: React.FC<SacredRecipesProps> = ({ batchSize, loadSacredRecipe }) => {
  return (
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
  );
};

export default SacredRecipes;
