
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, Award, Users, Shield, Building, Landmark, Sparkles, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Banner Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1920&h=1080&fit=crop')",
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-indigo-900/90"></div>
      
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Authority Badge */}
            <div className="flex items-center space-x-3">
              <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 border-0 hover:from-amber-500 hover:to-yellow-600 px-6 py-3 text-base font-bold shadow-lg">
                <Landmark className="w-5 h-5 mr-2" />
                Reconnu par l'ONU & UNESCO
              </Badge>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping delay-75"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping delay-150"></div>
              </div>
            </div>
            
            {/* Logo and Title */}
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <img 
                  src="/lovable-uploads/b35afc73-3bc6-4cbf-8aa8-1e33f416eedc.png" 
                  alt="GCHEA Emblem" 
                  className="w-24 h-24 object-contain"
                />
                <div>
                  <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                    <span className="block bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                      GCHEA
                    </span>
                  </h1>
                  <p className="text-lg text-amber-400 font-semibold">Global Commission for Higher Education Accreditations</p>
                </div>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Conseil Mondial pour l'Accréditation
                </span>
                <span className="block bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                  de l'Enseignement Supérieur
                </span>
              </h2>
            </div>
            
            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed font-medium max-w-2xl">
              Autorité mondiale de régulation éducative basée à <span className="font-bold text-amber-400">Genève, Suisse</span>, 
              gouvernant les normes d'excellence académique dans plus de <span className="font-bold text-amber-400">120 pays</span> 
              avec une mission de transformation de l'éducation mondiale.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold px-12 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <Sparkles className="w-5 h-5 mr-2" />
                Services Officiels
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-amber-400 text-amber-400 bg-transparent hover:bg-amber-400 hover:text-slate-900 backdrop-blur-sm font-bold px-12 py-6 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                onClick={() => document.getElementById('verification')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Shield className="w-5 h-5 mr-2" />
                Vérifier une Accréditation
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-black text-amber-400 mb-2 group-hover:scale-110 transition-transform">120+</div>
                <div className="text-sm text-blue-200 font-semibold uppercase tracking-wider">Pays Membres</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-black text-amber-400 mb-2 group-hover:scale-110 transition-transform">5000+</div>
                <div className="text-sm text-blue-200 font-semibold uppercase tracking-wider">Institutions</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-black text-amber-400 mb-2 group-hover:scale-110 transition-transform">25+</div>
                <div className="text-sm text-blue-200 font-semibold uppercase tracking-wider">Ans d'Autorité</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10 space-y-6">
              {/* Main Image Card */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&h=500&fit=crop" 
                  alt="Assemblée mondiale de l'éducation"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-bold mb-3">
                    <Award className="w-4 h-4 mr-1" />
                    Partenariat UNESCO
                  </Badge>
                  <h3 className="text-xl font-bold mb-2">Assemblée Mondiale de l'Éducation 2024</h3>
                  <p className="text-sm text-blue-100">Établissement des normes internationales d'excellence</p>
                </div>
              </div>

              {/* Authority Card */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl hover:bg-white/15 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <Shield className="w-6 h-6 text-slate-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Autorité Mondiale</h3>
                </div>
                <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                  Partenaire officiel des gouvernements, de l'ONU et de l'UNESCO pour 
                  établir et maintenir les normes mondiales d'excellence éducative.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-bold">
                    <Building className="w-4 h-4 mr-1" />
                    Gouvernance
                  </Badge>
                  <Badge className="bg-white/20 text-white font-semibold border border-white/30">
                    <Zap className="w-4 h-4 mr-1" />
                    Régulation
                  </Badge>
                  <Badge className="bg-white/20 text-white font-semibold border border-white/30">
                    <Globe className="w-4 h-4 mr-1" />
                    Excellence
                  </Badge>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
              <Building className="w-12 h-12 text-slate-900" />
            </div>
            
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 shadow-xl">
              <Globe className="w-10 h-10 text-amber-400" />
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
