
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      title: 'À Propos',
      id: 'about',
      items: [
        { title: 'Notre Mission et Vision', href: '#mission-vision' },
        { title: 'Équipe de Direction', href: '#equipe-direction' },
        { title: 'Bureaux Régionaux', href: '#bureaux-regionaux' }
      ]
    },
    {
      title: 'Services d\'Accréditation',
      id: 'services',
      items: [
        { title: 'Processus et Normes', href: '#processus-normes' },
        { title: 'Institutions Accréditées', href: '#institutions-accreditees' },
        { title: 'Commerce et Gestion', href: '#commerce-gestion' },
        { title: 'Ingénierie et Technologie', href: '#ingenierie-technologie' }
      ]
    },
    {
      title: 'Normes de Qualité',
      id: 'quality',
      items: [
        { title: 'Cadres Éducatifs Mondiaux', href: '#cadres-educatifs' },
        { title: 'Outils de Benchmarking', href: '#outils-benchmarking' }
      ]
    },
    {
      title: 'Recherche et Développement',
      id: 'research',
      items: [
        { title: 'IA dans l\'Éducation', href: '#ia-education' },
        { title: 'Subventions de Recherche', href: '#subventions-recherche' }
      ]
    },
    {
      title: 'Partenariats Mondiaux',
      id: 'partnerships',
      items: [
        { title: 'Collaborations Gouvernementales', href: '#collaborations-gouvernementales' },
        { title: 'Programmes ONU et UNESCO', href: '#programmes-onu-unesco' }
      ]
    },
    {
      title: 'Ressources',
      id: 'resources',
      items: [
        { title: 'Articles de Recherche', href: '#articles-recherche' },
        { title: 'Auto-évaluation', href: '#auto-evaluation' }
      ]
    },
    {
      title: 'Actualités',
      id: 'news',
      items: [
        { title: 'Communiqués de Presse', href: '#communiques-presse' },
        { title: 'Offres d\'Emploi', href: '#offres-emploi' }
      ]
    }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-lg shadow-xl sticky top-0 z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main header row */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/55fc5fad-8c61-43d4-b5c8-b98d179abb8d.png" 
              alt="GCHEA Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div 
                key={item.id}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 font-semibold py-2 px-3 rounded-lg hover:bg-slate-50 transition-all duration-200">
                  <span>{item.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Dropdown Menu */}
                {activeDropdown === item.id && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-2xl rounded-xl border border-slate-100 py-4 z-50">
                    {item.items.map((subItem, index) => (
                      <a
                        key={index}
                        href={subItem.href}
                        className="block px-6 py-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <a 
              href="#verification" 
              className="text-slate-700 hover:text-blue-600 font-semibold py-2 px-3 rounded-lg hover:bg-slate-50 transition-all duration-200"
            >
              Vérification
            </a>
          </nav>

          {/* Verification Button */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => document.getElementById('verification')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Shield className="w-4 h-4 mr-2" />
              Vérifier un Document
            </Button>
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-700 hover:bg-slate-100 rounded-xl p-2"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-6 animate-fade-in bg-white/95 backdrop-blur-lg rounded-b-2xl shadow-xl">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <div key={item.id} className="space-y-2">
                  <div className="text-slate-800 font-semibold py-3 px-4 bg-slate-50 rounded-lg">
                    {item.title}
                  </div>
                  {item.items.map((subItem, index) => (
                    <a
                      key={index}
                      href={subItem.href}
                      className="block text-slate-600 hover:text-blue-600 py-2 px-6 ml-4 rounded-lg hover:bg-slate-50 transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {subItem.title}
                    </a>
                  ))}
                </div>
              ))}
              <a 
                href="#verification" 
                className="text-slate-700 hover:text-blue-600 font-semibold py-3 px-4 rounded-lg hover:bg-slate-50 transition-all" 
                onClick={() => setIsMenuOpen(false)}
              >
                Vérification
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
