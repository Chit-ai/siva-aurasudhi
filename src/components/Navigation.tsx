
import React, { useState } from 'react';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from '@/components/ui/button';
import { Menu, X, Flower, Heart, Beaker, Droplets } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-orange-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Flower className="text-orange-600" size={32} />
            <span className="text-xl font-bold text-orange-900">Aura Sudhi</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-orange-800">Explore</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <NavigationMenuLink 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50 hover:text-orange-900 focus:bg-orange-50 focus:text-orange-900 cursor-pointer"
                        onClick={() => scrollToSection('gallery')}
                      >
                        <div className="text-sm font-medium leading-none">Sacred Gallery</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Explore our spiritual soap making journey
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50 hover:text-orange-900 focus:bg-orange-50 focus:text-orange-900 cursor-pointer"
                        onClick={() => scrollToSection('process')}
                      >
                        <div className="text-sm font-medium leading-none">Sacred Process</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Learn the ancient art of soap alchemy
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50 hover:text-orange-900 focus:bg-orange-50 focus:text-orange-900 cursor-pointer"
                        onClick={() => scrollToSection('ingredients')}
                      >
                        <div className="text-sm font-medium leading-none">Sacred Ingredients</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Discover nature's blessed offerings
                        </p>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Button variant="ghost" onClick={() => scrollToSection('tabs')} className="text-orange-800">
                    <Beaker size={16} className="mr-2" />
                    Calculator
                  </Button>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Button variant="ghost" onClick={() => scrollToSection('tabs')} className="text-orange-800">
                    <Heart size={16} className="mr-2" />
                    Meditation
                  </Button>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Button variant="ghost" onClick={() => scrollToSection('tabs')} className="text-orange-800">
                    <Droplets size={16} className="mr-2" />
                    Wisdom
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm"
            className="md:hidden text-orange-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-orange-200 bg-white/95">
            <div className="flex flex-col space-y-2">
              <Button 
                variant="ghost" 
                className="justify-start text-orange-800"
                onClick={() => scrollToSection('gallery')}
              >
                Sacred Gallery
              </Button>
              <Button 
                variant="ghost" 
                className="justify-start text-orange-800"
                onClick={() => scrollToSection('process')}
              >
                Sacred Process
              </Button>
              <Button 
                variant="ghost" 
                className="justify-start text-orange-800"
                onClick={() => scrollToSection('ingredients')}
              >
                Sacred Ingredients
              </Button>
              <Button 
                variant="ghost" 
                className="justify-start text-orange-800"
                onClick={() => scrollToSection('tabs')}
              >
                <Beaker size={16} className="mr-2" />
                Calculator
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
