
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Globe, Users, Award, Shield, Building2, Zap, Target, TrendingUp, CheckCircle, Star } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    { icon: Globe, text: "120+ Pays Membres", color: "text-blue-400" },
    { icon: Building2, text: "5000+ Institutions Accréditées", color: "text-green-400" },
    { icon: Users, text: "50M+ Étudiants Impactés", color: "text-purple-400" },
    { icon: Award, text: "25+ Ans d'Excellence", color: "text-amber-400" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Excellence & Intégrité",
      description: "Maintenir les plus hauts standards de qualité éducative mondiale avec transparence totale.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Target,
      title: "Innovation & Adaptation",
      description: "Pionnier des nouvelles méthodologies d'évaluation et d'accréditation pour l'éducation moderne.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: TrendingUp,
      title: "Impact & Transformation",
      description: "Catalyseur de changement positif dans l'écosystème éducatif mondial pour un avenir meilleur.",
      gradient: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <section id="a-propos" className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold px-6 py-3 text-lg mb-6">
            <Globe className="w-5 h-5 mr-2" />
            À Propos de GCHEA
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-800 bg-clip-text text-transparent">
              Autorité Mondiale
            </span>
            <br />
            <span className="text-slate-800">d'Excellence Éducative</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Depuis 1999, GCHEA façonne l'avenir de l'éducation mondiale en établissant 
            des standards d'excellence inégalés et en gouvernant la qualité éducative 
            à travers tous les continents.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-20">
          {/* Left: Image */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&h=600&fit=crop" 
                alt="Leadership mondial en éducation"
                className="relative w-full h-96 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <Badge className="bg-white/90 text-slate-900 font-bold mb-3">
                  <Star className="w-4 h-4 mr-2" />
                  Siège Mondial - Genève
                </Badge>
                <h3 className="text-2xl font-bold text-white mb-2">Centre d'Excellence Mondiale</h3>
                <p className="text-blue-100">Gouvernance éducative internationale</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300 group">
                  <achievement.icon className={`w-8 h-8 mb-4 ${achievement.color} group-hover:scale-110 transition-transform`} />
                  <div className="text-2xl font-black text-slate-900 mb-2">{achievement.text.split(' ')[0]}</div>
                  <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">{achievement.text.substring(achievement.text.indexOf(' ') + 1)}</div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-6 flex items-center">
                <Shield className="w-8 h-8 mr-3 text-amber-400" />
                Notre Mission Mondiale
              </h3>
              <p className="text-xl leading-relaxed mb-6 text-blue-100">
                Établir, maintenir et faire respecter les normes mondiales d'excellence 
                éducative en partenariat avec les gouvernements, l'ONU et l'UNESCO pour 
                garantir une éducation de qualité accessible à tous.
              </p>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="font-semibold">Certifié ISO 21001 - Management de l'Éducation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-4xl lg:text-5xl font-black text-center text-slate-900 mb-16">
            Nos <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Valeurs Fondamentales</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-lg">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 shadow-2xl">
          <h3 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Rejoignez la <span className="text-amber-400">Révolution Éducative</span>
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Découvrez comment GCHEA transforme l'éducation mondiale et comment votre 
            institution peut bénéficier de nos standards d'excellence reconnus internationalement.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 hover:from-amber-500 hover:to-yellow-600 font-bold px-12 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Zap className="w-5 h-5 mr-2" />
              Commencer l'Accréditation
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-bold px-12 py-6 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105">
              <Users className="w-5 h-5 mr-2" />
              Devenir Partenaire
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
