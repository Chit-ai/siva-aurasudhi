
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Beaker, Heart, Shield, Moon } from 'lucide-react';

const AncientWisdom = () => {
  return (
    <div className="space-y-8">
      {/* Ancient Texts & Quotes Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
          <CardHeader>
            <CardTitle className="text-amber-900 flex items-center gap-2">
              <Package size={24} />
              Sacred Texts on Purification
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-amber-800">
            <div className="space-y-4 text-sm">
              <div className="bg-white/70 p-4 rounded-lg border border-amber-200">
                <h4 className="font-bold mb-2 text-amber-900">📜 Charaka Samhita (स्नान अध्याय)</h4>
                <p className="italic mb-2">"स्नानं सर्वपापहरं तथा रोगनाशकरम् | आयुष्यं सौख्यं सौन्दर्यं वीर्यं च वर्धयति ||"</p>
                <p className="text-xs text-amber-700">"Bathing removes all sins and destroys diseases. It increases lifespan, happiness, beauty, and vitality."</p>
              </div>
              
              <div className="bg-white/70 p-4 rounded-lg border border-amber-200">
                <h4 className="font-bold mb-2 text-amber-900">📿 Sushruta Samhita (शुद्धिकरण विधि)</h4>
                <p className="italic mb-2">"तैलं नारिकेलस्य तिलस्य च समंवितम् | सर्वदोषहरं प्रोक्तं त्रिदोषशमनं परम् ||"</p>
                <p className="text-xs text-amber-700">"The combination of coconut and sesame oils is declared to remove all doshas and is supreme for balancing the three constitutional types."</p>
              </div>

              <div className="bg-white/70 p-4 rounded-lg border border-amber-200">
                <h4 className="font-bold mb-2 text-amber-900">🕉️ Atharva Veda (आरोग्य मन्त्र)</h4>
                <p className="italic mb-2">"आपो वा इदं सर्वं भूतं यच्च भव्यं च | आपो वै प्राणा आपो ह्यन्नम् ||"</p>
                <p className="text-xs text-amber-700">"Water is indeed all this - whatever has been and whatever will be. Water is life, water is food."</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
          <CardHeader>
            <CardTitle className="text-emerald-900 flex items-center gap-2">
              <Beaker size={24} />
              Ancient Alkali Preparation (क्षार निर्माण)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-emerald-800">
            <div className="space-y-4 text-sm">
              <div className="bg-white/70 p-4 rounded-lg border border-emerald-200">
                <h4 className="font-bold mb-2 text-emerald-900">🔥 Rasashastra Traditional Method</h4>
                <p className="mb-2">"सर्जिका क्षारं (Barilla Ash Method):"</p>
                <ul className="text-xs space-y-1 pl-4">
                  <li>• Collect Salsola kali (saltwort) during full moon</li>
                  <li>• Burn completely in sacred fire ceremony</li>
                  <li>• Mix ashes with pure water in copper vessel</li>
                  <li>• Filter through sacred cloth 7 times</li>
                  <li>• Evaporate while chanting mantras</li>
                </ul>
              </div>

              <div className="bg-white/70 p-4 rounded-lg border border-emerald-200">
                <h4 className="font-bold mb-2 text-emerald-900">🌿 Ayurvedic Plant Ash Preparation</h4>
                <p className="mb-2">"वनस्पति क्षार विधि (Forest Alkali Method):"</p>
                <ul className="text-xs space-y-1 pl-4">
                  <li>• Banana plant stems and leaves</li>
                  <li>• Palmyra palm fronds</li>
                  <li>• Neem and Banyan tree barks</li>
                  <li>• Burn during auspicious muhurta</li>
                  <li>• Extract with rainwater or Ganga jal</li>
                </ul>
              </div>

              <div className="bg-white/70 p-4 rounded-lg border border-emerald-200">
                <h4 className="font-bold mb-2 text-emerald-900">⚗️ Rasa Shastra Quote</h4>
                <p className="italic mb-2">"क्षारस्य गुणाः कटुका तीक्ष्णा उष्णा लेखना च | मेदोविकारान् नाशयति त्वचा शुद्धिकरी मता ||"</p>
                <p className="text-xs text-emerald-700">"Alkali's qualities are pungent, sharp, hot, and cleansing. It destroys fat disorders and is considered a skin purifier."</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Philosophical Foundation */}
      <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
        <CardHeader>
          <CardTitle className="text-purple-900 flex items-center gap-2">
            <Heart size={24} />
            Philosophical Foundation of Sacred Cleansing
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-purple-800">
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <div className="bg-white/70 p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold mb-2 text-purple-900">🌸 Yoga Vashishta on Purity</h4>
                <p className="italic mb-2">"शुद्धे चित्ते शुद्धं सर्वम्, अशुद्धे चित्ते अशुद्धं सर्वम्"</p>
                <p className="text-xs">"When the mind is pure, everything is pure. When the mind is impure, everything is impure."</p>
              </div>
              
              <div className="bg-white/70 p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold mb-2 text-purple-900">🕉️ Bhagavad Gita (15.7)</h4>
                <p className="italic mb-2">"ममैवांशो जीवलोके जीवभूतः सनातनः"</p>
                <p className="text-xs">"The eternal soul in this body is a part of My very Self."</p>
                <p className="text-xs mt-1 text-purple-700">Thus, cleansing the body temple honors the divine within.</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-white/70 p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold mb-2 text-purple-900">🌿 Patanjali Yoga Sutras (2.40)</h4>
                <p className="italic mb-2">"शौचात्स्वाङ्गजुगुप्सा परैरसंसर्गः"</p>
                <p className="text-xs">"From cleanliness comes detachment from one's own body and non-contact with others' impurities."</p>
              </div>
              
              <div className="bg-white/70 p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold mb-2 text-purple-900">📿 Vishnu Purana</h4>
                <p className="italic mb-2">"आपः पवित्रतमाः सर्वेषां पावनानाम्"</p>
                <p className="text-xs">"Water is the most purifying of all purifying substances."</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ayurvedic Principles */}
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
          <CardHeader>
            <CardTitle className="text-red-900 text-lg">🔥 Agni (Fire Element)</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-red-800 space-y-2">
            <p className="font-medium">Pitta Balancing Oils:</p>
            <ul className="space-y-1 text-xs pl-4">
              <li>• Coconut: Cooling, anti-inflammatory</li>
              <li>• Sunflower: Reduces heat excess</li>
              <li>• Almond: Nourishing, gentle</li>
            </ul>
            <div className="bg-white/50 p-2 rounded text-xs italic">
              "अग्निर्वै देवानामग्रे" - Fire is foremost among the gods (Rig Veda)
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-900 text-lg">💨 Vayu (Air Element)</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-blue-800 space-y-2">
            <p className="font-medium">Vata Grounding Oils:</p>
            <ul className="space-y-1 text-xs pl-4">
              <li>• Sesame: Warming, nourishing</li>
              <li>• Avocado: Heavy, stabilizing</li>
              <li>• Shea: Deeply moisturizing</li>
            </ul>
            <div className="bg-white/50 p-2 rounded text-xs italic">
              "वायुर्वै शीघ्रगो देवः" - Air is the swiftly moving deity (Atharva Veda)
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-900 text-lg">🌍 Prithvi (Earth Element)</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-green-800 space-y-2">
            <p className="font-medium">Kapha Stimulating Oils:</p>
            <ul className="space-y-1 text-xs pl-4">
              <li>• Mustard: Heating, stimulating</li>
              <li>• Neem: Purifying, bitter</li>
              <li>• Eucalyptus: Clearing, light</li>
            </ul>
            <div className="bg-white/50 p-2 rounded text-xs italic">
              "पृथ्वी माता पुत्रोऽहं पृथिव्याः" - Earth is mother, I am son of Earth (Atharva Veda)
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sacred Timing and Lunar Cycles */}
      <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
        <CardHeader>
          <CardTitle className="text-indigo-900 flex items-center gap-2">
            <Moon size={24} />
            Cosmic Timing & Lunar Influence (ज्योतिष शास्त्र)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-indigo-800">
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <h4 className="font-bold text-indigo-900">🌕 Purnima (Full Moon) - Maximum Potency</h4>
              <ul className="space-y-1 text-xs pl-4">
                <li>• Oils absorb maximum lunar energy</li>
                <li>• Saponification enhanced by lunar pull</li>
                <li>• Healing properties magnified 108 times</li>
                <li>• Chant Chandra mantras during mixing</li>
              </ul>
              
              <h4 className="font-bold text-indigo-900 mt-4">🌑 Amavasya (New Moon) - New Beginnings</h4>
              <ul className="space-y-1 text-xs pl-4">
                <li>• Perfect for starting new soap batches</li>
                <li>• Cleansing negative energies</li>
                <li>• Setting healing intentions</li>
                <li>• Invoking fresh spiritual energy</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-bold text-indigo-900">⭐ Nakshatra Considerations</h4>
              <div className="space-y-2 text-xs">
                <div className="bg-white/50 p-2 rounded">
                  <strong>Rohini:</strong> Best for beauty and nourishment soaps
                </div>
                <div className="bg-white/50 p-2 rounded">
                  <strong>Pushya:</strong> Most auspicious for all spiritual activities
                </div>
                <div className="bg-white/50 p-2 rounded">
                  <strong>Ashwini:</strong> Healing and medicinal soap preparation
                </div>
                <div className="bg-white/50 p-2 rounded">
                  <strong>Revati:</strong> Completion and perfection of recipes
                </div>
              </div>
              
              <div className="bg-white/70 p-3 rounded-lg border border-indigo-200 mt-3">
                <p className="italic text-xs">"यस्मिन् नक्षत्रे जातो जीवः तस्मिन् कर्म शुभम्"</p>
                <p className="text-xs mt-1">"The work done under one's birth star is always auspicious."</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modern Safety with Ancient Wisdom */}
      <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="text-yellow-900 flex items-center gap-2">
            <Shield size={24} />
            Honoring Safety Through Ancient Principles
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-yellow-800">
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-bold mb-2 text-yellow-900">🛡️ Ahimsa (Non-Violence) in Practice</h4>
              <ul className="space-y-1 text-xs pl-4">
                <li>• Protect yourself as you would protect others</li>
                <li>• Use safety equipment as spiritual armor</li>
                <li>• Handle caustic materials with reverence and care</li>
                <li>• Create sacred, well-ventilated workspace</li>
                <li>• Keep emergency supplies as divine protection</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-yellow-900">🙏 Traditional Precautions</h4>
              <div className="bg-white/70 p-3 rounded-lg border border-yellow-200">
                <p className="italic text-xs mb-2">"सावधानं सर्वकार्येषु अनुष्ठेयम्"</p>
                <p className="text-xs">"Caution should be exercised in all undertakings."</p>
                <p className="text-xs mt-2">Ancient soap makers always blessed their materials and workspace before beginning, believing that mindful preparation prevents accidents.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AncientWisdom;
