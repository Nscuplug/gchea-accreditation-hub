
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      title: 'À Propos',
      id: 'about',
      items: [
        { title: 'Notre Mission et Vision', href: '/about' },
        { title: 'Équipe de Direction', href: '/team' },
        { title: 'Bureaux Régionaux', href: '/offices' }
      ]
    },
    {
      title: 'Services d\'Accréditation',
      id: 'services',
      items: [
        { title: 'Processus et Normes', href: '/services' },
        { title: 'Institutions Accréditées', href: '/institutions' },
        { title: 'Commerce et Gestion', href: '/business' },
        { title: 'Ingénierie et Technologie', href: '/engineering' }
      ]
    },
    {
      title: 'Normes de Qualité',
      id: 'quality',
      items: [
        { title: 'Cadres Éducatifs Mondiaux', href: '/frameworks' },
        { title: 'Outils de Benchmarking', href: '/benchmarking' }
      ]
    },
    {
      title: 'Recherche et Développement',
      id: 'research',
      items: [
        { title: 'IA dans l\'Éducation', href: '/ai-education' },
        { title: 'Subventions de Recherche', href: '/grants' }
      ]
    },
    {
      title: 'Partenariats Mondiaux',
      id: 'partnerships',
      items: [
        { title: 'Collaborations Gouvernementales', href: '/government' },
        { title: 'Programmes ONU et UNESCO', href: '/un-unesco' }
      ]
    },
    {
      title: 'Ressources',
      id: 'resources',
      items: [
        { title: 'Articles de Recherche', href: '/research-papers' },
        { title: 'Auto-évaluation', href: '/self-assessment' }
      ]
    },
    {
      title: 'Actualités',
      id: 'news',
      items: [
        { title: 'Communiqués de Presse', href: '/press' },
        { title: 'Offres d\'Emploi', href: '/careers' }
      ]
    }
  ];

  return (
    <header className="bg-white/80 backdrop-blur-xl shadow-xl sticky top-0 z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row: Logo and Verification Button */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/55fc5fad-8c61-43d4-b5c8-b98d179abb8d.png" 
              alt="GCHEA Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Verification Button */}
          <div className="flex items-center space-x-4">
            <Link to="/verification">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Shield className="w-4 h-4 mr-2" />
                Vérifier un Document
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-700 hover:bg-white/50 rounded-xl p-2"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation - Second Row with translucent background */}
        <div className="hidden lg:block border-t border-white/30 py-4">
          <div className="bg-white/30 backdrop-blur-lg rounded-2xl px-6 py-3 shadow-lg">
            <nav className="flex items-center justify-center space-x-8">
              {menuItems.map((item) => (
                <div 
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 font-semibold py-2 px-3 rounded-lg hover:bg-white/50 transition-all duration-200">
                    <span>{item.title}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {activeDropdown === item.id && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl shadow-2xl rounded-xl border border-white/30 py-4 z-50">
                      {item.items.map((subItem, index) => (
                        <Link
                          key={index}
                          to={subItem.href}
                          className="block px-6 py-3 text-slate-600 hover:text-blue-600 hover:bg-white/50 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/30 py-6 animate-fade-in bg-white/90 backdrop-blur-xl rounded-b-2xl shadow-xl">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <div key={item.id} className="space-y-2">
                  <div className="text-slate-800 font-semibold py-3 px-4 bg-white/50 rounded-lg">
                    {item.title}
                  </div>
                  {item.items.map((subItem, index) => (
                    <Link
                      key={index}
                      to={subItem.href}
                      className="block text-slate-600 hover:text-blue-600 py-2 px-6 ml-4 rounded-lg hover:bg-white/50 transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
