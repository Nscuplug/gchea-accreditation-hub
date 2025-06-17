
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, Users, Award, Building, BookOpen, Handshake } from 'lucide-react';

const PartnershipsSection = () => {
  const globalPartners = [
    {
      region: "Europe",
      organization: "Commission Européenne de l'Enseignement Supérieur",
      acronym: "EHEC",
      description: "Collaboration pour l'harmonisation des standards éducatifs européens",
      icon: Building,
      color: "bg-blue-500"
    },
    {
      region: "Asie-Pacifique",
      organization: "Consortium d'Accréditation Asie-Pacifique",
      acronym: "APAC",
      description: "Facilitation de la mobilité étudiante dans la région Asie-Pacifique",
      icon: Globe,
      color: "bg-green-500"
    },
    {
      region: "Afrique",
      organization: "Union Africaine pour l'Excellence Académique",
      acronym: "AUAE",
      description: "Renforcement des capacités éducatives africaines",
      icon: Award,
      color: "bg-orange-500"
    },
    {
      region: "Amérique Latine",
      organization: "Conseil Latino-Américain pour la Qualité de l'Éducation",
      acronym: "LACEQ",
      description: "Développement de l'excellence éducative en Amérique Latine",
      icon: BookOpen,
      color: "bg-purple-500"
    },
    {
      region: "Moyen-Orient",
      organization: "Autorité d'Enseignement Supérieur du Moyen-Orient",
      acronym: "MEHLA",
      description: "Innovation éducative et échange académique régional",
      icon: Users,
      color: "bg-red-500"
    }
  ];

  const initiatives = [
    {
      title: "Mobilité Étudiante Mondiale",
      description: "Facilitation des échanges académiques et transfert de crédits internationaux",
      impact: "500K+ étudiants"
    },
    {
      title: "Programmes d'Échange Académique",
      description: "Collaborations entre universités pour la recherche et l'innovation",
      impact: "2000+ institutions"
    },
    {
      title: "Reconnaissance Mondiale des Diplômes",
      description: "Standardisation pour l'emploi et la poursuite d'études à l'international",
      impact: "120 pays"
    },
    {
      title: "Investissement dans les Pays en Développement",
      description: "Infrastructure éducative et formation du corps professoral",
      impact: "50+ projets"
    }
  ];

  const impactAreas = [
    {
      icon: Building,
      title: "Construction d'Universités",
      description: "Centres de formation professionnelle dans les régions défavorisées"
    },
    {
      icon: Users,
      title: "Bourses & Financement",
      description: "Programmes d'aide pour les étudiants défavorisés"
    },
    {
      icon: Award,
      title: "Égalité des Sexes",
      description: "Promotion de l'éducation inclusive et égalitaire"
    },
    {
      icon: Handshake,
      title: "Renforcement Local",
      description: "Formation des organismes d'accréditation locaux"
    }
  ];

  return (
    <section id="partenariats" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gchea-purple text-white mb-4">
            <Handshake className="w-4 h-4 mr-2" />
            Partenariats Mondiaux
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gchea-dark-purple mb-6">
            Réseau de Partenaires
            <span className="text-gchea-bright-gold"> Stratégiques Mondiaux</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            GCHEA opère en partenariat avec des gouvernements, universités et organismes d'accréditation 
            sur tous les continents, établissant des standards d'excellence de classe mondiale.
          </p>
        </div>

        {/* Global Summit Images */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=600&h=400&fit=crop" 
              alt="Architecture moderne UNESCO"
              className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <Badge className="bg-gchea-bright-gold text-black mb-2">UNESCO HQ</Badge>
              <p className="text-sm font-medium">Siège Mondial UNESCO</p>
            </div>
          </div>
          
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=600&h=400&fit=crop" 
              alt="Assemblée internationale"
              className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <Badge className="bg-gchea-bright-gold text-black mb-2">Global Assembly</Badge>
              <p className="text-sm font-medium">Assemblée Mondiale GCHEA</p>
            </div>
          </div>
          
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=600&h=400&fit=crop" 
              alt="Conférence technologie éducative"
              className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <Badge className="bg-gchea-bright-gold text-black mb-2">EdTech Summit</Badge>
              <p className="text-sm font-medium">Innovation Éducative</p>
            </div>
          </div>
        </div>

        {/* Global Partners */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gchea-dark-purple text-center mb-12">
            Partenaires Régionaux d'Excellence
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {globalPartners.map((partner, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gchea-purple/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${partner.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                      <partner.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <Badge variant="outline" className="border-gchea-bright-gold text-gchea-bright-gold mb-2">
                        {partner.region}
                      </Badge>
                      <h4 className="font-bold text-gchea-dark-purple text-lg">{partner.acronym}</h4>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gchea-dark-purple mb-3">{partner.organization}</h4>
                  <p className="text-gray-600">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Initiatives */}
        <div className="bg-gradient-to-br from-gchea-cream to-white rounded-3xl p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gchea-dark-purple mb-4">
              Initiatives de Collaboration Internationale
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              À travers ces associations, GCHEA facilite les programmes d'échange, 
              la mobilité étudiante et la reconnaissance mondiale des diplômes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gchea-purple/10">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-bold text-gchea-dark-purple text-lg">{initiative.title}</h4>
                  <Badge className="bg-gchea-bright-gold text-black">{initiative.impact}</Badge>
                </div>
                <p className="text-gray-600">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact in Developing Nations */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gchea-dark-purple mb-4">
              Investissement dans les Nations en Développement
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              GCHEA croit fermement que l'éducation est le fondement du progrès. Pour combler 
              l'écart éducatif mondial, nous investissons dans l'infrastructure éducative.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-gchea-purple/20">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gchea-purple to-gchea-light-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gchea-dark-purple mb-3">{area.title}</h4>
                  <p className="text-gray-600 text-sm">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-gchea-purple to-gchea-light-purple rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Devenez Partenaire de GCHEA
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Rejoignez notre réseau mondial d'institutions d'excellence et participez 
            à la transformation de l'éducation internationale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gchea-bright-gold hover:bg-gchea-gold text-black font-semibold px-8 py-4 rounded-lg transition-colors">
              Demander un Partenariat
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gchea-purple font-semibold px-8 py-4 rounded-lg transition-colors">
              En Savoir Plus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
