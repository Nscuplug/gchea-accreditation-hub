
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, Award, Users, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="accueil" className="hero-gradient text-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                <Globe className="w-4 h-4 mr-2" />
                Reconnu par l'ONU & UNESCO
              </Badge>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Conseil Mondial</span>
              <span className="block text-gchea-bright-gold">pour l'Accréditation</span>
              <span className="block">de l'Enseignement Supérieur</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
              Organisation internationale prestigieuse basée à <strong>Genève, Suisse</strong>, 
              accréditant des institutions dans plus de <strong>120 pays</strong> avec 
              une attitude audacieuse qui transforme l'éducation mondiale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-gchea-bright-gold hover:bg-gchea-gold text-black font-semibold px-8 py-4 text-lg">
                Découvrir Nos Services
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gchea-purple px-8 py-4 text-lg">
                Vérifier un Certificat
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gchea-bright-gold">120+</div>
                <div className="text-sm text-white/80">Pays</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gchea-bright-gold">5000+</div>
                <div className="text-sm text-white/80">Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gchea-bright-gold">25+</div>
                <div className="text-sm text-white/80">Ans d'Excellence</div>
              </div>
            </div>
          </div>

          {/* Right Content - Images and Floating Elements */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10">
              {/* UNESCO Summit Image */}
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&h=600&fit=crop" 
                  alt="Sommet mondial de l'éducation UNESCO"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="bg-gchea-bright-gold text-black mb-2">UNESCO Partnership</Badge>
                  <p className="text-sm">Sommet Mondial de l'Éducation 2024</p>
                </div>
              </div>

              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 float-animation">
                <div className="flex items-center mb-6">
                  <Award className="w-8 h-8 text-gchea-bright-gold mr-3" />
                  <h3 className="text-xl font-semibold">Excellence Mondiale</h3>
                </div>
                <p className="text-white/90 mb-6">
                  Partenaires officiels avec les gouvernements, l'ONU et l'UNESCO pour 
                  établir les normes mondiales d'excellence académique.
                </p>
                <div className="flex items-center space-x-4">
                  <Badge className="bg-gchea-bright-gold text-black">Innovation</Badge>
                  <Badge className="bg-white/20 text-white">Leadership</Badge>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 bg-gchea-bright-gold rounded-full w-16 h-16 flex items-center justify-center animate-bounce">
                <Users className="w-8 h-8 text-black" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <Zap className="w-6 h-6 text-gchea-bright-gold" />
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-20 left-10 w-20 h-20 bg-gchea-bright-gold/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
