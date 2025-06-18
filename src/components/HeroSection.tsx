
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, Award, Users, Shield, Building, Landmark } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="accueil" className="hero-gradient text-white py-24 lg:py-32 overflow-hidden institutional-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-3 mb-8">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 px-4 py-2">
                <Landmark className="w-5 h-5 mr-2" />
                Reconnu par l'ONU & UNESCO
              </Badge>
            </div>
            
            <h1 className="text-4xl lg:text-7xl font-bold mb-8 leading-tight font-formal authority-text">
              <span className="block text-white">Conseil Mondial</span>
              <span className="block text-gchea-gold">pour l'Accréditation</span>
              <span className="block text-white">de l'Enseignement</span>
              <span className="block text-white">Supérieur</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-10 text-white/95 leading-relaxed font-medium">
              Autorité mondiale de régulation éducative basée à <strong>Genève, Suisse</strong>, 
              gouvernant les normes d'excellence académique dans plus de <strong>120 pays</strong> 
              avec une mission de transformation de l'éducation mondiale.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Button size="lg" className="btn-authority text-lg px-10 py-5">
                Services Officiels
              </Button>
              <Button size="lg" className="btn-secondary-authority text-lg px-10 py-5">
                Vérifier une Accréditation
              </Button>
            </div>

            {/* Government-style Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gchea-gold mb-2 font-formal">120+</div>
                <div className="text-sm text-white/90 font-medium uppercase tracking-wider">Pays Membres</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gchea-gold mb-2 font-formal">5000+</div>
                <div className="text-sm text-white/90 font-medium uppercase tracking-wider">Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gchea-gold mb-2 font-formal">25+</div>
                <div className="text-sm text-white/90 font-medium uppercase tracking-wider">Ans d'Autorité</div>
              </div>
            </div>
          </div>

          {/* Right Content - More formal, institutional */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10">
              {/* Main institutional image */}
              <div className="relative overflow-hidden rounded-lg mb-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&h=500&fit=crop" 
                  alt="Assemblée mondiale de l'éducation"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gchea-navy/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <Badge className="bg-gchea-gold text-gchea-navy mb-3 font-semibold">
                    Partenariat UNESCO
                  </Badge>
                  <h3 className="text-lg font-bold mb-2">Assemblée Mondiale de l'Éducation 2024</h3>
                  <p className="text-sm opacity-90">Établissement des normes internationales d'excellence</p>
                </div>
              </div>

              {/* Authority card */}
              <div className="bg-white/15 backdrop-blur-lg rounded-lg p-8 border border-white/20 pulse-glow">
                <div className="flex items-center mb-6">
                  <Shield className="w-10 h-10 text-gchea-gold mr-4" />
                  <h3 className="text-2xl font-bold text-white font-formal">Autorité Mondiale</h3>
                </div>
                <p className="text-white/95 mb-6 text-lg leading-relaxed">
                  Partenaire officiel des gouvernements, de l'ONU et de l'UNESCO pour 
                  établir et maintenir les normes mondiales d'excellence éducative.
                </p>
                <div className="flex items-center space-x-4">
                  <Badge className="bg-gchea-gold text-gchea-navy font-semibold">Gouvernance</Badge>
                  <Badge className="bg-white/20 text-white font-semibold">Régulation</Badge>
                  <Badge className="bg-white/20 text-white font-semibold">Excellence</Badge>
                </div>
              </div>

              {/* Floating authority elements */}
              <div className="absolute -top-4 -right-4 bg-gchea-gold rounded-full w-20 h-20 flex items-center justify-center animate-authority-pulse shadow-xl">
                <Building className="w-10 h-10 text-gchea-navy" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30 shadow-lg">
                <Globe className="w-8 h-8 text-gchea-gold" />
              </div>
            </div>

            {/* Background institutional elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-32 left-16 w-24 h-24 bg-gchea-gold/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-32 right-16 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
