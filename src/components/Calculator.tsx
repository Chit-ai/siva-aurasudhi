
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Package, Beaker } from 'lucide-react';
import { SAP_VALUES, OilType } from '@/data/sapValues';

interface CalculatorProps {
  batchSize: number[];
  setBatchSize: (value: number[]) => void;
  oils: Record<OilType, number>;
  updateOil: (oil: OilType, value: string) => void;
  results: { lye: number; water: number; totalOils: number };
  calculateSoap: () => void;
}

const Calculator: React.FC<CalculatorProps> = ({
  batchSize,
  setBatchSize,
  oils,
  updateOil,
  results,
  calculateSoap
}) => {
  return (
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
                      SAP: {SAP_VALUES[oil as OilType]}
                    </Badge>
                  </Label>
                  <Input
                    id={oil}
                    type="number"
                    placeholder="0"
                    value={weight || ''}
                    onChange={(e) => updateOil(oil as OilType, e.target.value)}
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
  );
};

export default Calculator;
