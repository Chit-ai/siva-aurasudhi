
# Aura Sudhi - Sacred Ayurvedic Soap Calculator Metaprompt

## Project Overview
Create a comprehensive web application called "Aura Sudhi" (आत्मा शुद्धि - Cleansing the Soul's Energy Field) - a sacred Ayurvedic soap calculator designed for yogis and spiritual practitioners. The application combines ancient wisdom with modern web technology to help users create spiritually-infused soaps with proper saponification calculations.

## Core Theme & Visual Identity

### Color Palette
- Primary: Orange to Red gradients (`from-orange-500 to-red-500`, `from-orange-600 to-red-600`)
- Secondary: Purple, Indigo, Yellow, Green gradients for different sections
- Background: Soft gradients (`from-orange-50 via-yellow-50 to-purple-50`)
- Text: Orange-900, Purple-900, etc. (dark variants for readability)
- Accents: White/transparent overlays with backdrop blur effects

### Typography & Styling
- Primary heading font: Bold, large sizes (4xl-6xl)
- Sacred symbols: Use Flower, Sun, Moon, Heart, Star, Leaf icons from Lucide React
- Border radius: Consistent rounded corners (`rounded-lg`, `rounded-full`)
- Shadows: Subtle to dramatic (`shadow-lg`, `hover:shadow-xl`)
- Transitions: Smooth animations (`transition-all duration-300`)

### Visual Elements
- Gradient backgrounds with transparency overlays
- Card-based layout with glassmorphism effects (`bg-white/80 backdrop-blur`)
- Icon integration throughout (Lucide React icons)
- Sacred geometry and spiritual symbolism
- Responsive design (mobile-first approach)

## Application Structure

### Main Sections
1. **Hero Section**: 
   - Large gradient banner with title "Aura Sudhi"
   - Sanskrit subtitle: "आत्मा शुद्धि - Cleansing the Soul's Energy Field"
   - Animated icons and call-to-action

2. **Sacred Gallery**: 
   - Image cards showcasing ingredients and process
   - Background images from Unsplash (nature, meditation themes)
   - Hover effects and overlay text

3. **Process Steps**: 
   - 4-step sacred process visualization
   - Icon-based cards with descriptions
   - Color-coded by element (Fire, Earth, Air, Water)

4. **Featured Ingredients**: 
   - Grid layout of sacred ingredient cards
   - Chakra associations and badges

5. **Testimonials**: 
   - Community member reviews with avatars
   - Star ratings and spiritual titles

6. **Interactive Tabs System**:
   - Sacred Recipes
   - Calculator
   - Meditation Guides
   - Ancient Wisdom

## Core Functionality

### SAP Values (Saponification Values)
```javascript
const SAP_VALUES = {
  olive: 0.134,
  coconut: 0.191,
  almond: 0.136,
  palm: 0.141,
  avocado: 0.133,
  shea: 0.128,
  sesame: 0.133,
  neem: 0.139
};
```

### Sacred Recipes Structure
Each recipe includes:
- Name (Sanskrit + English)
- Spiritual description and meditation practice
- Oil proportions (in grams)
- Sacred herbs and essential oils
- Chakra associations
- Elemental correspondences
- Ritual preparation instructions

### Calculator Logic
- Batch size slider (100g - 5000g)
- Individual oil weight inputs
- Real-time lye and water calculations
- Formula: `lye = oil_weight × SAP_value`
- Water calculation: `water = (6/16) × total_oil_weight`
- Safety warnings and handling instructions

### Meditation & Wisdom Content
- Step-by-step meditation practices
- Sacred mantras for each stage
- Ancient Sanskrit texts with translations
- Ayurvedic principles (Doshas, Elements, Chakras)
- Lunar timing and astrological considerations

## Technical Implementation

### Technology Stack
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Shadcn/ui component library
- Lucide React for icons
- React Router (HashRouter for GitHub Pages)
- Tanstack React Query for state management

### Key Components Structure
```
src/
├── components/
│   ├── Navigation.tsx (sticky header with spiritual branding)
│   ├── ScrollToTop.tsx (floating action button)
│   └── ui/ (shadcn components)
├── pages/
│   ├── Index.tsx (main application - 976 lines)
│   └── NotFound.tsx
└── App.tsx (routing setup)
```

### State Management
- Local state with useState for oil quantities
- useEffect for auto-calculation on changes
- Slider component for batch size
- Input components for individual oil weights

### Responsive Design
- Mobile-first approach
- Grid layouts that adapt (sm:grid-cols-2, lg:grid-cols-4)
- Text sizing that scales (text-xs md:text-sm)
- Hidden elements on small screens (hidden sm:inline)

## Content Guidelines

### Spiritual Terminology
- Use Sanskrit terms with English translations
- Include chakra associations and elemental correspondences
- Reference ancient texts (Charaka Samhita, Sushruta Samhita, Vedas)
- Incorporate yoga philosophy and Ayurvedic principles

### Sacred Recipe Names
Examples:
- "Surya Namaskara (Sun Salutation)"
- "Chandra Shanti (Moon Peace)"
- "Padma Sudhi (Lotus Purification)"
- "Neem Raksha (Divine Protection)"
- "Chandan Moksha (Sandalwood Liberation)"

### Meditation Practices
Include specific instructions for:
- Preparation rituals (pranayama, intention setting)
- Oil blessing ceremonies
- Mixing meditations with mantras
- Molding visualizations
- Curing period practices

### Ancient Wisdom Integration
- Sanskrit verses with translations
- Ayurvedic doshas and their oil correspondences
- Lunar cycles and timing recommendations
- Nakshatra (star constellation) considerations
- Safety practices rooted in Ahimsa (non-violence)

## Image Requirements

### Suggested Unsplash Categories
- Sacred forests and ancient trees
- Ocean waves and water elements
- Mountain landscapes for meditation
- Yoga practitioners and spiritual scenes
- Natural ingredients (herbs, oils, flowers)
- Sacred geometry and spiritual symbols

### Image Integration
- Hero section background with overlay
- Gallery cards with gradient overlays
- Ingredient showcase cards
- Testimonial avatars
- Process step illustrations

## Deployment Configuration

### GitHub Pages Setup
- HashRouter for client-side routing
- Base URL configuration for subdirectories
- GitHub Actions workflow for automatic deployment
- Manual deployment script option

### Build Configuration
```javascript
// vite.config.ts
base: mode === 'production' ? '/repository-name/' : '/',
```

## User Experience Flow

1. **Landing**: Immersive hero section with spiritual branding
2. **Education**: Gallery and process explanation
3. **Inspiration**: Ingredient showcase and testimonials
4. **Action**: Interactive tabs for recipes and calculation
5. **Guidance**: Meditation practices and ancient wisdom
6. **Creation**: Step-by-step soap making with spiritual context

## Accessibility & Performance

### Best Practices
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Mobile touch targets (minimum 44px)
- Fast loading with optimized images
- Progressive enhancement approach

### SEO Considerations
- Meaningful page titles and meta descriptions
- Structured content hierarchy
- Alt text for all images
- Clean URL structure with HashRouter

## Future Enhancements

### Potential Features
- User accounts for saving custom recipes
- Community recipe sharing
- Advanced timing calculator with astronomical data
- Essential oil blend calculator
- Ingredient sourcing guide
- Video meditation guides
- Multi-language support (Sanskrit, Hindi)

### Integration Possibilities
- Supabase for user data and recipes
- Calendar integration for lunar timing
- E-commerce for ingredient sourcing
- Social sharing for recipes
- PDF generation for recipe cards

## Development Notes

### File Structure Optimization
- Main Index.tsx is currently 976 lines - consider refactoring into smaller components
- Separate recipe data into dedicated files
- Extract calculation logic into utility functions
- Create reusable card components

### Performance Considerations
- Lazy loading for recipe images
- Debounced calculations for real-time updates
- Memoized recipe data
- Optimized re-renders with React.memo

This metaprompt provides a complete blueprint for recreating or extending the Aura Sudhi application while maintaining its spiritual authenticity and technical excellence.
