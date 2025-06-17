
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, Shield, Zap, Award, Users, BookOpen } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Globe,
      title: "Portée Mondiale Inégalée",
      description: "Opérations dans plus de 120 pays avec des partenariats stratégiques avec des gouvernements et des institutions académiques de premier plan.",
      badge: "120+ Pays"
    },
    {
      icon: Shield,
      title: "Reconnaissance Officielle",
      description: "Officiellement reconnu par les Nations Unies (ONU) et l'UNESCO, avec le siège social régi par le gouvernement d'Almonte City.",
      badge: "ONU & UNESCO"
    },
    {
      icon: Zap,
      title: "Innovation Éducative",
      description: "Pionnier dans l'IA éducative, la blockchain pour la vérification des diplômes, et les salles de classe en réalité virtuelle.",
      badge: "Technologie de Pointe"
    },
    {
      icon: Award,
      title: "Excellence Académique",
      description: "Standards rigoureux de qualité pour garantir que les institutions partenaires maintiennent les plus hauts niveaux d'excellence.",
      badge: "Standards Élevés"
    },
    {
      icon: Users,
      title: "Impact Social",
      description: "Investissements dans l'infrastructure éducative des pays en développement, favorisant l'égalité des sexes et l'éducation inclusive.",
      badge: "Impact Mondial"
    },
    {
      icon: BookOpen,
      title: "Secteurs Émergents",
      description: "Extension vers l'accréditation médicale, les programmes STEM, la technologie verte et l'entrepreneuriat mondial.",
      badge: "Innovation"
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
    <section id="a-propos" className="section-gradient py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gchea-purple text-white mb-4">À Propos de GCHEA</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gchea-dark-purple mb-6">
            Transformer l'Éducation Mondiale avec une 
            <span className="text-gchea-bright-gold"> Attitude Audacieuse</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Le Conseil Mondial pour l'Accréditation de l'Enseignement Supérieur (GCHEA) est un organisme 
            d'accréditation prestigieux et internationalement reconnu, basé à Genève, en Suisse, 
            qui révolutionne les standards éducatifs mondiaux.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gchea-purple/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gchea-purple to-gchea-light-purple rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="border-gchea-bright-gold text-gchea-bright-gold">
                    {feature.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-gchea-dark-purple mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnerships Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gchea-purple/10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gchea-dark-purple mb-4">
              Partenariats Stratégiques Mondiaux
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              GCHEA collabore avec des conseils d'accréditation régionaux, des ministères de l'éducation 
              et des alliances académiques mondiales pour établir de nouveaux standards d'excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerships.map((partnership, index) => (
              <div 
                key={index} 
                className="flex items-center p-4 bg-gchea-cream rounded-xl border border-gchea-gold/30 hover:border-gchea-bright-gold transition-colors"
              >
                <div className="w-3 h-3 bg-gchea-bright-gold rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-gchea-dark-purple font-medium">{partnership}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gchea-dark-purple mb-4">
            Rejoignez-nous pour Élever l'Éducation à des Niveaux Inédits
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Les institutions cherchant une accréditation et une reconnaissance mondiales peuvent 
            s'associer à GCHEA pour renforcer leur prestige académique.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
