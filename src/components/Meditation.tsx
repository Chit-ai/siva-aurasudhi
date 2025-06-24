
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart } from 'lucide-react';
import { MEDITATION_PRACTICES } from '@/data/meditationData';

const Meditation = () => {
  return (
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
  );
};

export default Meditation;
