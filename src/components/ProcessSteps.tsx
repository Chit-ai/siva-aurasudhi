
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Sun, Leaf, Heart, Moon } from 'lucide-react';

const ProcessSteps = () => {
  return (
    <div id="process" className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-orange-900 text-center mb-12">The Sacred Process</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-orange-200 text-center hover:shadow-lg transition-all duration-300">
          <CardContent className="p-4 md:p-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sun size={32} className="text-orange-600" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-orange-900 mb-2">1. Dawn Preparation</h3>
            <p className="text-xs md:text-sm text-orange-700">Begin at sunrise with pranayama breathing and intention setting</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-green-200 text-center hover:shadow-lg transition-all duration-300">
          <CardContent className="p-4 md:p-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf size={32} className="text-green-600" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-green-900 mb-2">2. Sacred Mixing</h3>
            <p className="text-xs md:text-sm text-green-700">Blend oils with mindful awareness and healing mantras</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 text-center hover:shadow-lg transition-all duration-300">
          <CardContent className="p-4 md:p-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart size={32} className="text-purple-600" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-purple-900 mb-2">3. Love Infusion</h3>
            <p className="text-xs md:text-sm text-purple-700">Pour divine love energy into every molecular bond</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 text-center hover:shadow-lg transition-all duration-300">
          <CardContent className="p-4 md:p-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Moon size={32} className="text-blue-600" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-blue-900 mb-2">4. Lunar Curing</h3>
            <p className="text-xs md:text-sm text-blue-700">Allow 28 days of moon cycles for perfect saponification</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProcessSteps;
