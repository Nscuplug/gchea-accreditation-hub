
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Briefcase, MapPin, Clock, Users, Award, Send } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const openPositions = [
    {
      title: "Directeur Régional - Afrique de l'Ouest",
      location: "Dakar, Sénégal",
      type: "Temps Plein",
      experience: "10+ ans",
      department: "Opérations Régionales",
      description: "Leadership des activités d'accréditation pour la région Afrique de l'Ouest, développement de partenariats stratégiques.",
      requirements: ["PhD en Éducation", "Expérience internationale", "Trilingue (FR/EN/Local)", "Leadership confirmé"],
      posted: "2024-03-10"
    },
    {
      title: "Expert en Intelligence Artificielle Éducative",
      location: "Tokyo, Japon / Remote",
      type: "Hybride",
      experience: "5+ ans",
      department: "Innovation & Technologie",
      description: "Développement de standards et outils d'accréditation basés sur l'IA pour l'évaluation des programmes éducatifs.",
      requirements: ["Master en IA/ML", "Expérience EdTech", "Python/TensorFlow", "Recherche académique"],
      posted: "2024-03-05"
    },
    {
      title: "Responsable Assurance Qualité - Business Schools",
      location: "Londres, Royaume-Uni",
      type: "Temps Plein",
      experience: "7+ ans",
      department: "Standards Académiques",
      description: "Supervision des processus d'accréditation pour les écoles de commerce et programmes MBA mondiaux.",
      requirements: ["MBA", "Expérience AACSB/EQUIS", "Audit éducatif", "Management d'équipe"],
      posted: "2024-02-28"
    }
  ];

  const benefits = [
    "Salaire compétitif selon l'expérience",
    "Couverture santé internationale",
    "30 jours de congés payés",
    "Formation continue financée",
    "Télétravail flexible",
    "Voyages professionnels mondiaux"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 mb-6">
              <Briefcase className="w-4 h-4 mr-2" />
              Offres d'Emploi
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                Rejoignez Notre Équipe
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Construisez l'avenir de l'enseignement supérieur mondial avec une équipe d'experts passionnés.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-800 mb-8">Postes Ouverts</h2>
              <div className="space-y-6">
                {openPositions.map((position, index) => (
                  <Card key={index} className="shadow-lg border-0">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge className="bg-blue-100 text-blue-800">{position.department}</Badge>
                        <span className="text-slate-600 text-sm">
                          Publié le {new Date(position.posted).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                      <CardTitle className="text-xl text-slate-800">{position.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-slate-600">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </span>
                        <Badge variant="outline">{position.type}</Badge>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.experience}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 mb-4">{position.description}</p>
                      
                      <h4 className="font-semibold text-slate-800 mb-2">Prérequis</h4>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {position.requirements.map((req, idx) => (
                          <div key={idx} className="flex items-center">
                            <Award className="w-4 h-4 text-blue-600 mr-2" />
                            <span className="text-slate-700 text-sm">{req}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Send className="w-4 h-4 mr-2" />
                        Postuler
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-8">Avantages</h2>
              <Card className="shadow-lg border-0 mb-8">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">Package Complet</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <Award className="w-4 h-4 text-green-600 mr-3" />
                        <span className="text-slate-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">Contact RH</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-slate-600">
                      <strong>Email:</strong> careers@gchea.org
                    </p>
                    <p className="text-slate-600">
                      <strong>Téléphone:</strong> +41 22 123 4567
                    </p>
                    <p className="text-slate-600">
                      <strong>LinkedIn:</strong> GCHEA Careers
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
