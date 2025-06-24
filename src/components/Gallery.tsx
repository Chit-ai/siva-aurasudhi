
import React from 'react';
import { Card } from '@/components/ui/card';

const Gallery = () => {
  return (
    <div id="gallery" className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">Sacred Soap Making Journey</h2>
        <p className="text-base md:text-lg text-orange-700 max-w-3xl mx-auto">
          Experience the divine art of Ayurvedic soap crafting through ancient wisdom and modern mindfulness
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
        <Card className="bg-white/80 backdrop-blur border-orange-200 overflow-hidden hover:shadow-xl transition-all duration-300">
          <div className="h-48 md:h-64 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1523712999610-f77fbcfc3843)'}}>
            <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-4 md:p-6 text-white">
                <h3 className="text-lg md:text-xl font-bold mb-2">Sacred Forest Ingredients</h3>
                <p className="text-xs md:text-sm opacity-90">Harvested with reverence from nature's temple</p>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="bg-white/80 backdrop-blur border-orange-200 overflow-hidden hover:shadow-xl transition-all duration-300">
          <div className="h-48 md:h-64 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1500375592092-40eb2168fd21)'}}>
            <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-4 md:p-6 text-white">
                <h3 className="text-lg md:text-xl font-bold mb-2">Ocean's Purifying Energy</h3>
                <p className="text-xs md:text-sm opacity-90">Infused with the cleansing power of water element</p>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="bg-white/80 backdrop-blur border-orange-200 overflow-hidden hover:shadow-xl transition-all duration-300">
          <div className="h-48 md:h-64 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05)'}}>
            <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-4 md:p-6 text-white">
                <h3 className="text-lg md:text-xl font-bold mb-2">Mountain Meditation</h3>
                <p className="text-xs md:text-sm opacity-90">Crafted in harmony with earth's highest vibrations</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Gallery;
