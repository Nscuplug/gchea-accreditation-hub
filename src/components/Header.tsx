
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, Mail, Shield } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À Propos', href: '#a-propos' },
    { name: 'Services', href: '#services' },
    { name: 'Partenariats', href: '#partenariats' },
    { name: 'Vérification', href: '#verification' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-gchea-purple to-gchea-light-purple rounded-lg flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-gchea-dark-purple">GCHEA</h1>
              <p className="text-xs text-gchea-purple">Genève, Suisse</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gchea-dark-purple hover:text-gchea-bright-gold font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gchea-bright-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="mailto:support@gchea.org"
              className="flex items-center text-gchea-purple hover:text-gchea-bright-gold transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              support@gchea.org
            </a>
            <Button className="bg-gchea-purple hover:bg-gchea-dark-purple text-white">
              Vérifier un Document
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gchea-purple"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gchea-dark-purple hover:text-gchea-bright-gold font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t">
                <a
                  href="mailto:support@gchea.org"
                  className="flex items-center text-gchea-purple mb-4"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  support@gchea.org
                </a>
                <Button className="w-full bg-gchea-purple hover:bg-gchea-dark-purple text-white">
                  Vérifier un Document
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
