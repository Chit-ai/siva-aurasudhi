
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FeaturedIngredients = () => {
  return (
    <div id="ingredients" className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-orange-900 text-center mb-12">Sacred Ingredients from Mother Earth</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white/80 backdrop-blur border-orange-200 overflow-hidden hover:shadow-lg transition-all duration-300">
          <div className="h-24 md:h-32 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb)'}}>
          </div>
          <CardContent className="p-3 md:p-4">
            <h4 className="font-bold text-orange-900 mb-1 text-sm md:text-base">Sacred Olive</h4>
            <p className="text-xs text-orange-700">Ancient wisdom of the Mediterranean</p>
            <Badge variant="outline" className="mt-2 text-xs">Heart Chakra</Badge>
          </CardContent>
        </Card>
        
        <Card className="bg-white/80 backdrop-blur border-orange-200 overflow-hidden hover:shadow-lg transition-all duration-300">
          <div className="h-24 md:h-32 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1501854140801-50d01698950b)'}}>
          </div>
          <CardContent className="p-3 md:p-4">
            <h4 className="font-bold text-orange-900 mb-1 text-sm md:text-base">Himalayan Herbs</h4>
            <p className="text-xs text-orange-700">Blessed by mountain spirits</p>
            <Badge variant="outline" className="mt-2 text-xs">Crown Chakra</Badge>
          </CardContent>
        </Card>
        
        <Card className="bg-white/80 backdrop-blur border-orange-200 overflow-hidden hover:shadow-lg transition-all duration-300">
          <div className="h-24 md:h-32 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1500673922987-e212871fec22)'}}>
          </div>
          <CardContent className="p-3 md:p-4">
            <h4 className="font-bold text-orange-900 mb-1 text-sm md:text-base">Sacred Neem</h4>
            <p className="text-xs text-orange-700">Divine protection and purification</p>
            <Badge variant="outline" className="mt-2 text-xs">Root Chakra</Badge>
          </CardContent>
        </Card>
        
        <Card className="bg-white/80 backdrop-blur border-orange-200 overflow-hidden hover:shadow-lg transition-all duration-300">
          <div className="h-24 md:h-32 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1615729947596-a598e5de0ab3)'}}>
          </div>
          <CardContent className="p-3 md:p-4">
            <h4 className="font-bold text-orange-900 mb-1 text-sm md:text-base">Lotus Essence</h4>
            <p className="text-xs text-orange-700">Symbol of spiritual awakening</p>
            <Badge variant="outline" className="mt-2 text-xs">Thousand Petals</Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeaturedIngredients;
