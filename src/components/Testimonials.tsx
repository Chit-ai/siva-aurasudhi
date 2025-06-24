
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
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
  );
};

export default Testimonials;
