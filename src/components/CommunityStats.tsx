
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CommunityStats = () => {
  return (
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
  );
};

export default CommunityStats;
