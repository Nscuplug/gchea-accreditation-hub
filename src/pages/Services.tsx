
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Globe, Award, Users, Building, Landmark, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: "Accréditation Institutionnelle",
      description: "Certification complète des établissements d'enseignement supérieur selon les standards internationaux.",
      features: ["Évaluation complète", "Certification ISO 21001", "Reconnaissance mondiale", "Suivi continu"],
      icon: Building
    },
    {
      title: "Accréditation Programmatique",
      description: "Validation des programmes académiques spécifiques pour garantir leur qualité et pertinence.",
      features: ["Analyse curriculaire", "Évaluation pédagogique", "Standards sectoriels", "Amélioration continue"],
      icon: Award
    },
    {
      title: "Éducation Numérique",
      description: "Certification des plateformes et programmes d'apprentissage en ligne.",
      features: ["Technologie éducative", "Accessibilité numérique", "Sécurité des données", "Innovation pédagogique"],
      icon: Globe
    },
    {
      title: "Formation Professionnelle",
      description: "Accréditation des programmes de formation continue et développement professionnel.",
      features: ["Compétences métier", "Certification industrielle", "Partenariats entreprises", "Employabilité"],
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Services d'Accréditation
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                Excellence Académique Mondiale
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Des services d'accréditation complets pour élever les standards éducatifs 
              et garantir la reconnaissance internationale de vos programmes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                <CardHeader className="pb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-slate-800">{service.title}</CardTitle>
                  </div>
                  <p className="text-slate-600 text-lg">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    En Savoir Plus
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Processus d'Accréditation</h2>
            <p className="text-xl text-slate-600">Un processus rigoureux en 4 étapes pour garantir l'excellence</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Candidature", description: "Soumission du dossier et évaluation préliminaire" },
              { step: "2", title: "Évaluation", description: "Audit complet par nos experts internationaux" },
              { step: "3", title: "Certification", description: "Délivrance du certificat d'accréditation" },
              { step: "4", title: "Suivi", description: "Monitoring continu et renouvellement" }
            ].map((phase, index) => (
              <Card key={index} className="text-center shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{phase.title}</h3>
                  <p className="text-slate-600">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
