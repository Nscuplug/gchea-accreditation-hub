
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, Shield, Zap, Award, Users, BookOpen, Sparkles, Target, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Globe,
      title: "Portée Mondiale Inégalée",
      description: "Opérations dans plus de 120 pays avec des partenariats stratégiques avec des gouvernements et des institutions académiques de premier plan.",
      badge: "120+ Pays",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Shield,
      title: "Reconnaissance Officielle",
      description: "Officiellement reconnu par les Nations Unies (ONU) et l'UNESCO, avec le siège social régi par le gouvernement d'Almonte City.",
      badge: "ONU & UNESCO",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Zap,
      title: "Innovation Éducative",
      description: "Pionnier dans l'IA éducative, la blockchain pour la vérification des diplômes, et les salles de classe en réalité virtuelle.",
      badge: "Technologie de Pointe",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: Award,
      title: "Excellence Académique",
      description: "Standards rigoureux de qualité pour garantir que les institutions partenaires maintiennent les plus hauts niveaux d'excellence.",
      badge: "Standards Élevés",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      icon: Users,
      title: "Impact Social",
      description: "Investissements dans l'infrastructure éducative des pays en développement, favorisant l'égalité des sexes et l'éducation inclusive.",
      badge: "Impact Mondial",
      gradient: "from-rose-500 to-pink-600"
    },
    {
      icon: BookOpen,
      title: "Secteurs Émergents",
      description: "Extension vers l'accréditation médicale, les programmes STEM, la technologie verte et l'entrepreneuriat mondial.",
      badge: "Innovation",
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  const partnerships = [
    "Commission Européenne de l'Enseignement Supérieur (EHEC)",
    "Consortium d'Accréditation Asie-Pacifique (APAC)",
    "Union Africaine pour l'Excellence Académique (AUAE)",
    "Conseil Latino-Américain pour la Qualité de l'Éducation (LACEQ)",
    "Autorité d'Enseignement Supérieur du Moyen-Orient (MEHLA)"
  ];

  return (
    <section id="a-propos" className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill-opacity="0.03"%3E%3Cpolygon fill="%23000" points="50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40"/%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white mb-6 px-6 py-3 text-base font-bold shadow-lg">
            <Sparkles className="w-5 h-5 mr-2" />
            À Propos de GCHEA
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight">
            Transformer l'Éducation Mondiale avec une 
            <span className="block bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent mt-2">
              Attitude Audacieuse
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Le Conseil Mondial pour l'Accréditation de l'Enseignement Supérieur (GCHEA) est un organisme 
            d'accréditation prestigieux et internationalement reconnu, basé à <span className="font-bold text-blue-600">Genève, en Suisse</span>, 
            qui révolutionne les standards éducatifs mondiaux.
          </p>
        </div>

        {/* Global Summit Images Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&h=500&fit=crop" 
                alt="Conférence mondiale sur l'éducation"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-bold mb-3">
                  <Target className="w-4 h-4 mr-1" />
                  Global Summit
                </Badge>
                <h3 className="text-xl font-bold mb-2">Conférence Mondiale sur l'Excellence Académique</h3>
                <p className="text-sm text-blue-100">Réunissant 50+ pays à Genève</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=800&h=500&fit=crop" 
                alt="Siège de l'UNESCO à Genève"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <Badge className="bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-900 font-bold mb-3">
                  <Award className="w-4 h-4 mr-1" />
                  UNESCO Partnership
                </Badge>
                <h3 className="text-xl font-bold mb-2">Partenariat Officiel UNESCO</h3>
                <p className="text-sm text-emerald-100">Reconnaissance internationale officielle</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8 relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <Badge variant="outline" className="border-amber-400 text-amber-600 font-bold">
                      {feature.badge}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnerships Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl"></div>
          <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 lg:p-16 shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative text-center mb-16">
              <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-bold mb-6 px-6 py-3">
                <TrendingUp className="w-5 h-5 mr-2" />
                Partenariats Stratégiques
              </Badge>
              <h3 className="text-4xl font-black text-white mb-6">
                Partenariats Stratégiques Mondiaux
              </h3>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                GCHEA collabore avec des conseils d'accréditation régionaux, des ministères de l'éducation 
                et des alliances académiques mondiales pour établir de nouveaux standards d'excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnerships.map((partnership, index) => (
                <div 
                  key={index} 
                  className="group flex items-center p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-amber-400/50 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-4 h-4 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mr-4 flex-shrink-0 shadow-lg group-hover:scale-125 transition-transform"></div>
                  <span className="text-white font-medium group-hover:text-amber-200 transition-colors">{partnership}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-block p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl shadow-xl">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Rejoignez-nous pour Élever l'Éducation à des Niveaux Inédits
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Les institutions cherchant une accréditation et une reconnaissance mondiales peuvent 
              s'associer à GCHEA pour renforcer leur prestige académique.
            </p>
            <div className="flex justify-center space-x-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-75"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-150"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
