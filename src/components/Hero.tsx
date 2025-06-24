
import React from 'react';
import { Button } from '@/components/ui/button';
import { Flower, Sun, Moon, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <div id="hero" className="bg-gradient-to-r from-orange-600 via-red-500 to-purple-600 text-white py-24 mt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Flower size={56} className="text-orange-100 animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">Aura Sudhi</h1>
          <Flower size={56} className="text-orange-100 animate-pulse" />
        </div>
        <p className="text-xl md:text-2xl text-orange-100 mb-2">आत्मा शुद्धि - Cleansing the Soul's Energy Field</p>
        <p className="text-base md:text-lg text-orange-200 mb-8">Sacred Ayurvedic Soap Alchemy for Yogis</p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-orange-200">
          <div className="flex items-center gap-2">
            <Sun size={20} />
            <span className="text-sm md:text-base">Solar Energy</span>
          </div>
          <div className="flex items-center gap-2">
            <Moon size={20} />
            <span className="text-sm md:text-base">Lunar Blessings</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart size={20} />
            <span className="text-sm md:text-base">Divine Love</span>
          </div>
        </div>
        <div className="mt-8">
          <Button 
            onClick={() => document.getElementById('tabs')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm px-8 py-3 text-lg"
            variant="outline"
          >
            Begin Your Sacred Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
