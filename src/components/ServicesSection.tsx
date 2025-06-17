
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  BookOpen, 
  Monitor, 
  Wrench, 
  Microscope, 
  Brain,
  Leaf,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const ServicesSection = () => {
  const accreditationServices = [
    {
      icon: GraduationCap,
      title: "Accréditation Universitaire",
      description: "Validation des universités de premier rang qui respectent nos standards mondiaux rigoureux",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: BookOpen,
      title: "Accréditation Programmatique",
      description: "Évaluation de programmes de diplômes spécialisés pour leur pertinence industrielle",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Monitor,
      title: "Éducation en Ligne & à Distance",
      description: "Assurance qualité pour l'éducation via les plateformes numériques",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Wrench,
      title: "Formation Professionnelle & Technique",
      description: "Approbation d'institutions axées sur les compétences répondant aux demandes du marché",
      color: "from-orange-500 to-red-600"
    }
  ];

  const innovationAreas = [
    {
      icon: Brain,
      title: "IA Éducative Personnalisée",
      description: "Apprentissage adaptatif alimenté par l'intelligence artificielle"
    },
    {
      icon: CheckCircle,
      title: "Vérification Blockchain",
      description: "Système de vérification des diplômes basé sur la blockchain"
    },
    {
      icon: Monitor,
      title: "Salles de Classe VR",
      description: "Environnements d'apprentissage immersifs en réalité virtuelle"
    },
    {
      icon: Leaf,
      title: "Solutions Éducatives Durables",
      description: "Modèles d'éducation respectueux de l'environnement"
    }
  ];

  const emergingSectors = [
    {
      icon: Microscope,
      title: "Éducation Médicale & Santé",
      description: "Standards d'accréditation pour les programmes médicaux de pointe"
    },
    {
      icon: Brain,
      title: "STEM & Intelligence Artificielle",
      description: "Programmes spécialisés en sciences, technologie et IA"
    },
    {
      icon: Leaf,
      title: "Technologie Verte & Développement Durable",
      description: "Formation pour l'économie verte et le développement durable"
    },
    {
      icon: TrendingUp,
      title: "Leadership Entrepreneurial Mondial",
      description: "Programmes de formation en leadership et entrepreneuriat"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gchea-bright-gold text-black mb-4">Services Complets</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gchea-dark-purple mb-6">
            Services d'Accréditation &
            <span className="text-gchea-bright-gold"> Assurance Qualité</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            GCHEA fournit des services d'accréditation multi-niveaux qui valident la crédibilité institutionnelle, 
            les qualifications du corps professoral, les contributions à la recherche et les résultats d'apprentissage des étudiants.
          </p>
        </div>

        {/* Accreditation Services */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gchea-dark-purple text-center mb-12">
            Accréditation Institutionnelle & Programmatique
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {accreditationServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-0 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-gchea-dark-purple">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Innovation Section */}
        <div className="bg-gradient-to-br from-gchea-cream to-white rounded-3xl p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gchea-dark-purple mb-4">
              Recherche & Innovation dans l'Enseignement Supérieur
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              GCHEA favorise l'innovation dans les méthodologies d'apprentissage, l'éducation alimentée par l'IA 
              et les collaborations industrie-académie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovationAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gchea-purple/10">
                <div className="w-12 h-12 bg-gchea-purple rounded-lg flex items-center justify-center mb-4">
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gchea-dark-purple mb-2">{area.title}</h4>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Emerging Sectors */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gchea-dark-purple mb-4">
              Expansion vers de Nouveaux Horizons Éducatifs
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              GCHEA est à l'avant-garde des secteurs éducatifs émergents, lançant de nouveaux verticaux 
              pour répondre aux besoins futurs du marché mondial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {emergingSectors.map((sector, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gchea-purple/20">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-gchea-bright-gold to-gchea-gold rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <sector.icon className="w-7 h-7 text-black" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gchea-dark-purple mb-3">{sector.title}</h4>
                      <p className="text-gray-600">{sector.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-gchea-purple to-gchea-light-purple rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Prêt à Obtenir l'Accréditation GCHEA ?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez les milliers d'institutions qui font confiance à GCHEA pour leur excellence académique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gchea-bright-gold hover:bg-gchea-gold text-black font-semibold">
              Demander l'Accréditation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gchea-purple">
              Télécharger la Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
